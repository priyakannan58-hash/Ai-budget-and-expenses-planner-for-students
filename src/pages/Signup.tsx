function Signup() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-purple-100 to-white flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-3xl w-full max-w-md p-8">

        <h1 className="text-4xl font-bold text-center text-purple-700">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Join AI Budget Planner
        </p>

        <form className="mt-8 space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-purple-400"
          />

          <button className="w-full bg-purple-600 text-white rounded-xl py-3 hover:bg-purple-700">
            Create Account
          </button>

        </form>

      </div>
    </div>
  );
}

export default Signup;