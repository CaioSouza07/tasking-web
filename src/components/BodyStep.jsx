import TaskCard from "./TaskCard";

function BodyStep({ tasks }) {
  return (
    <div className="flex flex-col min-h-0">
      <div className="flex-1 overflow-y-auto bg-[#003566]/40 backdrop-blur-lg border border-white/20 shadow-2xl p-4 rounded-b-2xl flex flex-col gap-2">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default BodyStep;
