import { useState } from "react";
import Backgound from "../components/Background";
import Header from "../components/Header";
import HeaderStep from "../components/HeaderStep";
import StepColumn from "../components/StepColumn";
import { arrayMove } from "@dnd-kit/sortable";
import { closestCorners, DndContext } from "@dnd-kit/core";
import {
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";

function TasksPage() {
  const [steps, setSteps] = useState([
    {
      id: 1,
      title: "Pendentes",
      tasks: [
        {
          id: 1,
          title: "Estudar Java",
        },
        {
          id: 2,
          title: "Estudar React",
        },
        {
          id: 3,
          title:
            "Cozinhar muito arroz e feijão de noite na janta e de manha no café",
        },
        {
          id: 4,
          title:
            "Cozinhar muito arroz e feijão de noite na janta e de manha no café",
        },
        {
          id: 5,
          title:
            "Cozinhar muito arroz e feijão de noite na janta e de manha no café",
        },
        {
          id: 6,
          title:
            "Cozinhar muito arroz e feijão de noite na janta e de manha no café",
        },
        {
          id: 7,
          title:
            "Cozinhar muito arroz e feijão de noite na janta e de manha no café",
        },
        {
          id: 8,
          title:
            "Cozinhar muito arroz e feijão de noite na janta e de manha no café",
        },
        {
          id: 9,
          title:
            "Cozinhar muito arroz e feijão de noite na janta e de manha no café",
        },
        {
          id: 10,
          title:
            "Cozinhar muito arroz e feijão de noite na janta e de manha no café",
        },
        {
          id: 11,
          title:
            "Cozinhar muito arroz e feijão de noite na janta e de manha no café",
        },
      ],
    },
    {
      id: 2,
      title: "Em andamento",
      tasks: [
        {
          id: 1,
          title: "Prototipar",
        },
        {
          id: 2,
          title:
            "Cozinhar muito arroz e feijão de noite na janta e de manha no café",
        },
      ],
    },
    {
      id: 3,
      title: "Concluído",
      tasks: [
        {
          id: 1,
          title: "Prototipar",
        },
        {
          id: 2,
          title:
            "Cozinhar muito arroz e feijão de noite na janta e de manha no café",
        },
      ],
    },
    {
      id: 4,
      title: "Em andamento",
      tasks: [
        {
          id: 1,
          title: "Prototipar",
        },
        {
          id: 2,
          title:
            "Cozinhar muito arroz e feijão de noite na janta e de manha no café",
        },
      ],
    },
    {
      id: 5,
      title: "Em andamento",
      tasks: [
        {
          id: 1,
          title: "Prototipar",
        },
        {
          id: 2,
          title:
            "Cozinhar muito arroz e feijão de noite na janta e de manha no café",
        },
      ],
    },
    {
      id: 6,
      title: "Em andamento",
      tasks: [
        {
          id: 1,
          title: "Prototipar",
        },
        {
          id: 2,
          title:
            "Cozinhar muito arroz e feijão de noite na janta e de manha no café",
        },
      ],
    },
    {
      id: 7,
      title: "Em andamento",
      tasks: [
        {
          id: 1,
          title: "Prototipar",
        },
        {
          id: 2,
          title:
            "Cozinhar muito arroz e feijão de noite na janta e de manha no café",
        },
      ],
    },
  ]);

  const getStepPosition = (id) => steps.findIndex((step) => step.id === id);

  const handleDragonEnd = (event) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    setSteps((steps) => {
      const originalPos = getStepPosition(active.id);
      const newPos = getStepPosition(over.id);

      return arrayMove(steps, originalPos, newPos);
    });
  };

  return (
    <Backgound>
      <div className="flex flex-col h-screen">
        <Header />

        <div className="flex flex-1 p-4 gap-2 items-start overflow-x-auto overflow-y-visible">
          <DndContext
            onDragEnd={handleDragonEnd}
            collisionDetection={closestCorners}
          >
            <SortableContext
              items={steps.map((step) => step.id)}
              strategy={horizontalListSortingStrategy}
            >
              {steps.map((step) => {
                return (
                  <StepColumn
                    id={step.id}
                    handleDragonEnd={handleDragonEnd}
                    collisionDetection={closestCorners}
                    key={step.id}
                    step={step}
                  />
                );
              })}
            </SortableContext>
          </DndContext>
        </div>
      </div>
    </Backgound>
  );
}

export default TasksPage;
