import { FaRocket, FaPlug, FaBook } from "react-icons/fa";
import type { SidebarItem } from "../types";

export const sidebar: SidebarItem[] = [
  {
    title: "Getting Started",
    icon: FaRocket,
    id: "getting-started",
    items: [
      { title: "Introduction", href: "/docs/introduction" },
      { title: "Installation", href: "/docs/installation" },
      { title: "Configuration", href: "/docs/configuration" },
      { title: "First Steps", href: "/docs/first-steps" }
    ]
  },
  {
    title: "Plugins",
    icon: FaPlug,
    id: "plugins",
    items: [
      { title: "Plugin Manager", href: "/docs/plugin-manager" },
      { title: "Popular Plugins", href: "/docs/popular-plugins" },
      { title: "Custom Plugins", href: "/docs/custom-plugins" }
    ]
  },
  {
    title: "Guides",
    icon: FaBook,
    id: "guides",
    items: [
      { title: "Keybindings", href: "/docs/keybindings" },
      { title: "Themes", href: "/docs/themes" },
      { title: "Performance", href: "/docs/performance" },
      { title: "Troubleshooting", href: "/docs/troubleshooting" }
    ]
  }
];
