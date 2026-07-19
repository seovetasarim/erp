"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";

type FilaSidebarContextValue = {
  open: boolean;
  toggle: () => void;
  setOpen: (open: boolean) => void;
};

const FilaSidebarContext = createContext<FilaSidebarContextValue | null>(null);

export function FilaSidebarProvider({ children }: PropsWithChildren) {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    document.body.classList.add("bg-body-bg");
    document.body.setAttribute(
      "sidebar-data-theme",
      open ? "sidebar-show" : "sidebar-hide",
    );
    return () => {
      document.body.classList.remove("bg-body-bg");
      document.body.removeAttribute("sidebar-data-theme");
    };
  }, [open]);

  const toggle = useCallback(() => setOpen((prev) => !prev), []);

  const value = useMemo(
    () => ({ open, toggle, setOpen }),
    [open, toggle],
  );

  return (
    <FilaSidebarContext.Provider value={value}>
      {children}
    </FilaSidebarContext.Provider>
  );
}

export function useFilaSidebar() {
  const ctx = useContext(FilaSidebarContext);
  if (!ctx) {
    throw new Error("useFilaSidebar must be used within FilaSidebarProvider");
  }
  return ctx;
}
