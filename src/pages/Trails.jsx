import { Link, useSearchParams } from "react-router";
import { trails } from "../data/trails";
import Icon from "../components/icons/Icon";
import SparklesIcon from "../components/icons/SparklesIcon";
import ring from "../assets/illustrations/anel-trilhas-v1.png";
import "./Trails.css";
import TrailSelector from "../components/TrailSelector";
import { activities } from "../data/activities";

export default function Trails({ completedActivityIds = [] }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedTrailId = searchParams.get("trilha");

  const trail =
    trails.find((item) => item.id === requestedTrailId) ?? trails[0];

  const requestedLessonId = searchParams.get("aula");

  const lesson =
    trail.lessons.find((item) => item.id === requestedLessonId) ??
    trail.lessons[0];

  const selectedLessonId = lesson.id;

  const selectedLessonIndex = trail.lessons.findIndex(
    (item) => item.id === selectedLessonId,
  );

  // Verifica se a atividade vinculada à aula já foi acertada.
  function isLessonCompleted(lessonId) {
    return activities.some(
      (activity) =>
        activity.trailId === trail.id &&
        activity.lessonId === lessonId &&
        completedActivityIds.includes(activity.id),
    );
  }

  // Calcula a conclusão da trilha a partir das atividades acertadas.
  const completedLessonsCount = trail.lessons.filter((item) =>
    isLessonCompleted(item.id),
  ).length;

  const trailProgressPercentage =
    trail.lessons.length === 0
      ? 0
      : Math.round((completedLessonsCount / trail.lessons.length) * 100);

  function setSelectedLessonId(lessonId) {
    const nextParams = new URLSearchParams(searchParams);

    nextParams.set("trilha", trail.id);
    nextParams.set("aula", lessonId);

    setSearchParams(nextParams);
  }
  return (
    <div className="trails-page">
      <header className="trails-header">
        <div>
          <h1>Sua jornada de aprendizagem</h1>
          <p>{trail.description}</p>

          {/* Informa quantas aulas da trilha foram concluídas. */}
          <p>
            {completedLessonsCount} de {trail.lessons.length} aulas concluídas
            {" · "}
            {trailProgressPercentage}%
          </p>
        </div>

        <TrailSelector
          trails={trails}
          value={trail.id}
          onChange={(trailId) => {
            const nextParams = new URLSearchParams(searchParams);

            nextParams.set("trilha", trailId);
            nextParams.delete("aula");

            setSearchParams(nextParams);
          }}
        />
      </header>

      <div className="trails-layout">
        <nav className="lesson-list" aria-label="Aulas da trilha">
          <ol>
            {trail.lessons.map((item, index) => (
              <li key={item.id} className="lesson-list__item">
                <span
                  className={
                    item.id === selectedLessonId
                      ? "lesson-list__marker lesson-list__marker--active"
                      : "lesson-list__marker"
                  }
                  aria-hidden="true"
                >
                  {/* Exibe uma verificação nas aulas concluídas e play nas demais. */}
                  <Icon
                    name={
                      isLessonCompleted(item.id) ? "check-dark" : "play-dark"
                    }
                    size={12}
                    color={
                      isLessonCompleted(item.id)
                        ? "var(--focus)"
                        : item.id === selectedLessonId
                          ? "#5b21b6"
                          : "var(--text-secondary)"
                    }
                  />
                </span>

                <button
                  type="button"
                  className={
                    item.id === selectedLessonId
                      ? "lesson-list__button lesson-list__button--active"
                      : "lesson-list__button"
                  }
                  aria-current={
                    item.id === selectedLessonId ? "step" : undefined
                  }
                  onClick={() => setSelectedLessonId(item.id)}
                >
                  <span className="lesson-list__title">
                    {index + 1}. {item.title}
                  </span>
                  {/* Informa a conclusão registrada pelo acerto da atividade */}
                  <span className="lesson-list__meta">
                    {isLessonCompleted(item.id) ? "Concluída" : "Não iniciada"}
                    {" · "}
                    {item.durationMinutes} min
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </nav>

        <section className="lesson-panel" aria-labelledby="lesson-title">
          <div className="lesson-panel__intro">
            <div>
              <span className="lesson-panel__badge">
                Aula {selectedLessonIndex + 1} de {trail.lessons.length}
              </span>

              <h2 id="lesson-title">{lesson.title}</h2>
              <p>{lesson.introduction}</p>
            </div>

            <img className="lesson-panel__image" src={ring} alt="" />
          </div>

          <div className="lesson-panel__cards">
            <section className="lesson-info" aria-labelledby="summary-title">
              <h3 id="summary-title">
                <Icon name="book-summary" size={20} color="var(--focus)" />
                Em resumo
              </h3>

              <ul>
                {lesson.summary.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="lesson-info" aria-labelledby="example-title">
              <h3 id="example-title">
                <SparklesIcon color="var(--topic-icon-purple)" size={20} />
                Exemplo prático
              </h3>

              <p>{lesson.example}</p>
            </section>
          </div>
          {/* Encaminha a aula selecionada para sua atividade. */}
          <div className="lesson-panel__actions">
            <Link
              className="lesson-panel__start"
              to={`/desafios?trilha=${trail.id}&aula=${lesson.id}`}
            >
              <Icon name="play-dark" size={16} />
              <span>Iniciar atividade </span>
              <Icon name="arrow-right-dark" size={16} />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
