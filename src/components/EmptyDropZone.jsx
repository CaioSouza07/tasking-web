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

  return (
    <div
      ref={setNodeRef}
      className="min-h-2"
      // className="min-h-10 border-dashed border-white/30 border-2 rounded-lg"
    />
  );
}

export default EmptyDropZone;
