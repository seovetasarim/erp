import "../../globals.scss";
import type { PropsWithChildren } from "react";

export default function AdminLoginLayout({ children }: PropsWithChildren) {
  return <div className="admin-login-site-shell">{children}</div>;
}
