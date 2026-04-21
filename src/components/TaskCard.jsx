import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";

function TaskCard({ task, stepId, index, openModal }) {
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
      style={{
        transform: CSS.Transform.toString(transform),
        transition: transition,
        opacity: isDragging ? 0 : 1,
      }}
      onClick={() => openModal(task)}
      className="bg-white rounded-lg border-l-6 border-[#F1B81F] text-black p-2 font-medium cursor-pointer flex justify-between"
    >
      <p className="wrap-break-word">{task.title}</p>
      <div {...listeners} className="cursor-grab">
        <GripVertical />
      </div>
    </div>
  );
}

export default TaskCard;
