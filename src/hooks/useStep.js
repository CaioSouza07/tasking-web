import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function useStep() {
  const staticSteps = [
    {
      id: 1,
      title: "Pendente",
      tasks: [
        {
          id: 1,
          title: "Estudar Java",
        },
        {
          id: 2,
          title: "Estudar React",
        },
      ],
    },
    {
      id: 2,
      title: "Concluída",
      tasks: [
        {
          id: 3,
          title: "Comer",
        },
      ],
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
      const newSteps = [...prev];

      const fromStep = newSteps.find((s) => s.id === fromStepId);
      const toStep = newSteps.find((s) => s.id === toStepId);

      const [movedTask] = fromStep.tasks.splice(fromIndex, 1);

      toStep.tasks.splice(toIndex, 0, movedTask);

      return newSteps;
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
