import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import EmptyState from "@/components/EmptyState";

export default function InsurancePage() {
  return (
    <div className="app-shell">
      <Sidebar />

      <main className="main-content">
        <header className="page-header">
          <div>
            <div className="page-eyebrow">Family Finance</div>
            <h1 className="page-title">ประกัน</h1>
          </div>
        </header>

        <section className="card card-padding">
          <EmptyState
            icon={<ShieldCheck size={22} />}
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