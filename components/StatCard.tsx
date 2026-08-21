import type { ReactNode } from "react";

type StatCardProps = {
  icon: ReactNode;
  label: string;
  value: string;
  description: string;
};

export default function StatCard({
  icon,
  label,
  value,
  description
}: StatCardProps) {
  return (
    <div className="card kpi-card">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "var(--earth)"
        }}
      >
        {icon}
      </div>

      <div className="kpi-label">{label}</div>
      <div className="kpi-value">{value}</div>
      <div className="kpi-description">{description}</div>
    </div>
  );
}