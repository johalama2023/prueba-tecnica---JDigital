import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className="bg-zinc-800 text-white py-4 px-8 rounded-lg shadow-md flex justify-between items-center mb-6">
      <Link to="/">
        <h1 className="text-2xl font-bold text-blue-400">Tasks Manager</h1>
      </Link>
      <ul className="flex gap-x-4">
        {isAuthenticated ? (
          <>
            <li>Welcome {user.username}user</li>
            <li>
              <Link
                to="/tasks"
                className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md transition-colors"
              >
                Tasks
              </Link>
            </li>
            <li>
              <Link
                to="/add-task"
                className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md transition-colors"
              >
                Add Task
              </Link>
            </li>
            <li>
              <Link
                onClick={() => logout()}
                to="/"
                className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md transition-colors"
              >
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link
                to="/login"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md transition-colors"
              >
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
