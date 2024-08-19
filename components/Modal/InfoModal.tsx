"use client";
import { useCallback, useRef, useEffect, MouseEventHandler } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

type InfoModalProps = {
  children: React.ReactNode;
  className?: string;
};

const InfoModal = ({ children, className }: InfoModalProps) => {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper]
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  return (
    <div
      ref={overlay}
      className={
        "fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60 p-10"
      }
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className={cn(
          "absolute bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10/12 p-6 rounded",
          className
        )}
      >
        <div className="w-full flex justify-end">
          <X onClick={onDismiss} className="cursor-pointer" />
        </div>
        {children}
      </div>
    </div>
  );
};

export default InfoModal;
