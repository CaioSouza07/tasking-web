import BodyStep from "./BodyStep";
import HeaderStep from "./HeaderStep";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function StepColumn({ id, step }) {
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
      className="flex flex-col min-w-78 h-full min-h-0"
    >
      <HeaderStep title={step.title} />
      <BodyStep tasks={step.tasks} />
    </div>
  );
}

export default StepColumn;
