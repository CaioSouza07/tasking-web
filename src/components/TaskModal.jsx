import { TextAlignStart, Trash2, X } from "lucide-react";

function TaskModal({ taskData, close, removeTask }) {
  const handleRemoveTask = () => {
    removeTask(taskData.stepId, taskData.id);
    close();
  };
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[#000814] rounded-xl border boder-white w-1/3 ">
        <div className="border-b border-white flex items-center justify-between p-4">
          <h1 className="text-xl font-poppins font-semibold">Editar Tarefa</h1>
          <div className="flex items-center gap-6">
            <button
              onClick={handleRemoveTask}
              className="bg-red-500 p-1 rounded-lg hover:bg-red-900"
            >
              <Trash2 />
            </button>
            <button
              className="hover:bg-white/20 rounded-lg p-1"
              onClick={close}
            >
              <X />
            </button>
          </div>
        </div>
        <div className="flex p-4 flex-col gap-4">
          <input
            type="text"
            value={taskData.title}
            className="text-2xl font-poppins font-medium w-full"
            placeholder="Digite um título..."
          />
          <div className="flex gap-2 font-medium text-lg">
            <TextAlignStart />
            <p>Descrição</p>
          </div>
          <div className="pl-6 pr-6">
            <textarea
              placeholder="Digite a descrição..."
              className="w-full h-32 resize-none overflow-y-auto"
              value={taskData.description}
            ></textarea>
          </div>
        </div>
        <div className="flex justify-end p-4">
          <button className="bg-radial from-[#FFD72C] to-[#F1B81F] text-black p-1 pl-2 pr-2 font-semibold text-lg rounded-lg items-center shadow hover:opacity-72 flex h-fit">
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskModal;
