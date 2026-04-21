import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Ellipsis, X } from "lucide-react";
import TaskCard from "./TaskCard";
import EmptyDropZone from "./EmptyDropZone";
import AddTaskButton from "./AddTaskButton";
import { useState } from "react";

function Step({ step, index, addTask, openModal, removeStep }) {
  const [isOptionsStep, setIsOptionsStep] = useState(false);
  const handleRemoveStep = () => {
    removeStep(step.id);
    setIsOptionsStep(false);
  };
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
      className="bg-[#003566]/50  backdrop-blur-md border border-white/20 shadow-lg rounded-xl w-64 flex flex-col h-fit shrink-0 relative"
    >
      <div
        {...attributes}
        className="text-xl font-poppins font-medium flex justify-between p-2 border-b border-white/20 w-full min-w-0"
      >
        <p className="w-full truncate cursor-grab" {...listeners}>
          {step.title}
        </p>
        <button
          onClick={() => setIsOptionsStep(true)}
          className="hover:bg-white/20 rounded-lg"
        >
          <Ellipsis size={28} />
        </button>
        {isOptionsStep && (
          <div className="flex flex-col justify-center bg-white absolute top-6 right-6 rounded-lg shadow text-black font-medium text-base min-w-34 border-black border">
            <div className="flex items-center text-gray-600 justify-between border-b border-gray-600 p-1 text-sm">
              <p>Ações</p>
              <X
                onClick={() => setIsOptionsStep(false)}
                className="hover:bg-black/20 rounded-lg"
                size={22}
              />
            </div>
            <button
              onClick={handleRemoveStep}
              className="hover:bg-black/20 w-full text-left p-1"
            >
              Excluir
            </button>
          </div>
        )}
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
                openModal={openModal}
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
