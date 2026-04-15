// import { useState } from 'react'
import Logo from "./assets/logo.png";
import Background from "./components/Background.jsx";
import HighlightButton from "./components/HighlightButton.jsx";
import TopicItem from "./components/TopicItem.jsx";

function App() {
  const benefits = [
    {
      title: "Crie e organize sua lista de tarefas",
      description: "Fácil de criar, deletar e gerenciar",
    },
    {
      title: "Acompanhe seu progresso",
      description: "Monitore e marque as tarefas em andamento ou completas",
    },
    {
      title: "Potencialize sua produtividade",
      description: "Seja organizado e produtivo para sua rotina",
    },
  ];

  return (
    <Background>
      <img src={Logo} alt="Logo da Tasking" className="w-70 h-auto" />
      <div className="space-y-4">
        <h1 className="text-white text-5xl font-bold font-poppins">
          Seja bem-vindo ao Tasking!
        </h1>
        <h3 className="text-white text-lg opacity-80">
          Organize e gerencie suas tarefas de forma eficiente
        </h3>
        <TopicItem benefits={benefits} />
        <div className="p-6">
          <HighlightButton>Começar agora!</HighlightButton>
        </div>
      </div>
    </Background>
  );
}

export default App;
