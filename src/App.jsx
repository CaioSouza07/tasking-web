// import { useState } from 'react'
import Logo from "./assets/logo.png";
import Background from "./components/Background.jsx";
import StartButton from "./components/StartButton.jsx";
import TopicItem from "./components/TopicItem.jsx";

function App() {
  const benefits = [
    {
      id: 1,
      title: "Crie e organize sua lista de tarefas",
      description: "Fácil de criar, deletar e gerenciar",
    },
    {
      id: 2,
      title: "Acompanhe seu progresso",
      description: "Monitore e marque as tarefas em andamento ou completas",
    },
    {
      id: 3,
      title: "Potencialize sua produtividade",
      description: "Seja organizado e produtivo para sua rotina",
    },
  ];

  return (
    <Background>
      <div className="pt-6 pl-20 flex flex-col gap-8">
        <img src={Logo} alt="Logo da Tasking" className="w-70 h-auto" />
        <div className="space-y-4">
          <h1 className="text-5xl font-bold font-poppins">
            Seja bem-vindo ao Tasking!
          </h1>
          <h3 className="text-lg opacity-80">
            Organize e gerencie suas tarefas de forma eficiente
          </h3>
          <div className="mt-12 flex flex-col gap-6">
            {benefits.map((benefit) => {
              return (
                <TopicItem
                  key={benefit.id}
                  title={benefit.title}
                  description={benefit.description}
                />
              );
            })}
          </div>
          <div className="p-12">
            <StartButton />
          </div>
        </div>
      </div>
    </Background>
  );
}

export default App;
