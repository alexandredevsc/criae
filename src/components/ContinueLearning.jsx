import { Link } from "react-router";
import Icon from "./icons/Icon";
import rings from "../assets/illustrations/aneis-continuar-v2.png";
import { trails } from "../data/trails";
import { activities } from "../data/activities";

export default function ContinueLearning({ completedActivityIds = [] }) {
  // Identifica as aulas concluídas pelos acertos nas atividades vinculadas.
  function isLessonCompleted(trailId, lessonId) {
    return activities.some(
      (activity) =>
        activity.trailId === trailId &&
        activity.lessonId === lessonId &&
        completedActivityIds.includes(activity.id),
    );
  }

  // Recomenda a primeira trilha que ainda possui uma aula pendente.
  const pendingTrail = trails.find((trail) =>
    trail.lessons.some(
      (lesson) => !isLessonCompleted(trail.id, lesson.id),
    ),
  );

  const allCompleted = !pendingTrail;
  const trail = pendingTrail ?? trails[0];

  const nextLesson = trail.lessons.find(
    (lesson) => !isLessonCompleted(trail.id, lesson.id),
  );

  // Calcula o percentual da trilha apresentada no card.
  const completedLessonsCount = trail.lessons.filter((lesson) =>
    isLessonCompleted(trail.id, lesson.id),
  ).length;

  const progressPercentage =
    trail.lessons.length === 0
      ? 0
      : Math.round(
          (completedLessonsCount / trail.lessons.length) * 100,
        );

  const hasProgress = completedActivityIds.length > 0;

  // Abre a próxima aula pendente ou as trilhas quando todas foram concluídas.
  const destination = nextLesson
    ? `/trilhas?trilha=${trail.id}&aula=${nextLesson.id}`
    : "/trilhas";

  return (
    <section
      className="continue-learning"
      aria-labelledby="continue-learning-title"
    >
      <img className="continue-learning__image" src={rings} alt="" />

      <div className="continue-learning__content">
        {/* Adapta a orientação ao progresso atual do aluno. */}
        <div className="continue-learning__label">
          <Icon name="play-learning" size={16} color="#A78BFA" />
          <span>
            {allCompleted
              ? "Todas as aulas concluídas"
              : hasProgress
                ? "Continue sua aprendizagem"
                : "Comece sua aprendizagem"}
          </span>
        </div>

        <h2 id="continue-learning-title">
          {allCompleted
            ? "Parabéns pela sua jornada!"
            : nextLesson.title}
        </h2>

        <p>
          {allCompleted
            ? "Você concluiu todas as trilhas disponíveis."
            : `Trilha: ${trail.title}`}
        </p>

        {/* Exibe o progresso real da trilha recomendada. */}
        <div className="continue-learning__progress">
          <progress
            value={progressPercentage}
            max={100}
            aria-label={`Progresso na trilha ${trail.title}`}
          >
            {progressPercentage}%
          </progress>

          <span>{progressPercentage}%</span>
        </div>
      </div>

      {/* Direciona o aluno para continuar ou revisar sua aprendizagem. */}
      <Link className="continue-learning__button" to={destination}>
        <span>
          {allCompleted
            ? "Revisar trilhas"
            : hasProgress
              ? "Continuar"
              : "Começar"}
        </span>
        <Icon name="arrow-right-white" size={16} />
      </Link>
    </section>
  );
}