import { DndContext, closestCorners } from "@dnd-kit/core";
import Background from "../components/Background";
import Header from "../components/Header";
import useStep from "../hooks/useStep";
import Step from "../components/Step";
import {
  horizontalListSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";

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

  const handleDrangonEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const activeData = active.data.current;
    const overData = over.data.current;

    if (activeData.type === "TASK") {
      console.log(activeData);
      console.log(overData);
    }
    if (activeData.type === "STEP") {
      const fromIndex = activeData.index;
      const toIndex = overData.index;
      moveStep(fromIndex, toIndex);
    }
  };

  return (
    <Background>
      <div className="flex flex-col">
        <Header />
        <div className="flex flex-row flex-1 max-h-full">
          <DndContext
            onDragEnd={handleDrangonEnd}
            collisionDetection={closestCorners}
          >
            <SortableContext
              items={steps}
              strategy={horizontalListSortingStrategy}
            >
              {steps.map((step, index) => (
                <Step key={step.id} step={step} index={index} />
              ))}
            </SortableContext>
          </DndContext>
        </div>
      </div>
    </Background>
  );
}

export default TasksPage;
