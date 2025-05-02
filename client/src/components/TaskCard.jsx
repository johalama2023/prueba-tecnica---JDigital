import React from "react";
import { useTasks } from "../context/TasksContext";
import { Link } from "react-router-dom";

function TaskCard({ task }) {
  const { deleteTask } = useTasks();

  return (
    <div className="bg-zinc-800 p-6 rounded-xl shadow-lg hover:bg-zinc-700 transition-colors duration-200">
      <div className="mb-4">
        <label className="text-sm text-gray-400 block mb-1">Title</label>
        <h2 className="text-2xl font-bold text-white">{task.title}</h2>
      </div>

      <div className="mb-4">
        <label className="text-sm text-gray-400 block mb-1">Description</label>
        <p className="text-gray-300">{task.description}</p>
      </div>

      {task.date && (
        <div className="mb-4">
          <label className="text-sm text-gray-400 block mb-1">Date</label>
          <p className="text-gray-300">
            {new Date(task.date).toLocaleDateString()}
          </p>
        </div>
      )}

      <div className="flex gap-3 mt-4">
        <button
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors"
          onClick={() => {
            deleteTask(task._id);
          }}
        >
          Delete
        </button>
        <Link to={`/tasks/${task._id}`} className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md transition-colors">
          Update
        </Link>
      </div>
    </div>
  );
}

export default TaskCard;
