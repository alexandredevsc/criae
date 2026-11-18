import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router";
import Sidebar from "./components/layout/Sidebar";
import "./App.css";
import Home from "./pages/Home";

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
      />

      <main className="app-main" id="conteudo-principal">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trilhas" element={<h1>Trilhas</h1>} />
          <Route path="/laboratorio" element={<h1>Laboratório</h1>} />
          <Route path="/desafios" element={<h1>Desafios</h1>} />
          <Route path="/tutor" element={<h1>Tutor IA</h1>} />
          <Route path="/progresso" element={<h1>Meu Progresso</h1>} />
          <Route path="*" element={<h1>Página não encontrada</h1>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
