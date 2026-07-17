"use client";

import DijitalErpLogo from "@/components/brand/DijitalErpLogo";

type LogoProps = {
  href?: string;
  onClick?: () => void;
  className?: string;
};

export function Logo({ href = "/admin", onClick, className = "" }: LogoProps) {
  return (
    <div className={`px-0 py-2.5 min-[850px]:py-0 ${className}`.trim()}>
      <DijitalErpLogo
        href={href}
        variant="dark"
        size="md"
        onClick={onClick}
        className="dark:hidden"
      />
      <DijitalErpLogo
        href={href}
        variant="light"
        size="md"
        onClick={onClick}
        className="hidden dark:inline-flex"
      />
    </div>
  );
}
