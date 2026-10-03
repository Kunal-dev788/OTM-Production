import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type StartProjectLinkProps = {
  onNavigate?: () => void;
};

export function StartProjectLink({ onNavigate }: StartProjectLinkProps) {
  return (
    <Link
      className="start-project-link"
      href="/"
      data-scroll-target="contact"
      onClick={onNavigate}
    >
      <span>Start Project</span>
      <ArrowUpRight size={15} strokeWidth={2.4} aria-hidden="true" />
    </Link>
  );
}
