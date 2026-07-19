"use client";

import { useIsMobile } from "@/components/admin/nextadmin/hooks/use-mobile";
import { createContext, useContext, useEffect, useState } from "react";

type SidebarContextType = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = createContext<SidebarContextType | null>(null);

export function useSidebarContext() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebarContext must be used within a SidebarProvider");
  }
  return context;
}

export function SidebarProvider({
  children,
  defaultOpen = true,
}: {
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const isMobile = useIsMobile();

  useEffect(() => {
    setIsOpen(!isMobile);
  }, [isMobile]);

  return (
    <SidebarContext.Provider
      value={{
        isOpen,
        setIsOpen,
        isMobile,
        toggleSidebar: () => setIsOpen((prev) => !prev),
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}
