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
    <aside
      className="
       fixed
    top-0
    right-0
    z-50
    h-screen
    w-64
    bg-[#2B2118]
    shadow-xl
      flex
      flex-col
      justify-between
      p-6
    "
    >
      <div>
        {/* Logo */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white">قافلة الشيماء</h2>

          <p className="mt-2 text-sm text-stone-300">
            لخدمات المعتمرين والزوار
          </p>
        </div>

        {/* Navigation */}
        <nav className="space-y-3">
          {navItems.map((item) => {
            const Icon = item.icon;

            const isActive =
              pathname === item.href || pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                group
                flex
                items-center
                gap-4
                rounded-2xl
                px-5
                py-4
                transition-all
                duration-300

                ${
                  isActive
                    ? "bg-amber-500 text-white shadow-lg"
                    : "text-stone-200 hover:bg-[#3B3025]"
                }
              `}
              >
                <Icon
                  size={22}
                  className={
                    isActive
                      ? "text-white"
                      : "text-amber-400 group-hover:text-amber-300"
                  }
                />

                <span className="text-[15px] font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* User */}
      <div>
        <p className="mt-2 truncate text-sm font-medium text-white">
          {user?.email}
        </p>

        <button
          onClick={handleLogout}
          className="
          mt-4
          flex
          w-full
          items-center
          justify-center
          gap-3
          rounded-2xl
          bg-red-500
          py-3
          text-sm
          font-semibold
          text-white
          transition
          hover:bg-red-600
        "
        >
          <LogOut size={18} />
          تسجيل الخروج
        </button>
      </div>
    </aside>
  );
}
