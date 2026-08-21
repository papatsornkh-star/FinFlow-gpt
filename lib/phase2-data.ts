export type MonthlyEntry = {
  id: string;
  label: string;
  amount: number;
  note?: string;
};

export type MonthlyFinance = {
  month: string;
  incomes: MonthlyEntry[];
  expenses: MonthlyEntry[];
  investments: MonthlyEntry[];
  savings: MonthlyEntry[];
};

export const phase2Seed: MonthlyFinance = {
  month: "2026-08",
  incomes: [{ id: "income-1", label: "รายได้ครอบครัว", amount: 95000 }],
  expenses: [
    { id: "expense-1", label: "อุปโภค / บริโภค", amount: 27300 },
    { id: "expense-2", label: "ลูก", amount: 14000 },
    { id: "expense-3", label: "หนี้รถ", amount: 12129 },
    { id: "expense-4", label: "หนี้สินอื่น", amount: 15600 },
    { id: "expense-5", label: "ประกัน", amount: 8133 },
    { id: "expense-6", label: "โครงการที่ดิน", amount: 10467 }
  ],
  investments: [{ id: "investment-1", label: "เงินลงทุน", amount: 4500 }],
  savings: []
};

export function total(items: MonthlyEntry[]) {
  return items.reduce((sum, item) => sum + Number(item.amount || 0), 0);
}

export function monthlySummary(data: MonthlyFinance) {
  const income = total(data.incomes);
  const expense = total(data.expenses);
  const investment = total(data.investments);
  const savings = total(data.savings);
  return {
    income,
    expense,
    investment,
    savings,
    allocated: expense + investment + savings,
    remaining: income - expense - investment - savings
  };
}
