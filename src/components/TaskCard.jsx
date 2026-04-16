function TaskCard({ task }) {
  return (
    <div className="bg-white border-[#F1B81F] border-l-4 w-full text-black p-2 rounded-xl">
      <h3 className="font-medium wrap-break-word overflow-hidden">
        {task.title}
      </h3>
    </div>
  );
}

export default TaskCard;
