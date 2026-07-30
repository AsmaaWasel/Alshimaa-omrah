import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

import Sidebar from "@/components/dashboard/sidebar";
import Header from "@/components/dashboard/header";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/sign-in");
  }

  return (
    <div className="flex min-h-screen bg-stone-100">
      {/* Sidebar */}
      <Sidebar user={session.user} />

      {/* Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header user={session.user} />

        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm md:p-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
