"use client";

import { useState } from "react";
import Link from "next/link";
import { AuthLayout } from "@/components/portal/auth-layout";
import { Button } from "@/components/ui/button";

export default function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <AuthLayout
      title="Reset your password"
      subtitle="Enter your email and we'll send you a reset link."
    >
      {sent ? (
        <div className="rounded-xl border border-border bg-light-bg p-6 text-center">
          <p className="text-sm font-light text-secondary-text">
            If an account exists for that email, a reset link will be sent.
            This is a frontend placeholder—connect authentication when ready.
          </p>
          <Link
            href="/portal/sign-in"
            className="mt-4 inline-block text-sm text-infrastructure-blue hover:underline"
          >
            Return to Sign In
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-primary-navy">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:border-infrastructure-blue focus:outline-none focus:ring-1 focus:ring-infrastructure-blue"
            />
          </div>
          <Button type="submit" className="w-full">
            Send Reset Link
          </Button>
          <p className="text-center text-sm font-light text-secondary-text">
            <Link href="/portal/sign-in" className="text-infrastructure-blue hover:underline">
              Back to Sign In
            </Link>
          </p>
        </form>
      )}
    </AuthLayout>
  );
}
