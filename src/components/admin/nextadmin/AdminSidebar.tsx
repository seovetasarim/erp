"use client";

import { cn } from "@/components/admin/nextadmin/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AdminLogo } from "./AdminLogo";
import {
  ArrowLeftIcon,
  HomeIcon,
  LicenseNavIcon,
  OrdersNavIcon,
  SubscriptionNavIcon,
  SupportNavIcon,
  UsersNavIcon,
} from "./icons";
import { MenuItem } from "./MenuItem";
import { useSidebarContext } from "./sidebar-context";

const NAV_DATA = [
  {
    label: "ANA MENÜ",
    items: [
      {
        title: "Genel Bakış",
        url: "/admin",
        icon: HomeIcon,
        exact: true,
      },
      {
        title: "Müşteriler",
        url: "/admin/musteriler",
        icon: UsersNavIcon,
      },
      {
        title: "Siparişler",
        url: "/admin/siparisler",
        icon: OrdersNavIcon,
      },
      {
        title: "Lisanslar",
        url: "/admin/lisanslar",
        icon: LicenseNavIcon,
      },
      {
        title: "Abonelikler",
        url: "/admin/abonelikler",
        icon: SubscriptionNavIcon,
      },
      {
        title: "Destek",
        url: "/admin/destek",
        icon: SupportNavIcon,
      },
    ],
  },
  {
    label: "SİTE",
    items: [
      {
        title: "Ana siteye dön",
        url: "/",
        icon: null,
      },
    ],
  },
];

function isNavActive(pathname: string, url: string, exact?: boolean) {
  if (exact) return pathname === url;
  return pathname === url || pathname.startsWith(`${url}/`);
}

export function AdminSidebar() {
  const pathname = usePathname();
  const { setIsOpen, isOpen, isMobile, toggleSidebar } = useSidebarContext();

  return (
    <>
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <aside
        className={cn(
          "shrink-0 overflow-hidden border-r border-gray-200 bg-white transition-[width] duration-200 ease-linear dark:border-gray-800 dark:bg-gray-dark",
          isMobile ? "fixed bottom-0 top-0 z-50" : "sticky top-0 h-screen w-[290px]",
          isMobile && (isOpen ? "w-[290px]" : "w-0"),
        )}
        aria-label="Yönetim menüsü"
        aria-hidden={isMobile && !isOpen}
      >
        <div className="flex h-full w-[290px] flex-col py-10 pl-[25px] pr-[7px]">
          <div className="relative pr-4.5">
            <AdminLogo
              href="/admin"
              onClick={() => isMobile && toggleSidebar()}
            />

            {isMobile && (
              <button
                type="button"
                onClick={toggleSidebar}
                className="absolute left-3/4 right-4.5 top-1/2 -translate-y-1/2 text-right"
              >
                <span className="sr-only">Menüyü kapat</span>
                <ArrowLeftIcon className="ml-auto size-7" />
              </button>
            )}
          </div>

          <div className="custom-scrollbar mt-6 flex-1 overflow-y-auto pr-3 min-[850px]:mt-10">
            {NAV_DATA.map((section) => (
              <div key={section.label} className="mb-6">
                <h2 className="mb-5 text-sm font-medium text-dark-4 dark:text-dark-6">
                  {section.label}
                </h2>
                <nav aria-label={section.label}>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item.url}>
                        <MenuItem
                          as="link"
                          href={item.url}
                          isActive={isNavActive(
                            pathname ?? "",
                            item.url,
                            "exact" in item ? item.exact : false,
                          )}
                        >
                          {item.icon ? (
                            <item.icon className="size-6 shrink-0" aria-hidden="true" />
                          ) : null}
                          <span>{item.title}</span>
                        </MenuItem>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
