import Icon from "../icons/Icon";
import logoDark from "../../assets/brand/criae-logo-dark-v2.png";
import logoLight from "../../assets/brand/criae-logo-light-v1.png";

const menuItems = [
  { id: "inicio", label: "Início", icon: "menu-home" },
  { id: "trilhas", label: "Trilhas", icon: "menu-trails" },
  { id: "laboratorio", label: "Laboratório", icon: "menu-lab" },
  { id: "desafios", label: "Desafios", icon: "menu-challenges" },
  { id: "tutor", label: "Tutor IA", icon: "menu-tutor" },
  { id: "progresso", label: "Meu Progresso", icon: "menu-progress" },
];

export default function Sidebar({
  activePage,
  onNavigate,
  progress = 0,
  theme = "dark",
  onToggleTheme,
}) {
  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <img
          className="sidebar__logo"
          src={theme === "light" ? logoLight : logoDark}
          alt="Logo CrIAê"
        />

        <div className="theme-control">
          <span className="theme-control__label">Tema: Claro / Escuro</span>

          <button
            type="button"
            className="theme-switch"
            role="switch"
            aria-checked={theme === "dark"}
            aria-label="Tema escuro"
            onClick={onToggleTheme}
          >
            <svg
              className="theme-switch__sun"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
            </svg>

            <svg
              className="theme-switch__moon"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.5 14.2A8.7 8.7 0 0 1 9.8 3.5a8.8 8.8 0 1 0 10.7 10.7Z" />
            </svg>

            <span className="theme-switch__thumb" />
          </button>
        </div>
      </div>

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
