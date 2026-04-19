import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function useStep() {
  const staticSteps = [
    {
      id: "step-1",
      title: "Pendente",
      tasks: [
        { id: "task-1", title: "Estudar Java" },
        { id: "task-2", title: "Estudar React" },
      ],
    },
    {
      id: "step-2",
      title: "Concluída",
      tasks: [{ id: "task-3", title: "Comer" }],
    },
  ];

  const [steps, setSteps] = useState(staticSteps);

  const addStep = (title) => {
    if (!title.trim()) return;

    const newStep = {
      id: uuidv4(),
      title,
      tasks: [],
    };

    setSteps((prev) => [...prev, newStep]);
  };

  const removeStep = (id) => {
    if (!id) return;
    setSteps((prev) => prev.filter((step) => step.id !== id));
  };

  const updateStepTitle = (id, newTitle) => {
    if (!newTitle.trim()) return;

    setSteps((prev) =>
      prev.map((step) =>
        step.id === id ? { ...step, title: newTitle } : step,
      ),
    );
  };

  const addTask = (stepId, title) => {
    if (!title.trim()) return;

    const newTask = {
      id: uuidv4(),
      title,
    };

    setSteps((prev) =>
      prev.map((step) =>
        step.id === stepId
          ? { ...step, tasks: [...step.tasks, newTask] }
          : step,
      ),
    );
  };

  const removeTask = (stepId, taskId) => {
    setSteps((prev) =>
      prev.map((step) =>
        step.id === stepId
          ? {
              ...step,
              tasks: step.tasks.filter((task) => task.id !== taskId),
            }
          : step,
      ),
    );
  };

  const updateTaskTitle = (stepId, taskId, newTitle) => {
    if (!newTitle.trim()) return;

    setSteps((prev) =>
      prev.map((step) =>
        step.id === stepId
          ? {
              ...step,
              tasks: step.tasks.map((task) =>
                task.id === taskId ? { ...task, title: newTitle } : task,
              ),
            }
          : step,
      ),
    );
  };

  const moveTask = (fromStepId, toStepId, fromIndex, toIndex) => {
    setSteps((prev) => {
      return prev.map((step) => {
        if (step.id === fromStepId && step.id === toStepId) {
          const tasks = [...step.tasks];
          const [moved] = tasks.splice(fromIndex, 1);
          tasks.splice(toIndex, 0, moved);
          return { ...step, tasks };
        }

        if (step.id === fromStepId) {
          const tasks = [...step.tasks];
          tasks.splice(fromIndex, 1);
          return { ...step, tasks };
        }

        if (step.id === toStepId) {
          const tasks = [...step.tasks];
          const movedTask = prev.find((s) => s.id === fromStepId).tasks[
            fromIndex
          ];
          tasks.splice(toIndex, 0, movedTask);
          return { ...step, tasks };
        }

        return step;
      });
    });
  };

  const moveStep = (fromIndex, toIndex) => {
    setSteps((prev) => {
      const newSteps = [...prev];
      const [movedStep] = newSteps.splice(fromIndex, 1);

      newSteps.splice(toIndex, 0, movedStep);
      return newSteps;
    });
  };

  return {
    steps,
    addStep,
    removeStep,
    updateStepTitle,
    addTask,
    removeTask,
    updateTaskTitle,
    moveTask,
    moveStep,
  };
}
export default useStep;
