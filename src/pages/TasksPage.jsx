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
import TaskCard from "../components/TaskCard";

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
  const [activeStep, setActiveStep] = useState(null);

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
    if (active.data.current?.type === "STEP") {
      setActiveStep(active.data.current);
    }
  };

  const handleDragEnd = (event) => {
    setActiveTask(null);
    setActiveStep(null);
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
        <div className="flex flex-row flex-1 max-h-full p-4 gap-4">
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
                <Step
                  key={step.id}
                  step={step}
                  index={index}
                  addTask={addTask}
                />
              ))}
            </SortableContext>
            <DragOverlay>
              {activeTask ? (
                <TaskCard task={activeTask.task} />
              ) : activeStep ? (
                <Step step={activeStep.step} />
              ) : null}
            </DragOverlay>
          </DndContext>
        </div>
      </div>
    </Background>
  );
}

export default TasksPage;
