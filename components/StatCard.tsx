import type { ReactNode } from "react";

type StatCardProps = {
  icon: ReactNode;
  label: string;
  value: string;
  description: string;
  tone?: "asset" | "debt" | "investment" | "insurance";
};

export default function StatCard({
  icon,
  label,
  value,
  description,
  tone
}: StatCardProps) {
  return (
    <div className={`card kpi-card${tone ? ` category-${tone}` : ""}`}>
      <div className="kpi-icon">
        {icon}
      </div>

      <div className="kpi-label">{label}</div>
      <div className="kpi-value">{value}</div>
      <div className="kpi-description">{description}</div>
    </div>
  );
}