"use client";

import { FormEvent, useState } from "react";
import { usePhase2Finance } from "../../lib/use-phase2-finance";
import "./styles.css";

type Kind = "incomes" | "expenses" | "investments" | "savings";

const names: Record<Kind, string> = {
  incomes: "รายรับ",
  expenses: "รายจ่าย",
  investments: "เงินลงทุน",
  savings: "เงินเก็บ"
};

const money = (n: number) =>
  new Intl.NumberFormat("th-TH", { maximumFractionDigits: 0 }).format(n);

function AddForm({ kind, onAdd }: { kind: Kind; onAdd: (k: Kind, label: string, amount: number) => void }) {
  const [label, setLabel] = useState("");
  const [amount, setAmount] = useState("");

  function submit(e: FormEvent) {
    e.preventDefault();
    const value = Number(amount);
    if (!label.trim() || !value || value < 0) return;
    onAdd(kind, label.trim(), value);
    setLabel("");
    setAmount("");
  }

  return (
    <form className="p2-form" onSubmit={submit}>
      <input value={label} onChange={e => setLabel(e.target.value)} placeholder="ชื่อรายการ" />
      <input value={amount} onChange={e => setAmount(e.target.value)} type="number" inputMode="decimal" placeholder="จำนวนเงิน" />
      <button type="submit">+ เพิ่ม</button>
    </form>
  );
}

export default function Phase2Page() {
  const { month, selectMonth, data, summary, add, remove } = usePhase2Finance();
  const kinds: Kind[] = ["incomes", "expenses", "investments", "savings"];

  return (
    <main className="p2">
      <header className="p2-header">
        <div>
          <div className="p2-kicker">FINFLOW · PHASE 2</div>
          <h1>แผนการเงินรายเดือน</h1>
          <p>วางแผนรายรับ รายจ่าย เงินลงทุน และเงินเก็บแบบง่าย ๆ</p>
        </div>
        <label>เดือน<input type="month" value={month} onChange={e => selectMonth(e.target.value)} /></label>
      </header>

      <section className="p2-summary">
        <div><span>รายรับ</span><strong>{money(summary.income)}</strong><small>บาท</small></div>
        <div><span>รายจ่าย</span><strong>{money(summary.expense)}</strong><small>บาท</small></div>
        <div><span>ลงทุน + เงินเก็บ</span><strong>{money(summary.investment + summary.savings)}</strong><small>บาท</small></div>
        <div><span>คงเหลือ</span><strong>{money(summary.remaining)}</strong><small>บาท</small></div>
      </section>

      <section className="p2-progress">
        <div><span style={{ width: `${summary.income ? Math.min(100, summary.allocated / summary.income * 100) : 0}%` }} /></div>
        <small>จัดสรรแล้ว {money(summary.allocated)} บาท · {summary.income ? Math.round(summary.allocated / summary.income * 100) : 0}%</small>
      </section>

      <section className="p2-grid">
        {kinds.map(kind => (
          <article className="p2-card" key={kind}>
            <div className="p2-title">
              <h2>{names[kind]}</h2>
              <b>{money(kind === "incomes" ? summary.income : kind === "expenses" ? summary.expense : kind === "investments" ? summary.investment : summary.savings)} บาท</b>
            </div>

            {data[kind].map(item => (
              <div className="p2-item" key={item.id}>
                <div><strong>{item.label}</strong><small>{money(item.amount)} บาท</small></div>
                <button onClick={() => remove(kind, item.id)}>ลบ</button>
              </div>
            ))}

            {!data[kind].length && <p className="p2-empty">ยังไม่มีรายการ</p>}
            <AddForm kind={kind} onAdd={(k, label, amount) => add(k, { label, amount })} />
          </article>
        ))}
      </section>
    </main>
  );
}
