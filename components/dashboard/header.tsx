"use client";

import { Menu } from "lucide-react";

export default function Header({
  user,
  onMenuClick,
}: {
  user: any;
  onMenuClick?: () => void;
}) {
  return (
    <header className="sticky top-0 z-30 border-b bg-white">
      <div className="flex items-center justify-between px-4 py-4 lg:px-8">
        <div className="flex items-center gap-3">
          {/* يظهر في الموبايل فقط */}
          <button
            onClick={onMenuClick}
            className="rounded-lg p-2 hover:bg-stone-100 lg:hidden"
          >
            <Menu size={24} />
          </button>

          <div>
            <h1 className="text-xl font-bold text-stone-800">أهلاً بك 👋</h1>

            <p className="mt-1 text-sm text-stone-500">
              {new Date().toLocaleDateString("ar-SA")}
            </p>
          </div>
        </div>

        <div className="text-right">
          <p className="font-semibold text-stone-800">{user?.name}</p>

          <p className="text-sm text-stone-500">{user?.email}</p>
        </div>
      </div>
    </header>
  );
}
