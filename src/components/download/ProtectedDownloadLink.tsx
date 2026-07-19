"use client";

import { useDownloadHref } from "@/hooks/useDownloadHref";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ProtectedDownloadLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  children: ReactNode;
};

export default function ProtectedDownloadLink({
  children,
  ...props
}: ProtectedDownloadLinkProps) {
  const href = useDownloadHref();

  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}
