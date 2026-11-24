
"use client";

import { Suspense } from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/website/Header";

// بررسی مسیر فعلی و نمایش هدر
function HeaderContent() {
  // دریافت مسیر فعلی صفحه
  const pathname = usePathname();

  // در صفحات پورتال، هدر عمومی نمایش داده نشود
  if (pathname.startsWith("/portal")) {
    return null;
  }

  // نمایش هدر در سایر صفحات سایت
  return <Header />;
}

export default function ConditionalHeader() {
  return (
    // جلوگیری از خطای پیش‌رندر usePathname
    <Suspense fallback={null}>
      <HeaderContent />
    </Suspense>
  );
}
