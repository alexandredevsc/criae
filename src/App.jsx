import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router";
import Sidebar from "./components/layout/Sidebar";
import "./App.css";
import Home from "./pages/Home";
import Trails from "./pages/Trails";
import Challenges from "./pages/Challenges";
import { activities } from "./data/activities";
import Progress from "./pages/Progress";

const pagePaths = {
  inicio: "/",
  trilhas: "/trilhas",
  laboratorio: "/laboratorio",
  desafios: "/desafios",
  tutor: "/tutor",
  progresso: "/progresso",
};

function getInitialTheme() {
  try {
    const savedTheme = localStorage.getItem("criae-theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }
  } catch {
    // Se o armazenamento estiver bloqueado, usamos o tema do sistema.
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  // Compartilha os acertos entre as páginas enquanto o aplicativo está aberto.
  const [completedActivityIds, setCompletedActivityIds] = useState([]);

  // Calcula o progresso geral com base nas atividades cadastradas.
  const progressPercentage =
    activities.length === 0
      ? 0
      : Math.round((completedActivityIds.length / activities.length) * 100);

  // Registra cada atividade concluída apenas uma vez.
  function completeActivity(activityId) {
    if (!activities.some((activity) => activity.id === activityId)) return;

    setCompletedActivityIds((previousIds) =>
      previousIds.includes(activityId)
        ? previousIds
        : [...previousIds, activityId],
    );
  }

  // Remove os acertos da trilha reiniciada e preserva os das demais.
  function restartTrailProgress(trailId) {
    const trailActivityIds = activities
      .filter((activity) => activity.trailId === trailId)
      .map((activity) => activity.id);

    setCompletedActivityIds((previousIds) =>
      previousIds.filter((id) => !trailActivityIds.includes(id)),
    );
  }

  useEffect(() => {
    document.documentElement.dataset.theme = theme;

    try {
      localStorage.setItem("criae-theme", theme);
    } catch {
      // A troca continua funcionando mesmo sem salvar a preferência.
    }
  }, [theme]);

  function handleToggleTheme() {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  }

  const location = useLocation();
  const navigate = useNavigate();

  const activePage = Object.keys(pagePaths).find(
    (page) => pagePaths[page] === location.pathname,
  );

  function handleNavigate(page) {
    navigate(pagePaths[page]);
  }

  return (
    <div className="app-layout">
      <Sidebar
        activePage={activePage}
        onNavigate={handleNavigate}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        progress={progressPercentage}
      />

      <main className="app-main" id="conteudo-principal">
        <Routes>
          {/* Compartilha a lista de atividades concluídas com a página inicial. */}
          <Route
            path="/"
            element={<Home completedActivityIds={completedActivityIds} />}
          />

          <Route
            path="/trilhas"
            element={<Trails completedActivityIds={completedActivityIds} />}
          />

          <Route path="/laboratorio" element={<h1>Laboratório</h1>} />
          <Route
            path="/desafios"
            element={
              <Challenges
                completedActivityIds={completedActivityIds}
                onCompleteActivity={completeActivity}
                onRestartTrail={restartTrailProgress}
              />
            }
          />
          <Route path="/tutor" element={<h1>Tutor IA</h1>} />

          {/* Exibe os indicadoores calculados a partir dos acertos compartilhados */}
          <Route
            path="/progresso"
            element={<Progress completedActivityIds={completedActivityIds} />}
          />
          <Route path="*" element={<h1>Página não encontrada</h1>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
