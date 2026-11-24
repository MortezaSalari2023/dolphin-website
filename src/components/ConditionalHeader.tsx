
"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/website/Header";

export default function ConditionalHeader() {
  // دریافت مسیر فعلی صفحه
  const pathname = usePathname();

  // در صفحات پورتال، هدر عمومی سایت نمایش داده نشود
  if (pathname.startsWith("/portal")) {
    return null;
  }

  // نمایش هدر در سایر صفحات سایت
  return <Header />;
}
