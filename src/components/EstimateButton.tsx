"use client";

import { useState } from "react";
import EstimateModal from "@/components/EstimateModal";

interface EstimateButtonProps {
  className?: string;
  children: React.ReactNode;
}

export default function EstimateButton({ className, children }: EstimateButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className={className} onClick={() => setOpen(true)}>
        {children}
      </button>
      <EstimateModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
