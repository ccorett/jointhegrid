"use client";

import Link from "next/link";
import { AuthLayout } from "@/components/portal/auth-layout";
import { Button } from "@/components/ui/button";

export default function SignInPage() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    window.location.href = "/portal";
  }

  return (
    <AuthLayout
      title="Sign in to your account"
      subtitle="Access your organization's AI Credits portal."
    >
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
        <div>
          <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-primary-navy">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="current-password"
            className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:border-infrastructure-blue focus:outline-none focus:ring-1 focus:ring-infrastructure-blue"
          />
        </div>
        <div className="flex justify-end">
          <Link
            href="/portal/forgot-password"
            className="text-sm text-infrastructure-blue hover:underline"
          >
            Forgot Password
          </Link>
        </div>
        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </form>
      <p className="mt-6 text-center text-sm font-light text-secondary-text">
        Don&apos;t have an account?{" "}
        <Link href="/portal/create-account" className="text-infrastructure-blue hover:underline">
          Create Account
        </Link>
      </p>
    </AuthLayout>
  );
}
