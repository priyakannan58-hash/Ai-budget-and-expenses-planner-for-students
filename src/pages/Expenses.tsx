import { useState } from "react";

interface Expense {
  id: number;
  category: string;
  amount: number;
  date: string;
}

function Expenses() {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const [expenses, setExpenses] = useState<Expense[]>([]);

  const addExpense = () => {
    if (!category || !amount || !date) {
      alert("Please fill all fields");
      return;
    }

    const newExpense: Expense = {
      id: Date.now(),
      category,
      amount: Number(amount),
      date,
    };

    setExpenses([...expenses, newExpense]);

    setCategory("");
    setAmount("");
    setDate("");
  };

  const deleteExpense = (id: number) => {
    setExpenses(expenses.filter((item) => item.id !== id));
  };

  const totalExpense = expenses.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  return (
    <div className="min-h-screen bg-purple-50 p-8">

      <h1 className="text-4xl font-bold text-purple-700 mb-8">
        My Expenses
      </h1>

      <div className="bg-white rounded-2xl shadow-lg p-6">

        <div className="grid md:grid-cols-3 gap-4">

          <input
            className="border rounded-xl p-3"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <input
            type="number"
            className="border rounded-xl p-3"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <input
            type="date"
            className="border rounded-xl p-3"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

        </div>

        <button
          onClick={addExpense}
          className="mt-5 bg-purple-600 text-white px-6 py-3 rounded-xl"
        >
          Add Expense
        </button>

      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">

        <h2 className="text-2xl font-bold mb-4">
          Expense List
        </h2>

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="text-left py-3">Category</th>
              <th className="text-left">Amount</th>
              <th className="text-left">Date</th>
              <th>Action</th>

            </tr>

          </thead>

          <tbody>

            {expenses.map((expense) => (

              <tr key={expense.id} className="border-b">

                <td className="py-3">{expense.category}</td>

                <td>₹{expense.amount}</td>

                <td>{expense.date}</td>

                <td>

                  <button
                    onClick={() => deleteExpense(expense.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-lg"
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

        <div className="mt-8">

          <h2 className="text-2xl font-bold text-purple-700">
            Total Expenses : ₹{totalExpense}
          </h2>

        </div>

      </div>

    </div>
  );
}

export default Expenses;