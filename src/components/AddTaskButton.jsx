import { Plus, X } from "lucide-react";
import { useState } from "react";

function AddTaskButton({ onClick, stepId }) {
  const [active, setActive] = useState(false);
  const [input, setInput] = useState("");
  const handleSubmit = () => {
    if (!input) return;
    onClick(stepId, input);
    setInput("");
    setActive(false);
  };
  return active ? (
    <div>
      <form action="">
      <div className="bg-white rounded-lg border-l-6 border-[#F1B81F] text-black p-2 font-medium w-full">
        <input
          className="focus:outline-0 w-full"
          type="text"
          placeholder="Digite um título..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className="flex mt-2 gap-2">
        <button
          onClick={handleSubmit}
          className="bg-radial from-[#FFD72C] to-[#F1B81F] text-black font-medium p-2 pt-1 pb-1 text-lg rounded-lg shadow hover:opacity-62"
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
      </form>
    </div>
  ) : (
    <button
      onClick={() => {
        setActive(true);
      }}
      className="bg-transparent text-lg flex flex-1 items-center justify-start rounded-lg hover:bg-white/14 cursor-pointer gap-1"
    >
      <Plus />
      Adicionar Tarefa
    </button>
  );
}

export default AddTaskButton;
