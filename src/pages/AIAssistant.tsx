import { useState } from "react";

function AIAssistant() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const getAnswer = () => {
    const q = question.toLowerCase();

    if (q.includes("food")) {
      setAnswer("🍔 You spent approximately ₹3,500 on Food this month. Consider reducing restaurant expenses by 10%.");
    } else if (q.includes("save")) {
      setAnswer("💰 Save at least 20% of your monthly budget. Reduce shopping and entertainment expenses.");
    } else if (q.includes("budget")) {
      setAnswer("📊 Based on your current spending, a monthly budget of ₹15,000 is recommended.");
    } else if (q.includes("next month")) {
      setAnswer("📅 Suggested budget for next month: ₹16,000 based on your previous spending.");
    } else {
      setAnswer("🤖 Rule-based Assistant: Track daily expenses, avoid unnecessary purchases, and review your spending weekly.");
    }
  };

  return (
    <div className="min-h-screen bg-purple-50 p-8">

      <h1 className="text-4xl font-bold text-purple-700 mb-8">
        AI Financial Assistant
      </h1>

      <div className="bg-white rounded-2xl shadow-lg p-6">

        <textarea
          rows={4}
          placeholder="Ask something like: How much did I spend on food this month?"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full border rounded-xl p-4"
        />

        <button
          onClick={getAnswer}
          className="mt-5 bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700"
        >
          Ask AI
        </button>

      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">

        <h2 className="text-2xl font-bold text-purple-700">
          Response
        </h2>

        <p className="mt-4 text-lg">
          {answer || "Ask a question to receive a financial suggestion."}
        </p>

        <p className="mt-6 text-sm text-gray-500">
          Demo mode: This currently provides rule-based insights using fictional sample data. A real AI API can be connected later through a secure backend.
        </p>

      </div>

    </div>
  );
}

export default AIAssistant;