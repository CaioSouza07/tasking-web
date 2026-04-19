import { DndContext, DragOverlay, rectIntersection } from "@dnd-kit/core";
import Background from "../components/Background";
import Header from "../components/Header";
import useStep from "../hooks/useStep";
import Step from "../components/Step";
import {
  horizontalListSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";
import { useState } from "react";

function TasksPage() {
  const {
    steps,
    addStep,
    addTask,
    removeTask,
    moveTask,
    moveStep,
    removeStep,
  } = useStep();
  const [activeTask, setActiveTask] = useState(null);

  const customCollisionDetection = (args) => {
    const { active, droppableContainers } = args;

    const activeType = active.data.current?.type;

    const filtered = droppableContainers.filter((container) => {
      const type = container.data.current?.type;

      if (activeType === "STEP") {
        return type === "STEP";
      }

      if (activeType === "TASK") {
        return type === "TASK";
      }

      return true;
    });

    return rectIntersection({
      ...args,
      droppableContainers: filtered,
    });
  };

  const handleDragStart = (event) => {
    const { active } = event;
    if (active.data.current?.type === "TASK") {
      setActiveTask(active.data.current);
    }
  };

  const handleDragEnd = (event) => {
    setActiveTask(null);
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const activeData = active.data.current;
    const overData = over.data.current;

    if (!activeData || !overData) return;

    if (activeData.type === "TASK") {
      moveTask(
        activeData.stepId,
        overData.stepId,
        activeData.index,
        overData.index,
      );
    }

    if (activeData.type === "STEP") {
      moveStep(activeData.index, overData.index);
    }
  };

  return (
    <Background>
      <div className="flex flex-col">
        <Header />
        <div className="flex flex-row flex-1 max-h-full">
          <DndContext
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            collisionDetection={customCollisionDetection}
          >
            <SortableContext
              id="steps"
              items={steps.map((step) => step.id)}
              strategy={horizontalListSortingStrategy}
            >
              {steps.map((step, index) => (
                <Step key={step.id} step={step} index={index} />
              ))}
            </SortableContext>
            <DragOverlay>
              {activeTask ? (
                <div className="bg-white rounded-lg border-l-6 border-[#F1B81F] text-black p-2 font-medium shadow-xl opacity-95 cursor-grabbing">
                  <p>{activeTask.title}</p>
                </div>
              ) : null}
            </DragOverlay>
          </DndContext>
        </div>
      </div>
    </Background>
  );
}

export default TasksPage;
