import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          أهلاً، {session?.user?.name}
        </h1>

        <p className="text-gray-500 mt-1">مرحباً في لوحة التحكم الخاصة بك</p>
      </div>
    </div>
  );
}
