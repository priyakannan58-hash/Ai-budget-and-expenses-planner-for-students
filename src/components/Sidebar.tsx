import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-purple-700 text-white p-6">

      <h1 className="text-2xl font-bold mb-10">
        💰 AI Budget Planner
      </h1>

      <nav className="space-y-4">

        <Link className="block hover:bg-purple-600 p-3 rounded-xl" to="/dashboard">
          Dashboard
        </Link>

        <Link className="block hover:bg-purple-600 p-3 rounded-xl" to="/expenses">
          My Expenses
        </Link>

        <Link className="block hover:bg-purple-600 p-3 rounded-xl" to="/budget">
          Budget Planner
        </Link>

        <Link className="block hover:bg-purple-600 p-3 rounded-xl" to="/assistant">
          AI Assistant
        </Link>

        <Link className="block hover:bg-purple-600 p-3 rounded-xl" to="/analytics">
          Analytics
        </Link>

        <Link className="block hover:bg-purple-600 p-3 rounded-xl" to="/reports">
          Reports
        </Link>

        <Link className="block hover:bg-purple-600 p-3 rounded-xl" to="/profile">
          Profile
        </Link>

        <Link className="block hover:bg-purple-600 p-3 rounded-xl" to="/settings">
          Settings
        </Link>

      </nav>

    </div>
  );
}

export default Sidebar;