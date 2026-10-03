import Link from "next/link";
import { navigationItems } from "./navigation-config";

type NavigationLinksProps = {
  onNavigate?: () => void;
};

export function NavigationLinks({ onNavigate }: NavigationLinksProps) {
  return (
    <nav className="nav-links" aria-label="Primary navigation">
      {navigationItems.map((item, index) => (
        <Link
          className={`nav-link${index === 0 ? " nav-link--active" : ""}`}
          href={item.href}
          data-scroll-target={item.target}
          key={item.label}
          onClick={onNavigate}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
