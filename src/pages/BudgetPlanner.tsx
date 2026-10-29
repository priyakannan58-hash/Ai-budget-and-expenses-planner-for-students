import { useState } from "react";

function BudgetPlanner() {
  const [budget, setBudget] = useState(15000);
  const [expenses, setExpenses] = useState(0);

  const remaining = budget - expenses;

  const usage =
    budget > 0 ? ((expenses / budget) * 100).toFixed(1) : "0";

  return (
    <div className="min-h-screen bg-purple-50 p-8">

      <h1 className="text-4xl font-bold text-purple-700 mb-8">
        Budget Planner
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white rounded-2xl shadow p-6">

          <label className="font-semibold">
            Monthly Budget
          </label>

          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            className="w-full border rounded-xl p-3 mt-2"
          />

        </div>

        <div className="bg-white rounded-2xl shadow p-6">

          <label className="font-semibold">
            Total Expenses
          </label>

          <input
            type="number"
            value={expenses}
            onChange={(e) => setExpenses(Number(e.target.value))}
            className="w-full border rounded-xl p-3 mt-2"
          />

        </div>

      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-8">

        <div className="bg-white rounded-2xl shadow p-6">

          <h2 className="text-gray-500">
            Remaining Balance
          </h2>

          <p className="text-3xl font-bold text-green-600">
            ₹{remaining}
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow p-6">

          <h2 className="text-gray-500">
            Budget Usage
          </h2>

          <p className="text-3xl font-bold text-orange-500">
            {usage}%
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow p-6">

          <h2 className="text-gray-500">
            Savings
          </h2>

          <p className="text-3xl font-bold text-purple-700">
            ₹{remaining}
          </p>

        </div>

      </div>

    </div>
  );
}

export default BudgetPlanner;