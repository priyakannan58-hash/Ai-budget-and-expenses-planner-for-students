function Reports() {

  const downloadCSV = () => {
    const csv =
      "Category,Amount\nFood,3500\nTransport,1500\nShopping,2500";

    const blob = new Blob([csv], { type: "text/csv" });

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = "Expense_Report.csv";

    a.click();
  };

  return (
    <div className="min-h-screen bg-purple-50 p-8">

      <h1 className="text-4xl font-bold text-purple-700 mb-8">
        Reports
      </h1>

      <div className="bg-white rounded-2xl shadow-lg p-6">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="text-left py-3">Category</th>
              <th>Amount</th>

            </tr>

          </thead>

          <tbody>

            <tr>
              <td className="py-3">Food</td>
              <td>₹3500</td>
            </tr>

            <tr>
              <td className="py-3">Transport</td>
              <td>₹1500</td>
            </tr>

            <tr>
              <td className="py-3">Shopping</td>
              <td>₹2500</td>
            </tr>

          </tbody>

        </table>

        <div className="mt-8 flex gap-4">

          <button
            onClick={() => window.print()}
            className="bg-purple-600 text-white px-6 py-3 rounded-xl"
          >
            Print Report
          </button>

          <button
            onClick={downloadCSV}
            className="bg-green-600 text-white px-6 py-3 rounded-xl"
          >
            Download CSV
          </button>

        </div>

      </div>

    </div>
  );
}

export default Reports;