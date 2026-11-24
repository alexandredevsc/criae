import { useState } from "react";
import { Link, useSearchParams } from "react-router";
import { activities } from "../data/activities";
import Icon from "../components/icons/Icon";
import SparklesIcon from "../components/icons/SparklesIcon";
import solarPanel from "../assets/illustrations/painel-solar-v1.png";
import "./Challenges.css";

const POINTS_PER_ACTIVITY = 20;

export default function Challenges({
  completedActivityIds: correctActivityIds,
  onCompleteActivity,
  onRestartTrail,
}) {
  const [searchParams, setSearchParams] = useSearchParams();

  // Mantém a seleção e a exibição da correção da questão atual.
  const [selectedOptionId, setSelectedOptionId] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);

  // Identifica a atividade solicitada pela aula e pela trilha da URL.
  const activity = activities.find(
    (item) =>
      item.trailId === searchParams.get("trilha") &&
      item.lessonId === searchParams.get("aula"),
  );

  if (!activity) {
    return (
      <div className="challenges-page">
        <h1>Desafios</h1>
        <p>Escolha uma aula nas trilhas para iniciar sua atividade.</p>
        <Link to="/trilhas">Explorar trilhas</Link>
      </div>
    );
  }

  // Calcula a posição na trilha e a pontuação dos acertos registrados.
  const trailActivities = activities.filter(
    (item) => item.trailId === activity.trailId,
  );

  const currentIndex = trailActivities.findIndex(
    (item) => item.id === activity.id,
  );

  const totalPoints = correctActivityIds.length * POINTS_PER_ACTIVITY;
  const isCorrect = selectedOptionId === activity.correctOptionId;
  const hasEarnedPoints = correctActivityIds.includes(activity.id);

  // Calcula os acertos e a conclusão apenas da trilha atual.
  const trailCorrectCount = trailActivities.filter((item) =>
    correctActivityIds.includes(item.id),
  ).length;

  const isTrailCompleted = trailCorrectCount === trailActivities.length;

  // Corrige a resposta e comunica o acerto ao estado compartilhado do aplicativo.
  function verifyAnswer() {
    if (!selectedOptionId) return;

    setHasSubmitted(true);

    if (isCorrect) {
      onCompleteActivity(activity.id);
    }
  }

  // Abre outra questão e limpa a seleção e o resultado anteriores.
  function selectActivity(nextActivity) {
    if (nextActivity.id === activity.id) return;

    const nextParams = new URLSearchParams(searchParams);
    nextParams.set("trilha", nextActivity.trailId);
    nextParams.set("aula", nextActivity.lessonId);

    setSelectedOptionId("");
    setHasSubmitted(false);
    setSearchParams(nextParams);
  }

  // Reinicia os desafios da trilha atual, preservando os acertos das outras.
  function restartTrail() {
    onRestartTrail(activity.trailId);

    setSelectedOptionId("");
    setHasSubmitted(false);

    const nextParams = new URLSearchParams(searchParams);
    nextParams.set("trilha", activity.trailId);
    nextParams.set("aula", trailActivities[0].lessonId);
    setSearchParams(nextParams);
  }

  return (
    <div className="challenges-page">
      {/* Apresenta o objetivo do desafio e os pontos acumulados na sessão. */}
      <header className="challenges-header">
        <div>
          <h1>Você confiaria nesta resposta?</h1>
          <p>
            Analise a resposta da IA, avalie a qualidade das informações e
            escolha a melhor opção.
          </p>
        </div>

        <div className="challenge-score" role="status">
          <Icon
            name="menu-challenges"
            size={30}
            color="var(--topic-icon-purple)"
          />
          <div>
            <span>Pontuação</span>
            <strong>{totalPoints} pontos</strong>
          </div>
        </div>
      </header>

      {/* Mostra a posição atual e permite navegar pelas questões da trilha. */}
      <nav className="challenge-progress" aria-label="Questões da trilha">
        <strong>
          Questão {currentIndex + 1} de {trailActivities.length}
        </strong>

        <ol className="challenge-progress__steps">
          {trailActivities.map((item, index) => {
            const isCurrent = item.id === activity.id;
            const isCompleted = correctActivityIds.includes(item.id);

            return (
              <li key={item.id}>
                <button
                  type="button"
                  className={[
                    "challenge-progress__step",
                    isCurrent ? "challenge-progress__step--current" : "",
                    isCompleted ? "challenge-progress__step--completed" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  aria-label={`Questão ${index + 1}${
                    isCompleted ? ", acertada" : ""
                  }`}
                  aria-current={isCurrent ? "step" : undefined}
                  onClick={() => selectActivity(item)}
                >
                  <span aria-hidden="true">
                    {isCompleted ? "✓" : isCurrent ? "●" : ""}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </nav>

      <div className="challenge-layout">
        {/* Exibe o exemplo simulado que será avaliado pelo aluno. */}
        <section
          className="challenge-response"
          aria-labelledby="response-title"
        >
          <h2 id="response-title">
            <SparklesIcon size={22} color="var(--topic-icon-purple)" />
            Resposta da IA
          </h2>

          <div className="challenge-response__content">
            <blockquote>“{activity.response}”</blockquote>
            <img src={solarPanel} alt="" />
          </div>
        </section>

        {/* Agrupa a pergunta, as alternativas e as ações da atividade. */}
        <section className="challenge-answer">
          <fieldset aria-labelledby="challenge-question">
            <h2 id="challenge-question">{activity.question}</h2>

            <div className="challenge-options">
              {activity.options.map((option) => (
                <label key={option.id} className="challenge-option">
                  <input
                    type="radio"
                    name="answer"
                    value={option.id}
                    checked={selectedOptionId === option.id}
                    onChange={() => {
                      setSelectedOptionId(option.id);
                      setHasSubmitted(false);
                    }}
                  />
                  <span>{option.text}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="challenge-actions">
            <button
              className="challenge-actions__button"
              type="button"
              disabled={!selectedOptionId}
              onClick={verifyAnswer}
            >
              Verificar resposta
              <Icon name="arrow-right-dark" size={16} />
            </button>

            <Link
              className="challenge-actions__button"
              to={`/trilhas?trilha=${activity.trailId}&aula=${activity.lessonId}`}
            >
              Voltar à aula
            </Link>
          </div>
        </section>
      </div>

      {/* Apresenta a correção, a explicação e os pontos da questão. */}
      {hasSubmitted && (
        <section
          className={`challenge-feedback ${
            isCorrect
              ? "challenge-feedback--correct"
              : "challenge-feedback--incorrect"
          }`}
          role="status"
        >
          <h2>
            <span className="challenge-feedback__icon" aria-hidden="true">
              {isCorrect ? "✓" : "×"}
            </span>
            {isCorrect ? "Muito bem!" : "Ainda não!"}
          </h2>

          <p>
            {activity.explanation}
            {!isCorrect && " Revise a explicação e tente novamente."}
          </p>

          <span className="challenge-feedback__points">
            {isCorrect && hasEarnedPoints
              ? `${POINTS_PER_ACTIVITY} pontos registrados`
              : "Tente novamente"}
          </span>
        </section>
      )}

      {/* Apresenta o resumo quando todas as atividades da trilha foram acertadas. */}
      {isTrailCompleted && (
        <section
          className="challenge-summary"
          aria-labelledby="challenge-summary-title"
        >
          <h2 id="challenge-summary-title">Desafios da trilha concluídos!</h2>

          <p>
            Você acertou {trailCorrectCount} de {trailActivities.length}{" "}
            atividades e conquistou {trailCorrectCount * POINTS_PER_ACTIVITY}{" "}
            pontos nesta trilha.
          </p>

          <div className="challenge-actions">
            <button
              className="challenge-actions__button"
              type="button"
              onClick={restartTrail}
            >
              Refazer desafios
            </button>

            <Link className="challenge-actions__button" to="/trilhas">
              Explorar trilhas
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
