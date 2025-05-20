import type { Icon } from "@lucide/astro";

export interface SocialWidgetProps {
  title?: string;
  description?: string;
  links: {
    href: string;
    label: string;
    icon: typeof Icon;
  }[];
  className?: string;
}
