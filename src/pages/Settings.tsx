function Settings() {
  return (
    <div className="min-h-screen bg-purple-50 p-8">

      <h1 className="text-4xl font-bold text-purple-700 mb-8">
        Settings
      </h1>

      <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">

        <div>

          <label className="font-semibold">
            Currency
          </label>

          <select className="w-full border rounded-xl p-3 mt-2">
            <option>₹ INR</option>
            <option>$ USD</option>
            <option>€ EUR</option>
          </select>

        </div>

        <div>

          <label className="font-semibold">
            Theme
          </label>

          <select className="w-full border rounded-xl p-3 mt-2">
            <option>Light</option>
            <option>Dark</option>
          </select>

        </div>

        <button className="bg-red-500 text-white px-6 py-3 rounded-xl">
          Logout
        </button>

      </div>

    </div>
  );
}

export default Settings;