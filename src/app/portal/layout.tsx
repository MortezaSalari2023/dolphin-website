
import type { ReactNode } from "react";
import PortalThemeProvider from "@/components/website/PortalThemeProvider";

export default function PortalLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <PortalThemeProvider>
      {/* محدوده اختصاصی صفحات پورتال مشتریان */}
      <div className="portal-shell" dir="rtl">
        {children}
      </div>
    </PortalThemeProvider>
  );
}
