import type { Dictionary } from '@repo/internationalization';

export interface HeaderProps {
  dictionary: Dictionary;
}

export interface NavigationItems {
  title: string;
  href?: string;
  description?: string;
  items?: NavigationItem[];
}

export interface NavigationItem {
  title: string;
  href: string;
  description?: string;
}
