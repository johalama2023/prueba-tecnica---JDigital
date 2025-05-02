import { useEffect } from "react";
import { useTasks } from "../context/TasksContext";
import TaskCard from "../components/TaskCard";

function TasksPage() {
  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  if (tasks.length === 0) {
    return (
      <div className="flex justify-center items-center p-10">
        <div>
          <h1 className="font-bold text-xl text-gray-400 text-center">
            No tasks yet
          </h1>
          <p className="text-gray-500 text-center">Please add a new task</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-zinc-900 text-white py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Your Tasks</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {tasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default TasksPage;
