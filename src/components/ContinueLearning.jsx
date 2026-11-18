import { Link } from "react-router";
import Icon from "./icons/Icon";
import rings from "../assets/illustrations/aneis-continuar-v2.png";

export default function ContinueLearning() {
  return (
    <section
      className="continue-learning"
      aria-labelledby="continue-learning-title"
    >
      <img className="continue-learning__image" src={rings} alt="" />

      <div className="continue-learning__content">
        <div className="continue-learning__label">
          <Icon name="play-learning" size={16} color="#A78BFA" />
          <span>Comece sua aprendizagem</span>
        </div>

        <h2 id="continue-learning-title">O que é IA generativa?</h2>

        <p>Trilha: Fundamentos da IA generativa</p>

        <div className="continue-learning__progress">
          <progress
            value={0}
            max={100}
            aria-label="Progresso na trilha Fundamentos"
          >
            0%
          </progress>

          <span>0%</span>
        </div>
      </div>

      <Link className="continue-learning__button" to="/trilhas">
        <span>Começar</span>
        <Icon name="arrow-right-white" size={16} />
      </Link>
    </section>
  );
}
