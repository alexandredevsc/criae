import { useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import "./App.css";

const pageTitles = {
  inicio: "Início",
  trilhas: "Trilhas",
  laboratorio: "Laboratório",
  desafios: "Desafios",
  tutor: "Tutor IA",
  progresso: "Meu Progresso",
};

function App() {
  const [activePage, setActivePage] = useState("inicio");

  return (
    <div className="app-layout">
      <Sidebar
        activePage={activePage}
        onNavigate={setActivePage}
      
      />

      <main className="app-main" id="conteudo-principal">
        <h1>{pageTitles[activePage]}</h1>
        <p> Vamos construir esta tela juntos.</p>
      </main>
    </div>
  );
}

export default App;
