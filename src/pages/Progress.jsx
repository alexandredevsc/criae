import { Link } from "react-router";
import { trails } from "../data/trails";
import { activities } from "../data/activities";
import Icon from "../components/icons/Icon";
import "./Progress.css";

export default function Progress({ completedActivityIds = [] }) {
  // Considera apenas acertos vinculados às atividades existentes.
  const completedActivities = activities.filter((activity) =>
    completedActivityIds.includes(activity.id),
  );

  // Calcula os indicadores sem criar outro estado para os mesmos dados.
  const completedCount = completedActivities.length;
  const totalPoints = completedCount * 20;
  const overallPercentage =
    activities.length === 0
      ? 0
      : Math.round((completedCount / activities.length) * 100);

  return (
    <div className="progress-page">
      {/* Apresenta a finalidade da página e o limite do armazenamento atual. */}
      <header className="progress-page__header">
        <h1>Meu progresso</h1>
        <p>Acompanhe suas conquistas e continue sua aprendizagem.</p>
        <small>
          Nesta versão, o progresso fica disponível enquanto o aplicativo
          permanece aberto e reinicia ao atualizar a página.
        </small>
      </header>

      {/* Resume os resultados reais das atividades concluídas. */}
      <section className="progress-stats" aria-label="Resumo da aprendizagem">
        <article className="progress-stat">
          <Icon name="menu-progress" size={28} color="var(--focus)" />
          <span>Progresso geral</span>
          <strong>{overallPercentage}%</strong>
        </article>

        <article className="progress-stat">
          <Icon name="check-dark" size={28} color="var(--focus)" />
          <span>Atividades concluídas</span>
          <strong>
            {completedCount} de {activities.length}
          </strong>
        </article>

        <article className="progress-stat">
          <Icon
            name="menu-challenges"
            size={28}
            color="var(--topic-icon-purple)"
          />
          <span>Pontos conquistados</span>
          <strong>{totalPoints}</strong>
        </article>
      </section>

      {/* Orienta quem ainda não concluiu nenhuma atividade. */}
      {completedCount === 0 && (
        <p className="progress-page__empty">
          Sua jornada começa com a primeira aula. Acerte uma atividade para
          registrar sua primeira conquista!
        </p>
      )}

      <section aria-labelledby="trail-progress-title">
        <h2 id="trail-progress-title">Sua evolução nas trilhas</h2>

        <div className="progress-trails">
          {trails.map((trail) => {
            // Calcula a evolução de cada trilha separadamente.
            const trailActivities = activities.filter(
              (activity) => activity.trailId === trail.id,
            );

            const completed = trailActivities.filter((activity) =>
              completedActivityIds.includes(activity.id),
            ).length;

            const percentage =
              trailActivities.length === 0
                ? 0
                : Math.round((completed / trailActivities.length) * 100);

            // Recomenda a primeira aula cuja atividade ainda está pendente.
            const nextLesson = trail.lessons.find((lesson) =>
              trailActivities.some(
                (activity) =>
                  activity.lessonId === lesson.id &&
                  !completedActivityIds.includes(activity.id),
              ),
            );

            const destination = nextLesson
              ? `/trilhas?trilha=${trail.id}&aula=${nextLesson.id}`
              : `/trilhas?trilha=${trail.id}`;

            return (
              <article className="progress-trail" key={trail.id}>
                <div className="progress-trail__heading">
                  <Icon
                    name="menu-trails"
                    size={24}
                    color="var(--topic-icon-purple)"
                  />
                  <span>
                    {percentage === 100
                      ? "Concluída"
                      : completed > 0
                        ? "Em evolução"
                        : "Comece por aqui"}
                  </span>
                </div>

                <h3>{trail.title}</h3>
                <p>{trail.description}</p>

                <div className="progress-trail__value">
                  <span>
                    {completed} de {trailActivities.length} atividades
                  </span>
                  <strong>{percentage}%</strong>
                </div>

                <progress
                  value={percentage}
                  max={100}
                  aria-label={`Progresso em ${trail.title}`}
                >
                  {percentage}%
                </progress>

                <Link className="progress-trail__link" to={destination}>
                  {percentage === 100
                    ? "Revisar trilha"
                    : completed > 0
                      ? "Continuar trilha"
                      : "Iniciar trilha"}
                  <Icon name="arrow-right-dark" size={16} />
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
