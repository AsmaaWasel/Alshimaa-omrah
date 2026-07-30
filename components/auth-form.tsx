"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

export function AuthForm({ mode }: { mode: "sign-in" | "sign-up" }) {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const isSignUp = mode === "sign-up";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { error } = isSignUp
      ? await authClient.signUp.email({
          email,
          password,
          name,
        })
      : await authClient.signIn.email({
          email,
          password,
        });

    setLoading(false);

    if (error) {
      setError(error.message ?? "حدث خطأ ما");
      return;
    }

    router.push("/dashboard");
    router.refresh();
  };

  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <Card className="w-full max-w-md p-6">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold">
            {isSignUp ? "إنشاء حساب جديد" : "مرحبًا بعودتك"}
          </h1>

          <p className="mt-2 text-muted-foreground">
            {isSignUp
              ? "قم بإنشاء حساب للبدء"
              : "سجل الدخول إلى حسابك للمتابعة"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4" dir="rtl">
          {isSignUp && (
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">الاسم</Label>

              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="name"
              />
            </div>
          )}

          <div className="flex flex-col gap-2">
            <Label htmlFor="email">البريد الإلكتروني</Label>

            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="password">كلمة المرور</Label>

            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
              autoComplete={isSignUp ? "new-password" : "current-password"}
            />
          </div>

          {error && (
            <p className="text-sm text-destructive" role="alert">
              {error}
            </p>
          )}

          <Button type="submit" disabled={loading} className="w-full">
            {loading
              ? "يرجى الانتظار..."
              : isSignUp
                ? "إنشاء حساب"
                : "تسجيل الدخول"}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground" dir="rtl">
          {isSignUp ? "لديك حساب بالفعل؟ " : "ليس لديك حساب؟ "}

          <Link
            href={isSignUp ? "/sign-in" : "/sign-up"}
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            {isSignUp ? "تسجيل الدخول" : "إنشاء حساب"}
          </Link>
        </p>
      </Card>
    </main>
  );
}
