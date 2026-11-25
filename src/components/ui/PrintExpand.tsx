"use client";

import { useEffect } from "react";

// Opens every collapsed <details> before printing so the printout shows all content.
export default function PrintExpand() {
  useEffect(() => {
    const openAll = () => {
      document.querySelectorAll("details:not([open])").forEach((details) => {
        details.setAttribute("open", "");
      });
    };
    window.addEventListener("beforeprint", openAll);
    return () => window.removeEventListener("beforeprint", openAll);
  }, []);

  return null;
}
