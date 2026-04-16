import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function TaskCard({ id, task }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
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
      className="bg-white border-[#F1B81F] border-l-4 w-full text-black p-2 rounded-xl"
    >
      <h3 className="font-medium wrap-break-word overflow-hidden">
        {task.title}
      </h3>
    </div>
  );
}

export default TaskCard;
