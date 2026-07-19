"use client";

import Link from "next/link";
import { Fragment } from "react";
import { usePathname } from "next/navigation";
import { FILA_NAV } from "./nav";
import { useFilaSidebar } from "./FilaSidebarContext";

function isActive(pathname: string, url: string) {
  if (url === "/admin") return pathname === "/admin";
  return pathname === url || pathname.startsWith(`${url}/`);
}

export function FilaSidebar() {
  const pathname = usePathname();
  const { toggle } = useFilaSidebar();

  return (
    <div className="sidebar-area" id="sidebar-area">
      <div className="logo position-relative d-flex align-items-center justify-content-between">
        <Link href="/admin" className="d-block text-decoration-none position-relative">
          <img
            src="/admin-fila/images/logo-icon.png"
            alt="DijitalERP"
            width={32}
            height={32}
          />
          <span className="logo-text text-secondary fw-semibold">DijitalERP</span>
        </Link>
        <button
          type="button"
          className="sidebar-burger-menu bg-transparent p-0 border-0"
          id="sidebar-burger-menu"
          aria-label="Menüyü daralt"
          onClick={toggle}
        >
          <span
            className="border-1 d-block for-dark-burger"
            style={{ borderBottom: "1px solid #475569", height: 1, width: 25 }}
          />
          <span
            className="border-1 d-block for-dark-burger"
            style={{
              borderBottom: "1px solid #475569",
              height: 1,
              width: 25,
              margin: "6px 0",
            }}
          />
          <span
            className="border-1 d-block for-dark-burger"
            style={{ borderBottom: "1px solid #475569", height: 1, width: 25 }}
          />
        </button>
      </div>

      <aside id="layout-menu" className="layout-menu menu-vertical menu active">
        <ul className="menu-inner">
          {FILA_NAV.map((group) => (
            <Fragment key={group.label}>
              <li className="menu-title small text-uppercase">
                <span className="menu-title-text">{group.label}</span>
              </li>
              {group.items.map((item) => {
                const active = isActive(pathname, item.url);
                return (
                  <li key={item.url} className="menu-item">
                    <Link
                      href={item.url}
                      className={`menu-link${active ? " active" : ""}`}
                    >
                      <span className="material-symbols-outlined menu-icon">
                        {item.icon}
                      </span>
                      <span className="title">{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </Fragment>
          ))}
        </ul>
      </aside>
    </div>
  );
}
