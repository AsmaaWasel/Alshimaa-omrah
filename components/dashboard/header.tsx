"use client";

import { useRouter } from "next/navigation";

export default function Header({ user }: { user: any }) {
  const router = useRouter();

  return (
    <div className="border-b border-stone-200 bg-white px-8 py-5 shadow-sm">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-stone-800">أهلاً بك 👋</h2>

          <p className="mt-1 text-sm text-stone-500">
            {new Date().toLocaleDateString("ar-SA")}
          </p>
        </div>
        <div className="text-right">
          <p className="font-semibold text-stone-800">{user?.name}</p>

          <p className="text-sm text-stone-500">{user?.email}</p>
        </div>
      </div>
    </div>
  );
}
