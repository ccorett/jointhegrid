"use client";

import Link from "next/link";
import { AuthLayout } from "@/components/portal/auth-layout";
import { Button } from "@/components/ui/button";

export default function CreateAccountPage() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    window.location.href = "/portal";
  }

  return (
    <AuthLayout
      title="Create your account"
      subtitle="Set up your organization's AI Credits account."
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-primary-navy">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:border-infrastructure-blue focus:outline-none focus:ring-1 focus:ring-infrastructure-blue"
          />
        </div>
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
          <label htmlFor="organization" className="mb-1.5 block text-sm font-medium text-primary-navy">
            Organization Name
          </label>
          <input
            id="organization"
            name="organization"
            type="text"
            required
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
            autoComplete="new-password"
            className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:border-infrastructure-blue focus:outline-none focus:ring-1 focus:ring-infrastructure-blue"
          />
        </div>
        <Button type="submit" className="w-full">
          Create Account
        </Button>
      </form>
      <p className="mt-6 text-center text-sm font-light text-secondary-text">
        Already have an account?{" "}
        <Link href="/portal/sign-in" className="text-infrastructure-blue hover:underline">
          Sign In
        </Link>
      </p>
    </AuthLayout>
  );
}
