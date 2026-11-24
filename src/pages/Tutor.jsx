import { useState } from "react";
import { tutorTopics } from "../data/tutorTopics";
import Icon from "../components/icons/Icon";
import "./Tutor.css";

const welcomeMessage = {
  id: "welcome",
  role: "assistant",
  text: "Olá! Posso ajudar com dúvidas sobre prompts, avaliação de respostas e uso responsável da IA. Escolha uma pergunta sugerida ou escreva sua dúvida.",
};

// Normaliza a escrita para comparar palavras com ou sem acentos.
function normalizeText(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

// Busca o assunto com mais palavras-chave presentes na dúvida.
function findTopic(question) {
  const words = new Set(normalizeText(question).match(/[a-z0-9]+/g) ?? []);

  let bestTopic = null;
  let bestScore = 0;

  for (const topic of tutorTopics) {
    const score = topic.keywords.filter((keyword) =>
      words.has(normalizeText(keyword)),
    ).length;

    if (score > bestScore) {
      bestTopic = topic;
      bestScore = score;
    }
  }

  return bestTopic;
}

export default function Tutor() {
  // Guarda a dúvida digitada e as mensagens da conversa atual.
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([welcomeMessage]);
  const [error, setError] = useState("");

  // Acrescenta a pergunta e a orientação educativa ao histórico.
  function addExchange(text, topic) {
    const answer = topic
      ? topic.answer
      : "Ainda não tenho uma orientação cadastrada para essa dúvida. " +
        "Tente perguntar sobre prompts, fontes, erros da IA, qualidade das respostas ou privacidade. " +
        "Você também pode escolher uma das perguntas sugeridas.";

    setMessages((previousMessages) => [
      ...previousMessages,
      {
        id: crypto.randomUUID(),
        role: "user",
        text,
      },
      {
        id: crypto.randomUUID(),
        role: "assistant",
        text: answer,
      },
    ]);

    setQuestion("");
    setError("");
  }

  // Valida a dúvida e procura uma resposta na base educativa local.
  function handleSubmit(event) {
    event.preventDefault();

    const trimmedQuestion = question.trim();

    if (!trimmedQuestion) {
      setError("Escreva uma dúvida antes de enviar.");
      return;
    }

    if (trimmedQuestion.length > 500) {
      setError("Use até 500 caracteres para escrever sua dúvida.");
      return;
    }

    addExchange(trimmedQuestion, findTopic(trimmedQuestion));
  }

  // Usa a resposta vinculada à sugestão, sem depender da busca por palavras.
  function selectSuggestion(topic) {
    addExchange(topic.question, topic);
  }

  // Limpa o histórico e restaura a mensagem inicial.
  function startNewConversation() {
    setMessages([welcomeMessage]);
    setQuestion("");
    setError("");
  }

  return (
    <div className="tutor-page">
      {/* Apresenta o tutor e identifica a origem das respostas. */}
      <header className="tutor-header">
        <div className="tutor-header__intro">
          <Icon
            name="graduation-tutor"
            size={36}
            color="var(--topic-icon-purple)"
          />

          <div>
            <h1>Tutor IA</h1>
            <p>
              Tire dúvidas, peça explicações e aprofunde seus estudos sobre IA
              generativa.
            </p>
          </div>
        </div>

        <button
          className="tutor-new"
          type="button"
          onClick={startNewConversation}
        >
          Nova conversa
        </button>
      </header>

      <p className="tutor-notice">
        Modo educativo: respostas locais preparadas, selecionadas por assunto. A
        integração com IA ainda não está conectada.
      </p>

      {/* Exibe o histórico com identificação de quem enviou cada mensagem. */}
      <section className="tutor-conversation" aria-label="Conversa educativa">
        <div
          className="tutor-messages"
          role="log"
          aria-label="Histórico de mensagens"
          aria-live="polite"
          aria-relevant="additions"
        >
          {messages.map((message) => (
            <article
              key={message.id}
              className={`tutor-message tutor-message--${message.role}`}
            >
              <span className="tutor-message__author">
                {message.role === "user" ? "Você" : "Tutor educativo"}
              </span>

              <p>{message.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Oferece perguntas com respostas cadastradas para iniciar a conversa. */}
      <section
        className="tutor-suggestions"
        aria-labelledby="suggestions-title"
      >
        <h2 id="suggestions-title">
          <Icon
            name="lightning-prompts"
            size={20}
            color="var(--topic-icon-purple)"
          />
          Perguntas sugeridas
        </h2>

        <div className="tutor-suggestions__list">
          {tutorTopics.map((topic) => (
            <button
              key={topic.id}
              type="button"
              onClick={() => selectSuggestion(topic)}
            >
              {topic.question}
            </button>
          ))}
        </div>
      </section>

      {/* Recebe dúvidas com limite de tamanho e orientação de privacidade. */}
      <form className="tutor-form" onSubmit={handleSubmit}>
        <label htmlFor="tutor-question">Qual é a sua dúvida?</label>

        <div className="tutor-form__input">
          <textarea
            id="tutor-question"
            value={question}
            onChange={(event) => {
              setQuestion(event.target.value);
              setError("");
            }}
            maxLength={500}
            rows={2}
            required
            placeholder="Ex.: Como verificar uma informação da IA?"
            aria-describedby="tutor-help tutor-counter"
          />

          <button type="submit" aria-label="Enviar dúvida">
            <Icon name="send-message" size={22} />
          </button>
        </div>

        <div className="tutor-form__details">
          <small id="tutor-help">
            Não compartilhe senhas, documentos ou dados pessoais sensíveis.
          </small>
          <small id="tutor-counter">{question.length}/500</small>
        </div>

        {error && (
          <p className="tutor-error" role="alert">
            {error}
          </p>
        )}
      </form>
    </div>
  );
}
