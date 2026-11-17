import { Route, Routes, useLocation, useNavigate } from "react-router";
import Sidebar from "./components/layout/Sidebar";
import "./App.css";

const pagePaths = {
  inicio: "/",
  trilhas: "/trilhas",
  laboratorio: "/laboratorio",
  desafios: "/desafios",
  tutor: "/tutor",
  progresso: "/progresso",
};

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const activePage = Object.keys(pagePaths)
    .find((page) => pagePaths[page] === location.pathname);

  function handleNavigate(page) {
    navigate(pagePaths[page]);
  }

  return (
    <div className="app-layout">
      <Sidebar activePage={activePage} onNavigate={handleNavigate} />

      <main className="app-main" id="conteudo-principal">
        <Routes>
          <Route path="/" element={<h1>Início</h1>} />
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
