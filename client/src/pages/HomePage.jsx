import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="bg-zinc-900 text-white flex flex-col justify-center items-center px-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-6 text-blue-400">Welcome to Tasks Manager</h1>
        <p className="text-lg text-gray-300 mb-8">
          Organize your tasks, stay focused, and increase your productivity.
          Start managing your tasks now with ease and simplicity.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
