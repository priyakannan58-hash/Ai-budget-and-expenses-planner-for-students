import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface Expense {
  id: number;
  category: string;
  amount: number;
  date: string;
}

interface BudgetContextType {
  budget: number;
  setBudget: (budget: number) => void;
  expenses: Expense[];
  setExpenses: (expenses: Expense[]) => void;
}

const BudgetContext = createContext<BudgetContextType | undefined>(undefined);

export function BudgetProvider({ children }: { children: ReactNode }) {
  const [budget, setBudget] = useState(15000);
  const [expenses, setExpenses] = useState<Expense[]>([]);

  return (
    <BudgetContext.Provider
      value={{
        budget,
        setBudget,
        expenses,
        setExpenses,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
}

export function useBudget() {
  const context = useContext(BudgetContext);

  if (!context) {
    throw new Error("useBudget must be used inside BudgetProvider");
  }

  return context;
}