"use client";

import Link from "next/link";
import { useDownloadHref } from "@/hooks/useDownloadHref";
import type { ComponentProps, ReactNode } from "react";

type ProtectedDownloadLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  children: ReactNode;
};

export default function ProtectedDownloadLink({
  children,
  ...props
}: ProtectedDownloadLinkProps) {
  const href = useDownloadHref();

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}
