import Link from "next/link";
import {
  Home, WalletCards, CreditCard, House, TrendingUp,
  ShieldCheck, CalendarDays, Settings, Plus
} from "lucide-react";
import Sidebar from "@/components/Sidebar";
import EmptyState from "@/components/EmptyState";
import StatCard from "@/components/StatCard";

const navigation = [
  { label: "ภาพรวม", href: "/", icon: Home },
  { label: "งบประมาณ", href: "/budget", icon: WalletCards },
  { label: "หนี้สิน", href: "/debts", icon: CreditCard },
  { label: "สินทรัพย์", href: "/assets", icon: House },
  { label: "เงินลงทุน", href: "/investments", icon: TrendingUp },
  { label: "ประกัน", href: "/insurance", icon: ShieldCheck },
  { label: "ปฏิทินการเงิน", href: "/calendar", icon: CalendarDays },
  { label: "จัดการข้อมูล", href: "/settings", icon: Settings }
];

function Allocation({
  label,
  percent
}: {
  label: string;
  percent: number;
}) {
  return (
    <div className="allocation-row">
      <div>
        <div className="allocation-label">
          <span>{label}</span>
          <span>{percent}%</span>
        </div>
        <div className="allocation-bar">
          <div
            className="allocation-fill"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>

      <div className="allocation-percent">{percent}%</div>
    </div>
  );
}

function QuickButton({ text }: { text: string }) {
  return (
    <button className="button button-secondary">
      <Plus size={15} />
      {text}
    </button>
  );
}

export default function HomePage() {
  return (
    <div className="app-shell">
      <Sidebar />

      <main className="main-content">
        <header className="page-header">
          <div>
            <div className="page-eyebrow">ภาพรวมการเงิน</div>
            <h1 className="page-title">สวัสดี 👋</h1>
          </div>

          <button className="month-selector">สิงหาคม 2569</button>
        </header>

        <section className="kpi-grid">
          <StatCard
            icon={<House size={18} />}
            label="ทรัพย์สิน"
            value="฿0"
            description="ยังไม่มีข้อมูล"
          />
          <StatCard
            icon={<CreditCard size={18} />}
            label="หนี้สิน"
            value="฿0"
            description="ยังไม่มีข้อมูล"
          />
          <StatCard
            icon={<TrendingUp size={18} />}
            label="เงินลงทุน"
            value="฿0"
            description="ยังไม่มีข้อมูล"
          />
          <StatCard
            icon={<ShieldCheck size={18} />}
            label="ทุนประกัน"
            value="฿0"
            description="ยังไม่มีข้อมูล"
          />
        </section>

        <section
          className="card card-padding"
          style={{ marginTop: 16, textAlign: "center" }}
        >
          <div className="page-eyebrow">มูลค่าสุทธิ</div>
          <div className="kpi-value">฿0</div>
          <div className="kpi-description">ทรัพย์สิน − หนี้สิน</div>
        </section>

        <section className="dashboard-grid">
          <section className="card card-padding">
            <div className="section-title">ภาพรวมทรัพย์สิน</div>

            <div className="donut-wrapper">
              <div className="donut" />
            </div>

            <EmptyState
              icon={<House size={20} />}
              title="ยังไม่มีสินทรัพย์"
              description="เพิ่มบ้าน รถ ที่ดิน เงินสด หรือสินทรัพย์อื่น ๆ"
              buttonText="เพิ่มสินทรัพย์"
            />
          </section>

          <section className="card card-padding">
            <div className="section-title">ภาพรวมหนี้สิน</div>

            <EmptyState
              icon={<CreditCard size={20} />}
              title="ยังไม่มีรายการหนี้"
              description="เพิ่มหนี้เพื่อให้ระบบคำนวณยอดคงเหลือ ดอกเบี้ย และแผนชำระ"
              buttonText="เพิ่มหนี้"
            />
          </section>

          <section className="card card-padding full-width">
            <div className="section-title">
              เงินเดือนนี้จัดสรรไปที่ไหน?
            </div>

            <div className="allocation-list">
              <Allocation label="ค่าใช้จ่ายครอบครัวและลูก" percent={0} />
              <Allocation label="ทรัพย์สินและโครงการ" percent={0} />
              <Allocation label="หนี้สิน" percent={0} />
              <Allocation label="การเงินและการลงทุน" percent={0} />
            </div>
          </section>

          <section className="card card-padding full-width">
            <div className="section-title">แผนการเงิน</div>

            <EmptyState
              icon={<CalendarDays size={22} />}
              title="ยังไม่มีแผนการเงิน"
              description={
                <>
                  เพิ่มรายได้ รายจ่าย หนี้ หรือเงินกันไว้ล่วงหน้า
                  <br />
                  เพื่อให้ระบบช่วยวางแผนเงินในเดือนถัดไป
                </>
              }
            />
          </section>

          <section className="card card-padding full-width">
            <div className="section-title">เพิ่มข้อมูล</div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 10
              }}
            >
              <QuickButton text="รายได้" />
              <QuickButton text="รายจ่าย" />
              <QuickButton text="หนี้สิน" />
              <QuickButton text="สินทรัพย์" />
              <QuickButton text="เงินลงทุน" />
              <QuickButton text="ประกัน" />
            </div>
          </section>
        </section>

        <div
          style={{
            marginTop: 24,
            color: "var(--text-secondary)",
            fontSize: 12
          }}
        >
          Demo v0.1 • เตรียมโครงสร้างสำหรับฐานข้อมูลและ Google Login
        </div>
      </main>

      <nav className="mobile-bottom-nav">
        {navigation.slice(0, 5).map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 3,
                color:
                  item.href === "/"
                    ? "var(--earth)"
                    : "var(--text-secondary)",
                fontSize: 10
              }}
            >
              <Icon size={19} />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}