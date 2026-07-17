"use client";

import { useClickOutside } from "@/components/admin/nextadmin/hooks/use-click-outside";
import { cn } from "@/components/admin/nextadmin/lib/utils";
import {
  createContext,
  type PropsWithChildren,
  useContext,
  useEffect,
  useRef,
} from "react";

type DropdownContextType = {
  isOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
};

const DropdownContext = createContext<DropdownContextType | null>(null);

function useDropdownContext() {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("useDropdownContext must be used within a Dropdown");
  }
  return context;
}

export function Dropdown({
  children,
  isOpen,
  setIsOpen,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const triggerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement as HTMLElement;
      document.body.style.pointerEvents = "none";
    } else {
      document.body.style.removeProperty("pointer-events");
      setTimeout(() => triggerRef.current?.focus(), 0);
    }
  }, [isOpen]);

  return (
    <DropdownContext.Provider
      value={{
        isOpen,
        handleOpen: () => setIsOpen(true),
        handleClose: () => setIsOpen(false),
      }}
    >
      <div className="relative">{children}</div>
    </DropdownContext.Provider>
  );
}

export function DropdownContent({
  children,
  align = "center",
  className,
}: {
  align?: "start" | "end" | "center";
  className?: string;
  children: React.ReactNode;
}) {
  const { isOpen, handleClose } = useDropdownContext();
  const contentRef = useClickOutside<HTMLDivElement>(() => {
    if (isOpen) handleClose();
  });

  if (!isOpen) return null;

  return (
    <div
      ref={contentRef}
      role="menu"
      className={cn(
        "fade-in-0 zoom-in-95 pointer-events-auto absolute z-99 mt-2 min-w-32 origin-top-right rounded-lg",
        {
          "animate-in right-0": align === "end",
          "left-0": align === "start",
          "left-1/2 -translate-x-1/2": align === "center",
        },
        className,
      )}
    >
      {children}
    </div>
  );
}

export function DropdownTrigger({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { handleOpen, isOpen } = useDropdownContext();

  return (
    <button
      type="button"
      className={className}
      onClick={handleOpen}
      aria-expanded={isOpen}
      aria-haspopup="menu"
      {...props}
    >
      {children}
    </button>
  );
}

export function DropdownClose({ children }: PropsWithChildren) {
  const { handleClose } = useDropdownContext();
  return <div onClick={handleClose}>{children}</div>;
}
