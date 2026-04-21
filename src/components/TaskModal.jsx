function TaskModal({ taskData }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-white p- rounded-xl shadow text-black">
        testando modal: {taskData.title}
      </div>
    </div>
  );
}

export default TaskModal;
