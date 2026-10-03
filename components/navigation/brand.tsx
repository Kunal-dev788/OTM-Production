import Link from "next/link";

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span className="brand-mark__inner" />
    </span>
  );
}

export function Brand() {
  return (
    <Link className="brand" href="/" data-scroll-target="home" aria-label="On Time Media home">
      <BrandMark />
      <span className="brand__copy">
        <span className="brand__name">On Time Media</span>
        <span className="brand__tagline">A creative studio</span>
      </span>
    </Link>
  );
}
