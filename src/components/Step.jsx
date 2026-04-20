import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Ellipsis } from "lucide-react";
import TaskCard from "./TaskCard";
import EmptyDropZone from "./EmptyDropZone";
import AddTaskButton from "./AddTaskButton";

function Step({ step, index, addTask }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    isDragging,
    transform,
    transition,
  } = useSortable({
    id: step.id,
    data: {
      type: "STEP",
      index,
      step,
    },
  });
  return (
    <div
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition: transition,
        opacity: isDragging ? 0 : 1,
      }}
      className="bg-[#003566]/50 backdrop-blur-md border border-white/20 shadow-lg rounded-xl w-62 flex flex-col h-fit"
    >
      <div
        {...attributes}
        {...listeners}
        className="text-xl font-poppins font-medium flex justify-between p-2 border-b border-white/20 w-full min-w-0"
      >
        <p className="w-full truncate">{step.title}</p>
        <Ellipsis size={28} />
      </div>
      <div className="flex flex-col justify-center p-2 gap-2">
        <SortableContext
          id={`tasks-${step.id}`}
          items={step.tasks.map((task) => task.id)}
          strategy={verticalListSortingStrategy}
        >
          {step.tasks.length === 0 ? (
            <EmptyDropZone stepId={step.id} />
          ) : (
            step.tasks.map((task, index) => (
              <TaskCard
                key={task.id}
                task={task}
                index={index}
                stepId={step.id}
              />
            ))
          )}
        </SortableContext>
      </div>
      <div className="p-2 flex">
        <AddTaskButton stepId={step.id} onClick={addTask} />
      </div>
    </div>
  );
}

export default Step;
