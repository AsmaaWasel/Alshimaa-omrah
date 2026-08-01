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
    <div
      className="
      flex
      h-screen
      w-full
      overflow-hidden
      bg-stone-100
      "
      dir="rtl"
    >
      {/* Sidebar */}
      <aside
        className="
        hidden
        lg:block
        h-full
        w-72
        shrink-0
        "
      >
        <Sidebar user={session.user} />
      </aside>

      {/* Content */}
      <div
        className="
        flex
        h-full
        min-w-0
        flex-1
        flex-col
        "
      >
        <Header user={session.user} />

        <main
          className="
          flex-1
          overflow-y-auto
          p-4
          md:p-8
          "
        >
          <div
            className="
            mx-auto
            w-full
            max-w-7xl
            "
          >
            <div
              className="
              rounded-3xl
              border
              border-stone-200
              bg-white
              p-6
              shadow-sm
              "
            >
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
