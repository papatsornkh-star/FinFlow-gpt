"use client";

import { useEffect, useMemo, useState } from "react";
import { MonthlyFinance, MonthlyEntry, monthlySummary, phase2Seed } from "./phase2-data";

const KEY = "finflow-phase2-monthly";

function loadData(): Record<string, MonthlyFinance> {
  if (typeof window === "undefined") return { [phase2Seed.month]: phase2Seed };
  try {
    const saved = localStorage.getItem(KEY);
    return saved ? JSON.parse(saved) : { [phase2Seed.month]: phase2Seed };
  } catch {
    return { [phase2Seed.month]: phase2Seed };
  }
}

export function usePhase2Finance() {
  const [months, setMonths] = useState<Record<string, MonthlyFinance>>(loadData);
  const [month, setMonth] = useState(phase2Seed.month);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(months));
  }, [months]);

  const data = months[month] ?? {
    month,
    incomes: [],
    expenses: [],
    investments: [],
    savings: []
  };

  const summary = useMemo(() => monthlySummary(data), [data]);

  function selectMonth(next: string) {
    setMonth(next);
    setMonths(current => current[next] ? current : {
      ...current,
      [next]: { month: next, incomes: [], expenses: [], investments: [], savings: [] }
    });
  }

  function add(kind: keyof Omit<MonthlyFinance, "month">, entry: Omit<MonthlyEntry, "id">) {
    setMonths(current => ({
      ...current,
      [month]: {
        ...data,
        [kind]: [...data[kind], { ...entry, id: `${kind}-${Date.now()}` }]
      }
    }));
  }

  function remove(kind: keyof Omit<MonthlyFinance, "month">, id: string) {
    setMonths(current => ({
      ...current,
      [month]: { ...data, [kind]: data[kind].filter(item => item.id !== id) }
    }));
  }

  return { month, selectMonth, data, summary, add, remove };
}
