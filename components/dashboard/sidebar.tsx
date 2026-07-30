"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Hotel, Bus, LogOut } from "lucide-react";
import { authClient } from "@/lib/auth-client";

export default function Sidebar({ user }: { user: any }) {
  const pathname = usePathname();

  const navItems = [
    {
      label: "لوحة التحكم",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "الفنادق",
      href: "/dashboard/hotels",
      icon: Hotel,
    },
    {
      label: "الباصات",
      href: "/dashboard/buses",
      icon: Bus,
    },
  ];

  const handleLogout = async () => {
    await authClient.signOut();
    window.location.href = "/sign-in";
  };

  return (
    <aside className="flex h-screen w-72 flex-col border-l border-amber-900/20 bg-[#2A2118] shadow-2xl">
      {/* Logo */}
      <div className="border-b border-amber-800/20 px-8 py-8">
        <h1 className="text-2xl font-extrabold leading-relaxed text-amber-400">
          قافلة الشيماء
        </h1>

        <p className="mt-2 text-sm text-stone-300">لخدمات المعتمرين والزوار</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-6 px-5 pt-12 p-7">
        {navItems.map((item) => {
          const Icon = item.icon;

          const isActive =
            pathname === item.href || pathname.startsWith(item.href + "/");

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300  ${
                isActive
                  ? "bg-amber-500 text-white shadow-lg"
                  : "text-stone-200 hover:bg-[#3B3025]"
              }`}
            >
              <Icon
                size={22}
                className={`transition ${
                  isActive
                    ? "text-white"
                    : "text-amber-400 group-hover:text-amber-300"
                }`}
              />

              <span
                className={`text-[15px] font-medium ${
                  isActive ? "text-white" : "text-stone-100"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* User */}
      <div className="border-t border-amber-800/20 p-6">
        <div className="mb-5 rounded-2xl bg-[#3A2E22] p-4">
          <p className="text-xs text-stone-400">الحساب الحالي</p>

          <p className="mt-2 truncate text-sm font-medium text-black">
            {user?.email}
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="flex w-full items-center justify-center gap-3 rounded-2xl bg-red-500 py-3 text-sm font-semibold text-black transition hover:bg-red-600"
        >
          <LogOut size={18} />
          تسجيل الخروج
        </button>
      </div>
    </aside>
  );
}
