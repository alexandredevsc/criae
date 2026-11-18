import { Link } from "react-router";
import Icon from "../components/icons/Icon";
import sphere from "../assets/illustrations/esfera-ia-v2.png";
import "./Home.css";
import ContinueLearning from "../components/ContinueLearning";
import TopicCard from "../components/TopicCard";
import cube from "../assets/illustrations/cubo-fundamentos-v1.png";
import promptRing from "../assets/illustrations/anel-prompts-v1.png";
import shield from "../assets/illustrations/escudo-etica-v1.png";

const topics = [
  {
    id: "fundamentos",
    title: "Fundamentos",
    description: "Entenda o que é IA generativa e como funciona.",
    icon: "cube-fundamentals",
    iconColor: "var(--focus)",
    image: cube,
    to: "/trilhas?trilha=fundamentos",
  },
  {
    id: "prompts",
    title: "Prompts na prática",
    description: "Aprenda a escrever prompts para obter melhores resultados.",
    icon: "lightning-prompts",
    iconColor: "var(--topic-icon-purple)",
    image: promptRing,
    to: "/trilhas?trilha=prompts",
  },
  {
    id: "etica",
    title: "Ética e segurança",
    description: "Use a IA de forma crítica, segura e responsável.",
    icon: "shield-ethics",
    iconColor: "var(--topic-icon-purple)",
    image: shield,
    to: "/trilhas?trilha=etica",
  },
];
export default function Home() {
  return (
    <div className="home">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-hero__content">
          <h1 id="home-title" className="home-hero__title">
            Explore o poder da
            <span>IA generativa</span>
          </h1>

          <p className="home-hero__description">
            Aprenda, pratique e desenvolva habilidades reais para usar a IA
            generativa com criatividade, produtividade e responsabilidade.
          </p>

          <Link className="home-hero__button" to="/trilhas">
            <Icon name="play-dark" size={16} />
            <span>Começar minha jornada</span>
            <Icon name="arrow-right-dark" size={16} />
          </Link>
        </div>

        <img className="home-hero__image" src={sphere} alt="" />
      </section>

      <ContinueLearning />

      <section className="home-topics" aria-labelledby="topics-title">
        <h2 id="topics-title" className="home-topics__title">
          Temas em destaque
        </h2>

        <div className="home-topics__grid">
          {topics.map((topic) => (
            <TopicCard
              key={topic.id}
              title={topic.title}
              description={topic.description}
              icon={topic.icon}
              iconColor={topic.iconColor}
              image={topic.image}
              to={topic.to}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
