import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      alert("Please enter both email and password.");
      return;
    }

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-purple-100 to-white flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-3xl w-full max-w-md p-8">

        <h1 className="text-4xl font-bold text-center text-purple-700">
          AI Budget Planner
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Student Budget Management System
        </p>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">

          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-xl py-3 font-semibold"
          >
            Login
          </button>

        </form>

        <div className="flex justify-between mt-6">

          <button
            onClick={() => navigate("/forgot-password")}
            className="text-purple-600 hover:underline"
          >
            Forgot Password?
          </button>

          <button
            onClick={() => navigate("/signup")}
            className="text-purple-600 hover:underline"
          >
            Sign Up
          </button>

        </div>

      </div>
    </div>
  );
}

export default Login;
