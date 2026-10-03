"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Brand } from "./brand";
import { NavigationLinks } from "./navigation-links";
import { StartProjectLink } from "./start-project-link";

export function SiteNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <div className="navigation-shell">
        <Brand />

        <div className="desktop-navigation">
          <NavigationLinks />
        </div>

        <div className="desktop-cta">
          <StartProjectLink />
        </div>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <X size={22} strokeWidth={2.2} aria-hidden="true" />
          ) : (
            <Menu size={22} strokeWidth={2.2} aria-hidden="true" />
          )}
        </button>
      </div>

      <div
        className={`mobile-navigation${isMenuOpen ? " mobile-navigation--open" : ""}`}
        id="mobile-navigation"
        aria-hidden={!isMenuOpen}
      >
        <NavigationLinks onNavigate={closeMenu} />
        <StartProjectLink onNavigate={closeMenu} />
      </div>
    </header>
  );
}
