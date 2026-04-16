import { useState } from "react";
import TaskCard from "./TaskCard";
import { arrayMove } from "@dnd-kit/sortable";
import { closestCorners, DndContext } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

function BodyStep({ tasks }) {
  const [tasksState, setTaskState] = useState(tasks);

  const getTaskPosition = (id) =>
    tasksState.findIndex((task) => task.id === id);

  const handleDragonEnd = (event) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    setTaskState((tasks) => {
      const originalPos = getTaskPosition(active.id);
      const newPos = getTaskPosition(over.id);

      return arrayMove(tasks, originalPos, newPos);
    });
  };

  return (
    <div className="flex flex-col min-h-0">
      <div className="flex-1 overflow-y-auto bg-[#003566]/40 backdrop-blur-lg border border-white/20 shadow-2xl p-4 rounded-b-2xl flex flex-col gap-2">
        <DndContext
          onDragEnd={handleDragonEnd}
          collisionDetection={closestCorners}
        >
          <SortableContext
            items={tasksState.map((taskState) => taskState.id)}
            strategy={verticalListSortingStrategy}
          >
            {tasks.map((task) => (
              <TaskCard id={task.id} key={task.id} task={task} />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
}

export default BodyStep;
