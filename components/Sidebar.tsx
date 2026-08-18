 "use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home, WalletCards, CreditCard, House, TrendingUp,
  ShieldCheck, CalendarDays, Settings
} from "lucide-react";

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

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="logo">
        <div className="logo-title">🌿 Family Finance</div>
        <div className="logo-subtitle">การเงินครอบครัว</div>
      </div>

      <nav className="navigation">
        {navigation.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`navigation-item ${active ? "active" : ""}`}
            >
              <Icon size={17} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}