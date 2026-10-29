import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 bg-purple-50 min-h-screen p-8">

        <h1 className="text-4xl font-bold text-purple-700 mb-8">
          Student Budget Dashboard
        </h1>

        {/* Summary Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-gray-500 text-lg">Monthly Budget</h2>
            <p className="text-3xl font-bold text-purple-700 mt-2">
              ₹15,000
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-gray-500 text-lg">Total Expenses</h2>
            <p className="text-3xl font-bold text-red-500 mt-2">
              ₹8,250
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-gray-500 text-lg">Remaining Balance</h2>
            <p className="text-3xl font-bold text-green-600 mt-2">
              ₹6,750
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-gray-500 text-lg">Savings</h2>
            <p className="text-3xl font-bold text-blue-600 mt-2">
              45%
            </p>
          </div>

        </div>

        {/* Budget Progress */}

        <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">

          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            Budget Usage
          </h2>

          <div className="w-full bg-gray-200 rounded-full h-5">

            <div
              className="bg-purple-600 h-5 rounded-full"
              style={{ width: "55%" }}
            ></div>

          </div>

          <p className="mt-3 text-gray-600">
            55% of your monthly budget has been used.
          </p>

        </div>

        {/* Recent Transactions */}

        <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">

          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            Recent Transactions
          </h2>

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="text-left py-3">Category</th>
                <th className="text-left">Amount</th>
                <th className="text-left">Date</th>

              </tr>

            </thead>

            <tbody>

              <tr className="border-b">

                <td className="py-3">Food</td>
                <td>₹350</td>
                <td>28-10-2026</td>

              </tr>

              <tr className="border-b">

                <td className="py-3">Transport</td>
                <td>₹120</td>
                <td>27-10-2026</td>

              </tr>

              <tr>

                <td className="py-3">Shopping</td>
                <td>₹900</td>
                <td>25-10-2026</td>

              </tr>

            </tbody>

          </table>

        </div>

        {/* AI Suggestion */}

        <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">

          <h2 className="text-2xl font-bold text-purple-700">
            AI Financial Suggestion
          </h2>

          <p className="mt-4 text-gray-700">
            Reduce your food expenses by approximately 10% to increase your monthly savings.
          </p>

          <p className="mt-2 text-gray-700">
            Based on your current spending, you are within your budget limit.
          </p>

          <p className="mt-5 text-sm text-gray-500">
            Demo Mode: This dashboard currently displays fictional sample data.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;