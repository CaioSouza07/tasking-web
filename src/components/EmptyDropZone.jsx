import { useDroppable } from "@dnd-kit/core";

function EmptyDropZone({ stepId }) {
  const { setNodeRef } = useDroppable({
    id: `empty-${stepId}`,
    data: {
      type: "TASK",
      stepId,
      index: 0,
    },
  });

  return <div ref={setNodeRef} className="min-h-12" />;
}

export default EmptyDropZone;
