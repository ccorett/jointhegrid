import Link from "next/link";

const services = [
  {
    href: "/deployment",
    label: "Deployment",
    description: "Configuration, migration, identity, security and rollout.",
    cta: "Plan a Deployment",
  },
  {
    href: "/administration",
    label: "Administration",
    description: "Users, licences, policies, security and day to day management.",
    cta: "Explore Administration",
  },
  {
    href: "/adoption",
    label: "Adoption",
    description: "Learning, AI use cases, champions and reinforcement.",
    cta: "Explore Adoption",
  },
];

export function ServiceLinks() {
  return (
    <div className="grid gap-px border border-border bg-border md:grid-cols-3">
      {services.map((service) => (
        <Link
          key={service.href}
          href={service.href}
          className="group block bg-white p-6 transition-colors hover:bg-light-bg md:p-7"
        >
          <p className="font-display text-xl font-bold text-primary-navy group-hover:text-infrastructure-blue md:text-[1.35rem]">
            {service.label}
          </p>
          <p className="text-lead mt-2 leading-snug text-body-text">
            {service.description}
          </p>
          <span className="mt-4 inline-block text-[15px] font-semibold text-infrastructure-blue md:text-base">
            {service.cta} →
          </span>
        </Link>
      ))}
    </div>
  );
}
