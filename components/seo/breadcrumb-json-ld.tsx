import { JsonLd } from "@/components/seo/json-ld";
import {
  breadcrumbJsonLd,
  type BreadcrumbItem,
} from "@/lib/structured-data";

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  return <JsonLd data={breadcrumbJsonLd(items)} />;
}
