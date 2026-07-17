"use client";

import { ChevronUpIcon } from "@na/assets/icons";
import {
  Dropdown,
  DropdownContent,
  DropdownTrigger,
} from "@na/components/ui/dropdown";
import { cn } from "@na/lib/utils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { LogOutIcon, UserIcon } from "./icons";

export function UserInfo() {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("admin");
  const router = useRouter();

  useEffect(() => {
    fetch("/api/admin/session")
      .then((res) => res.json())
      .then((data: { admin?: { username?: string } | null }) => {
        if (data.admin?.username) setUsername(data.admin.username);
      })
      .catch(() => undefined);
  }, []);

  async function handleLogout() {
    setIsOpen(false);
    const loadingId = toast.loading("Logging out...");

    try {
      await fetch("/api/admin/session", { method: "DELETE" });
      router.push("/admin/login");
      router.refresh();
      toast.success("Logged out successfully");
    } catch {
      toast.error("Failed to log out");
    } finally {
      toast.dismiss(loadingId);
    }
  }

  return (
    <Dropdown isOpen={isOpen} setIsOpen={setIsOpen}>
      <DropdownTrigger className="cursor-pointer rounded align-middle ring-primary ring-offset-2 outline-none focus-visible:ring-1 dark:ring-offset-gray-dark">
        <span className="sr-only">My Account</span>
        <figure className="flex items-center gap-3">
          <span className="flex size-12 items-center justify-center rounded-full border bg-gray-2 text-dark outline-none dark:border-dark-4 dark:bg-dark-2 dark:text-white">
            <UserIcon />
          </span>
          <figcaption className="flex items-center gap-1 font-medium text-dark max-[1024px]:sr-only dark:text-dark-6">
            <span className="max-w-24 truncate">{username}</span>
            <ChevronUpIcon
              aria-hidden
              className={cn("rotate-180 transition-transform", isOpen && "rotate-0")}
              strokeWidth={1.5}
            />
          </figcaption>
        </figure>
      </DropdownTrigger>

      <DropdownContent
        className="border border-stroke bg-white shadow-md min-[230px]:min-w-70 dark:border-dark-3 dark:bg-gray-dark"
        align="end"
      >
        <figure className="flex items-center gap-2.5 px-5 py-3.5">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-full border bg-gray-2 text-dark dark:border-dark-4 dark:bg-dark-2 dark:text-white">
            <UserIcon />
          </span>
          <figcaption className="space-y-1 text-base font-medium">
            <div className="mb-2 leading-none text-dark dark:text-white">{username}</div>
            <div className="w-full max-w-47.5 truncate leading-none text-gray-6">
              Administrator
            </div>
          </figcaption>
        </figure>

        <hr className="border-[#E8E8E8] dark:border-dark-3" />

        <div className="p-2 text-base text-[#4B5563] dark:text-dark-6">
          <button
            type="button"
            className="flex w-full cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2.25 ring-primary outline-0 hover:bg-gray-2 hover:text-dark focus-visible:ring-1 dark:hover:bg-dark-3 dark:hover:text-white"
            onClick={handleLogout}
          >
            <LogOutIcon />
            <span className="text-base font-medium">Log out</span>
          </button>
        </div>
      </DropdownContent>
    </Dropdown>
  );
}
