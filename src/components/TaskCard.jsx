import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function TaskCard({ task, stepId, index }) {
  const { attributes, listeners, setNodeRef, isDragging } = useSortable({
    id: task.id,
    data: {
      type: "TASK",
      stepId,
      index,
      title: task.title,
    },
  });
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{ opacity: isDragging ? 0 : 1 }}
      className="bg-white rounded-lg border-l-6 border-[#F1B81F] text-black p-2 font-medium"
    >
      <p>{task.title}</p>
    </div>
  );
}

export default TaskCard;
