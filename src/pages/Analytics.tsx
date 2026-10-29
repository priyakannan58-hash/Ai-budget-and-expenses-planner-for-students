import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
} from "recharts";

const pieData = [
  { name: "Food", value: 3500 },
  { name: "Transport", value: 1500 },
  { name: "Shopping", value: 2500 },
  { name: "Study", value: 1000 },
  { name: "Others", value: 500 },
];

const barData = [
  { month: "Jan", Budget: 15000, Expense: 9000 },
  { month: "Feb", Budget: 15000, Expense: 11000 },
  { month: "Mar", Budget: 15000, Expense: 8500 },
];

const COLORS = [
  "#8B5CF6",
  "#A855F7",
  "#C084FC",
  "#DDD6FE",
  "#7C3AED",
];

function Analytics() {
  return (
    <div className="min-h-screen bg-purple-50 p-8">

      <h1 className="text-4xl font-bold text-purple-700 mb-8">
        Analytics
      </h1>

      <div className="grid lg:grid-cols-2 gap-8">

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <h2 className="text-2xl font-bold mb-4">
            Category-wise Expenses
          </h2>

          <PieChart width={350} height={300}>
            <Pie
              data={pieData}
              dataKey="value"
              outerRadius={100}
              label
            >
              {pieData.map(( _, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>

        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <h2 className="text-2xl font-bold mb-4">
            Budget vs Expenses
          </h2>

          <BarChart
            width={400}
            height={300}
            data={barData}
          >
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Legend />

            <Bar dataKey="Budget" fill="#8B5CF6" />

            <Bar dataKey="Expense" fill="#EC4899" />

          </BarChart>

        </div>

      </div>

    </div>
  );
}

export default Analytics;