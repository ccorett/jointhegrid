import Link from "next/link";

const services = [
  {
    href: "/deployment",
    label: "Deploy",
    description: "Configuration, migration, identity, security and rollout.",
    cta: "Plan a Deployment",
  },
  {
    href: "/administration",
    label: "Administer",
    description: "Users, licences, policies, security and day to day management.",
    cta: "Explore Administration",
  },
  {
    href: "/adoption",
    label: "Adopt",
    description: "Learning, AI use cases, champions and reinforcement.",
    cta: "Explore Adoption",
  },
];

export function ServiceLinks() {
  return (
    <div className="grid gap-0 border border-border md:grid-cols-3">
      {services.map((service, i) => (
        <Link
          key={service.href}
          href={service.href}
          className={`group block p-8 transition-colors hover:bg-light-bg ${i < 2 ? "border-b border-border md:border-b-0 md:border-r" : ""}`}
        >
          <p className="font-display text-lg font-semibold text-primary-navy group-hover:text-infrastructure-blue">
            {service.label}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-secondary-text">
            {service.description}
          </p>
          <span className="mt-4 inline-block text-sm font-semibold text-infrastructure-blue">
            {service.cta} →
          </span>
        </Link>
      ))}
    </div>
  );
}
