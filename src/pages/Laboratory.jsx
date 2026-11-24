import { useState } from "react";
import { promptExamples, textFormats } from "../data/promptExamples";
import Icon from "../components/icons/Icon";
import SparklesIcon from "../components/icons/SparklesIcon";
import "./Laboratory.css";

export default function Laboratory() {
  // Controla o modo selecionado e os campos dos dois tipos de prompt.
  const [mode, setMode] = useState("text");
  const [fields, setFields] = useState({
    objective: "",
    context: "",
    format: "explanation",
    subject: "",
    style: "",
    composition: "",
  });

  // Guarda o prompt montado e as mensagens de validação ou cópia.
  const [assembledPrompt, setAssembledPrompt] = useState("");
  const [error, setError] = useState("");
  const [copyMessage, setCopyMessage] = useState("");

  // Atualiza um campo e remove o resultado anterior para evitar divergências.
  function updateField(name, value) {
    setFields((previous) => ({ ...previous, [name]: value }));
    setAssembledPrompt("");
    setError("");
    setCopyMessage("");
  }

  // Alterna o tipo de prompt sem apagar o que já foi digitado.
  function changeMode(nextMode) {
    setMode(nextMode);
    setAssembledPrompt("");
    setError("");
    setCopyMessage("");
  }

  // Preenche somente os campos do modo atual com um exemplo educativo.
  function useExample() {
    setFields((previous) => ({
      ...previous,
      ...promptExamples[mode],
    }));
    setAssembledPrompt("");
    setError("");
    setCopyMessage("");
  }

  // Limpa os campos do modo atual e suas mensagens.
  function clearPrompt() {
    const emptyFields =
      mode === "text"
        ? { objective: "", context: "", format: "explanation" }
        : { subject: "", style: "", composition: "" };

    setFields((previous) => ({ ...previous, ...emptyFields }));
    setAssembledPrompt("");
    setError("");
    setCopyMessage("");
  }

  // Valida os campos e combina as instruções sem chamar uma IA externa.
  function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setCopyMessage("");

    if (mode === "text") {
      if (!fields.objective.trim() || !fields.context.trim()) {
        setError("Preencha o objetivo e o contexto.");
        return;
      }

      const selectedFormat = textFormats.find(
        (format) => format.id === fields.format,
      );

      if (!selectedFormat) {
        setError("Selecione um formato válido.");
        return;
      }

      setAssembledPrompt(
        [
          `Objetivo: ${fields.objective.trim()}`,
          `Contexto: ${fields.context.trim()}`,
          `Formato: ${selectedFormat.instruction}`,
        ].join("\n\n"),
      );
    } else {
      if (
        !fields.subject.trim() ||
        !fields.style.trim() ||
        !fields.composition.trim()
      ) {
        setError("Preencha o assunto, o estilo e a composição.");
        return;
      }

      setAssembledPrompt(
        [
          `Crie uma imagem de: ${fields.subject.trim()}`,
          `Estilo: ${fields.style.trim()}`,
          `Composição: ${fields.composition.trim()}`,
        ].join("\n\n"),
      );
    }
  }

  // Copia o prompt e informa quando o navegador não permite a operação.
  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(assembledPrompt);
      setCopyMessage("Prompt copiado!");
    } catch {
      setCopyMessage(
        "Não foi possível copiar automaticamente. Selecione o texto e copie.",
      );
    }
  }

  return (
    <div className="laboratory-page">
      {/* Apresenta o objetivo da ferramenta e seu funcionamento atual. */}
      <header className="laboratory-header">
        <h1>Transforme ideias em bons prompts</h1>
        <p>Estruture seu pedido e veja dicas para melhorar o resultado.</p>
        <small>
          Modo educativo: montagem de prompts e orientações locais. A geração
          com IA ainda não está conectada.
        </small>
      </header>

      {/* Permite escolher entre instruções para texto e imagem. */}
      <div
        className="laboratory-modes"
        role="group"
        aria-label="Tipo de prompt"
      >
        <button
          type="button"
          aria-pressed={mode === "text"}
          onClick={() => changeMode("text")}
        >
          Texto
        </button>
        <button
          type="button"
          aria-pressed={mode === "image"}
          onClick={() => changeMode("image")}
        >
          Imagem
        </button>
      </div>

      <div className="laboratory-layout">
        {/* Reúne os campos guiados e as ações de preenchimento. */}
        <section className="laboratory-card">
          <h2>
            <Icon name="pencil-prompt" size={22} color="var(--focus)" />
            Monte seu prompt
          </h2>

          <form onSubmit={handleSubmit}>
            {mode === "text" ? (
              <>
                <label htmlFor="prompt-objective">Objetivo *</label>
                <input
                  id="prompt-objective"
                  value={fields.objective}
                  onChange={(event) =>
                    updateField("objective", event.target.value)
                  }
                  maxLength={200}
                  required
                  placeholder="O que você quer que a IA faça?"
                />

                <label htmlFor="prompt-context">Contexto *</label>
                <textarea
                  id="prompt-context"
                  value={fields.context}
                  onChange={(event) =>
                    updateField("context", event.target.value)
                  }
                  maxLength={1200}
                  required
                  rows={5}
                  placeholder="Explique a situação, o público e os detalhes."
                />

                <label htmlFor="prompt-format">Formato *</label>
                <select
                  id="prompt-format"
                  value={fields.format}
                  onChange={(event) =>
                    updateField("format", event.target.value)
                  }
                >
                  {textFormats.map((format) => (
                    <option key={format.id} value={format.id}>
                      {format.label}
                    </option>
                  ))}
                </select>
              </>
            ) : (
              <>
                <label htmlFor="prompt-subject">Assunto *</label>
                <input
                  id="prompt-subject"
                  value={fields.subject}
                  onChange={(event) =>
                    updateField("subject", event.target.value)
                  }
                  maxLength={200}
                  required
                  placeholder="O que deve aparecer na imagem?"
                />

                <label htmlFor="prompt-style">Estilo *</label>
                <input
                  id="prompt-style"
                  value={fields.style}
                  onChange={(event) => updateField("style", event.target.value)}
                  maxLength={200}
                  required
                  placeholder="Ex.: ilustração digital, aquarela..."
                />

                <label htmlFor="prompt-composition">Composição *</label>
                <textarea
                  id="prompt-composition"
                  value={fields.composition}
                  onChange={(event) =>
                    updateField("composition", event.target.value)
                  }
                  maxLength={1200}
                  required
                  rows={5}
                  placeholder="Descreva enquadramento, iluminação e cores."
                />
              </>
            )}

            <div className="laboratory-secondary-actions">
              <button type="button" onClick={useExample}>
                Usar exemplo
              </button>
              <button type="button" onClick={clearPrompt}>
                Limpar
              </button>
            </div>

            {error && <p role="alert">{error}</p>}

            <button className="laboratory-submit" type="submit">
              <SparklesIcon size={18} />
              Montar prompt
              <Icon name="arrow-right-dark" size={16} />
            </button>
          </form>
        </section>

        <div className="laboratory-results">
          {/* Exibe o texto realmente montado, sem simular uma resposta de IA. */}
          <section
            className="laboratory-card"
            aria-labelledby="assembled-prompt-title"
          >
            <h2 id="assembled-prompt-title">
              <Icon name="chat-response" size={22} color="var(--focus)" />
              Seu prompt completo
            </h2>

            <div className="laboratory-output" aria-live="polite">
              {assembledPrompt ||
                "Preencha os campos ou use um exemplo para montar seu prompt."}
            </div>

            {assembledPrompt && (
              <button
                className="laboratory-copy"
                type="button"
                onClick={copyPrompt}
              >
                <Icon name="copy-response" size={16} />
                Copiar prompt
              </button>
            )}

            {copyMessage && <p role="status">{copyMessage}</p>}
          </section>

          {/* Oferece orientações educativas referentes ao modo escolhido. */}
          <section className="laboratory-card laboratory-tips">
            <h2>
              <Icon
                name="target-improve"
                size={22}
                color="var(--topic-icon-purple)"
              />
              Como melhorar
            </h2>

            <ul>
              {mode === "text" ? (
                <>
                  <li>Explique quem receberá a resposta.</li>
                  <li>Indique o tom e o nível de detalhe desejados.</li>
                  <li>Peça exemplos e confira as informações importantes.</li>
                </>
              ) : (
                <>
                  <li>Descreva o assunto principal com detalhes.</li>
                  <li>Escolha um estilo visual e uma paleta de cores.</li>
                  <li>Defina enquadramento, iluminação e cenário.</li>
                </>
              )}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
