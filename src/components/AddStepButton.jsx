import { Plus, X } from "lucide-react";
import { useState } from "react";

function AddStepButton({ onClick }) {
  const [active, setActive] = useState(false);
  const [input, setInput] = useState("");
  const handleSubmit = () => {
    if (!input) return;
    onClick(input);
    setInput("");
    setActive(false);
  };
  return active ? (
    <form action="">
    <div className="bg-[#003566]/50 backdrop-blur-md border border-white/20 shadow-lg rounded-xl w-62 flex flex-col h-fit shrink-0">
      <div className="text-xl font-poppins font-medium flex justify-between p-2 border-b border-white/20 w-full">
        <input
          className="focus:outline-0 w-full"
          type="text"
          placeholder="Digite um título..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className="flex items-center p-2 gap-2">
        <button
          onClick={handleSubmit}
          className="bg-radial from-[#FFD72C] to-[#F1B81F] text-black font-medium p-2 pt-1 pb-1 text-lg rounded-lg shadow hover:opacity-62 "
        >
          Adicionar
        </button>
        <button
          onClick={() => {
            setInput("");
            setActive(false);
          }}
          className="hover:bg-white/20 rounded-lg"
          type="submit"
        >
          <X size={26} />
        </button>
      </div>
    </div>
    </form>
  ) : (
    <button
      onClick={() => setActive(true)}
      className="bg-radial from-[#FFD72C] to-[#F1B81F] text-black p-2 font-semibold text-lg rounded-lg items-center gap-1 shadow hover:opacity-72 flex h-fit shrink-0"
    >
      <Plus />
      Adicionar etapa
    </button>
  );
}

export default AddStepButton;
