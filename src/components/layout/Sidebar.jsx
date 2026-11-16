import Icon from "../icons/Icon";
import logoDark from "../../assets/brand/criae-logo-dark-v2.png";

const menuItems = [
  { id: "inicio", label: "Início", icon: "menu-home" },
  { id: "trilhas", label: "Trilhas", icon: "menu-trails" },
  { id: "laboratorio", label: "Laboratório", icon: "menu-lab" },
  { id: "desafios", label: "Desafios", icon: "menu-challenges" },
  { id: "tutor", label: "Tutor IA", icon: "menu-tutor" },
  { id: "progresso", label: "Meu Progresso", icon: "menu-progress" },
];

export default function Sidebar({ activePage, onNavigate, progress = 0 }) {
  return (
    <aside className="sidebar">
      <img className="sidebar__logo" src={logoDark} alt="Logo CrIAê" />

      <nav className="sidebar__nav" aria-label="Menu principal">
        {menuItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={
              activePage === item.id
                ? "sidebar__item sidebar__item--active"
                : "sidebar__item"
            }
            aria-current={activePage === item.id ? "page" : undefined}
            onClick={() => onNavigate(item.id)}
          >
            <Icon name={item.icon} size={18} />
            <span> {item.label}</span>
          </button>
        ))}
      </nav>

      <section
        className="sidebar-progress"
        aria-label="Progresso geral de aprendizagem"
      >
        <h2 className="sidebar-progress__title">Progresso Geral</h2>

        <p className="sidebar-progress__value">{progress}%</p>

        <progress
          className="sidebar-progress__bar"
          value={progress}
          max={100}
          aria-label="Aprendizagem concluída"
        >
          {progress}%
        </progress>
      </section>
    </aside>
  );
}
