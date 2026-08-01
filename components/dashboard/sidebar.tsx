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
  flex
  h-full
  w-72
  flex-col
  bg-[#241B13]
  text-white
  "
      dir="rtl"
    >
      {/* Logo */}
      <div
        className="
        border-b
        border-amber-800/20
        px-6
        py-8
        "
      >
        <h1
          className="
          text-2xl
          font-bold
          text-amber-400
          "
        >
          قافلة الشيماء
        </h1>

        <p
          className="
          mt-2
          text-sm
          text-stone-300
          "
        >
          لخدمات المعتمرين والزوار
        </p>
      </div>

      {/* Navigation */}
      <nav
        className="
        flex-1
        space-y-4
        px-5
        py-8
        "
      >
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

              <span
                className="
                text-[15px]
                font-medium
                "
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* User */}
      <div
        className="
        border-t
        border-amber-800/20
        p-6
        "
      >
        <div
          className="
          mb-5
          rounded-2xl
          bg-[#3A2E22]
          p-4
          "
        >
          <p
            className="
            text-xs
            text-stone-400
            "
          >
            الحساب الحالي
          </p>

          <p
            className="
            mt-2
            truncate
            text-sm
            font-medium
            text-white
            "
          >
            {user?.email}
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="
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
