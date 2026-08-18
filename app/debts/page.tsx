import Link from "next/link";
import { CreditCard } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import EmptyState from "@/components/EmptyState";

export default function DebtsPage() {
  return (
    <div className="app-shell">
      <Sidebar />

      <main className="main-content theme-debt">
        <header className="page-header">
          <div>
            <div className="page-eyebrow">Family Finance</div>
            <h1 className="page-title">หนี้สิน</h1>
          </div>
        </header>

        <section className="card card-padding category-status-card">
          <div className="category-status-header">
            <div className="category-status-title">
              <CreditCard size={22} />
              ภาพรวมหนี้สิน
            </div>
            <span className="category-badge">ค้างชำระ 0 รายการ</span>
          </div>

          <div>
            <div className="page-eyebrow">ยอดคงเหลือ</div>
            <div className="debt-balance">฿0</div>
          </div>

          <div className="category-progress" aria-label="ความคืบหน้าการชำระหนี้">
            <div className="category-progress-fill" />
          </div>

          <EmptyState
            icon={<CreditCard size={22} />}
            title="ยังไม่มีข้อมูล"
            description="Phase 1: UI Demo • หน้านี้เตรียมโครงสร้างไว้สำหรับข้อมูลในขั้นตอนถัดไป"
          />
        </section>

        <div style={{ marginTop: 16 }}>
          <Link href="/" className="button button-secondary">
            ← กลับหน้าภาพรวม
          </Link>
        </div>
      </main>
    </div>
  );
}