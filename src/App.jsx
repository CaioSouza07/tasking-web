// import { useState } from 'react'
import Logo from "./assets/logo.png";
import Background from "./components/Background.jsx";

function App() {
  return (
    <Background>
      <img src={Logo} alt="Logo da Tasking" className="w-70 h-auto" />
      <div clas>
        <h1 className="text-white text-5xl font-bold font-poppins">
          Seja bem-vindo ao Tasking!
        </h1>
        <h3 className="text-white text-lg opacity-80">
          Organize e gerencie suas tarefas de forma eficiente
        </h3>
      </div>
    </Background>
  );
}

export default App;
