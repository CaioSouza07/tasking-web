import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function TaskCard({ task, stepId, index }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    isDragging,
    transform,
    transition,
  } = useSortable({
    id: task.id,
    data: {
      type: "TASK",
      stepId,
      index,
      task,
    },
  });
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        transform: CSS.Transform.toString(transform),
        transition: transition,
        opacity: isDragging ? 0 : 1,
      }}
      className="bg-white rounded-lg border-l-6 border-[#F1B81F] text-black p-2 font-medium cursor-pointer"
    >
      <p>{task.title}</p>
    </div>
  );
}

export default TaskCard;
