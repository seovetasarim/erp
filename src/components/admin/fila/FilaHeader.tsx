"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFilaSidebar } from "./FilaSidebarContext";

export function FilaHeader() {
  const { toggle } = useFilaSidebar();
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  async function logout() {
    setLoggingOut(true);
    await fetch("/api/admin/session", { method: "DELETE" });
    router.replace("/admin/login");
    router.refresh();
  }

  return (
    <header
      className="header-area bg-white mb-4 rounded-10 border border-white"
      id="header-area"
    >
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="left-header-content">
            <ul className="d-flex align-items-center ps-0 mb-0 list-unstyled justify-content-center justify-content-md-start">
              <li className="d-xl-none">
                <button
                  type="button"
                  className="header-burger-menu bg-transparent p-0 border-0 position-relative top-3"
                  id="header-burger-menu"
                  aria-label="Menüyü aç"
                  onClick={toggle}
                >
                  <span
                    className="border-1 d-block for-dark-burger"
                    style={{
                      borderBottom: "1px solid #475569",
                      height: 1,
                      width: 25,
                    }}
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
                    style={{
                      borderBottom: "1px solid #475569",
                      height: 1,
                      width: 25,
                    }}
                  />
                </button>
              </li>
              <li>
                <div className="src-form position-relative">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ara..."
                    readOnly
                    aria-label="Arama"
                  />
                  <div className="src-btn position-absolute top-50 start-0 translate-middle-y bg-transparent p-0 border-0">
                    <span className="material-symbols-outlined">search</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-md-6">
          <div className="right-header-content mt-3 mt-md-0">
            <ul className="d-flex align-items-center justify-content-center justify-content-md-end ps-0 mb-0 list-unstyled">
              <li className="header-right-item">
                <Link
                  href="/"
                  className="btn btn-outline-primary btn-sm rounded-pill px-3"
                  target="_blank"
                >
                  Siteyi Aç
                </Link>
              </li>
              <li className="header-right-item">
                <div className="dropdown admin-profile position-relative">
                  <button
                    type="button"
                    className="btn p-0 border-0 bg-transparent d-flex align-items-center gap-2"
                    onClick={() => setMenuOpen((v) => !v)}
                    aria-expanded={menuOpen}
                  >
                    <img
                      src="/admin-fila/images/admin.png"
                      className="rounded-circle"
                      alt="Yönetici"
                      width={40}
                      height={40}
                    />
                    <span className="d-none d-md-inline fw-medium text-secondary">
                      Yönetici
                    </span>
                    <span className="material-symbols-outlined fs-18 text-secondary">
                      expand_more
                    </span>
                  </button>
                  {menuOpen && (
                    <div
                      className="dropdown-menu dropdown-menu-end show border-0 shadow"
                      style={{ display: "block", minWidth: 180 }}
                    >
                      <button
                        type="button"
                        className="dropdown-item"
                        disabled={loggingOut}
                        onClick={logout}
                      >
                        {loggingOut ? "Çıkış yapılıyor…" : "Çıkış Yap"}
                      </button>
                    </div>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
