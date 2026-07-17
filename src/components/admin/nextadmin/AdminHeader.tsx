"use client";

import { MenuIcon } from "./icons";
import { ThemeToggleSwitch } from "./ThemeToggleSwitch";
import { useSidebarContext } from "./sidebar-context";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.166 3.333a5.833 5.833 0 103.535 10.48l3.132 3.132a.833.833 0 101.178-1.178l-3.132-3.132A5.833 5.833 0 009.166 3.333zm-4.167 5.833a4.167 4.167 0 118.334 0 4.167 4.167 0 01-8.334 0z"
      />
    </svg>
  );
}

export function AdminHeader() {
  const { toggleSidebar, isMobile } = useSidebarContext();
  const router = useRouter();
  const [username, setUsername] = useState("admin");

  useEffect(() => {
    fetch("/api/admin/session")
      .then((res) => res.json())
      .then((data: { admin?: { username?: string } | null }) => {
        if (data.admin?.username) setUsername(data.admin.username);
      })
      .catch(() => undefined);
  }, []);

  async function logout() {
    await fetch("/api/admin/session", { method: "DELETE" });
    router.replace("/admin/login");
    router.refresh();
  }

  return (
    <header className="border-stroke shadow-1 dark:border-stroke-dark dark:bg-gray-dark sticky top-0 z-30 flex items-center justify-between border-b bg-white px-4 py-5 md:px-5 2xl:px-10">
      <button
        type="button"
        onClick={toggleSidebar}
        className="dark:border-stroke-dark rounded-lg border px-1.5 py-1 lg:hidden dark:bg-[#020D1A] hover:dark:bg-[#FFFFFF1A]"
      >
        <MenuIcon />
        <span className="sr-only">Kenar çubuğunu aç/kapat</span>
      </button>

      <div className="max-xl:hidden">
        <h1 className="text-heading-5 mb-0.5 font-bold text-dark dark:text-white">
          Dashboard
        </h1>
        <p className="font-medium text-dark-4 dark:text-dark-6">
          DijitalERP Yönetim Paneli
        </p>
      </div>

      <div className="2xsm:gap-4 flex flex-1 items-center justify-end gap-2">
        <div className="relative hidden w-full max-w-75 min-[1015px]:block">
          <input
            type="search"
            placeholder="Ara"
            className="bg-gray-2 focus-visible:border-primary dark:border-dark-3 dark:bg-dark-2 dark:hover:border-dark-4 dark:hover:bg-dark-3 dark:hover:text-dark-6 dark:focus-visible:border-primary flex w-full items-center gap-3.5 rounded-full border py-3 pr-5 pl-13.25 transition-colors outline-none"
          />
          <SearchIcon className="pointer-events-none absolute top-1/2 left-5 -translate-y-1/2 max-[1015px]:size-5" />
        </div>

        <ThemeToggleSwitch />

        <div className="shrink-0">
          <div className="flex items-center gap-3">
            <figure className="flex items-center gap-3">
              <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                {username.slice(0, 2).toUpperCase()}
              </span>
              <figcaption className="hidden font-medium text-dark min-[640px]:block dark:text-dark-6">
                <div className="max-w-24 truncate font-semibold text-dark dark:text-white">
                  {username}
                </div>
                <div className="text-xs text-dark-5">Yönetici</div>
              </figcaption>
            </figure>
            <button
              type="button"
              onClick={logout}
              className="rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white transition hover:bg-opacity-90"
            >
              Çıkış
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
