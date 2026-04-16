import Logo from "../assets/logo.png";

function Header() {
  return (
    <div className="bg-[#003566]/50 flex flex-row items-center gap-8 pt-2 pb-2">
      <img src={Logo} alt="Logo da Tasking" className="w-50 h-auto" />
      <h1 className="text-3xl font-semibold font-poppins">
        Gerenciador de Tarefas
      </h1>
    </div>
  );
}

export default Header;
