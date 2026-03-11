import type { JSX } from "astro/jsx-runtime";

interface SidebarSubItem {
  title: string;
  href: string;
}

interface SidebarItem {
  title: string;
  icon: JSX.Element;
  id: string;
  items: SidebarSubItem[];
}

export { type SidebarSubItem, type SidebarItem };
