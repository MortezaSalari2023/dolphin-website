
import ConditionalHeader from "@/components/ConditionalHeader";
import type { Metadata } from "next";
import "./globals.css";

// اطلاعات عمومی سایت برای مرورگر و موتورهای جست‌وجو
export const metadata: Metadata = {
  title: {
    default: "گروه مهندسی دلفین | DOLPHIN ENGINEERING GROUP",
    template: "%s | گروه مهندسی دلفین",
  },
  description:
    "گروه مهندسی دلفین؛ طراح و توسعه‌دهنده راهکارهای نرم‌افزاری و سامانه‌های سازمانی",
};

// ساختار اصلی تمام صفحات سایت
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        {/* هدر عمومی فقط در صفحات اصلی سایت */}
        <ConditionalHeader />

        {children}
      </body>
    </html>
  );
}
