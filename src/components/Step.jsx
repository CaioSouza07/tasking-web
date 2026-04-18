import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Ellipsis } from "lucide-react";

function Step({ step, index }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: step.id,
      data: {
        type: "STEP",
        index,
      },
    });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="bg-[#003566]/50 backdrop-blur-md border border-white/20 shadow-lg rounded-xl w-62 flex flex-col"
    >
      <div className="text-xl font-poppins font-medium flex justify-between p-2 border-b border-white/20">
        <p>{step.title}</p>
        <Ellipsis size={28} />
      </div>
      <div className="flex flex-col justify-center p-2">
        {step.tasks.map((task) => (
          <p key={task.id}>{task.title}</p>
        ))}
      </div>
    </div>
  );
}

export default Step;
