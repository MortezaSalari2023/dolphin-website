
"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Layers3,
  Utensils,
  Users,
  Server,
  Lightbulb,
  ShoppingCart,
  ScanFace,
} from "lucide-react";

// اطلاعات محصولات گروه مهندسی دلفین
const products = [
  {
    title: "پلتفرم مرکزی و مدیریت اطلاعات دلفین",
    description: "مدیریت متمرکز اطلاعات و فرایندهای سازمانی در یک بستر یکپارچه.",
    icon: Layers3,
    href: "/products/central-platform",
  },
  {
    title: "اتوماسیون تغذیه",
    description: "راهکاری نرم‌افزاری برای مدیریت فرایندهای مرتبط با تغذیه سازمانی.",
    icon: Utensils,
    href: "/products/food-automation",
  },
  {
    title: "سیستم مدیریت خدمات رفاهی کارکنان",
    description: "مدیریت و سامان‌دهی خدمات رفاهی کارکنان سازمان.",
    icon: Users,
    href: "/products/welfare",
  },
  {
    title: "سامانه پایش شرایط اتاق سرور",
    description: "پایش شرایط محیطی و وضعیت زیرساخت اتاق سرور.",
    icon: Server,
    href: "/products/server-monitoring",
  },
  {
    title: "سامانه نظام پیشنهادات",
    description: "بستری برای ثبت، مدیریت و بررسی پیشنهادهای سازمانی.",
    icon: Lightbulb,
    href: "/products/suggestions",
  },
  {
    title: "سیستم خرید دلفین",
    description: "راهکار مدیریت فرایندهای خرید سازمانی و تأمین نیازمندی‌ها.",
    icon: ShoppingCart,
    href: "/products/procurement",
  },
  {
    title: "سیستم پلاک‌خوان هوشمند",
    description: "راهکار تشخیص پلاک و مدیریت هوشمند تردد خودروها.",
    icon: ScanFace,
    href: "/products/license-plate",
  },
];

export default function ProductsPage() {
  return (
    <main dir="rtl" className="min-h-screen overflow-hidden bg-[#070914] text-white">

      {/* هدر معرفی صفحه محصولات */}
      <section className="relative px-5 pb-20 pt-24 text-center sm:px-10 lg:pt-32">
        <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />

        <div className="relative mx-auto max-w-3xl">
          <span className="inline-flex rounded-full border border-violet-400/20 bg-violet-500/10 px-5 py-2 text-xs font-semibold tracking-wider text-violet-300">
            DOLPHIN PRODUCTS
          </span>

          <h1 className="mt-8 text-3xl font-black leading-relaxed sm:text-5xl">
            راهکارهای هوشمند
            <span className="block bg-gradient-to-l from-violet-300 to-blue-400 bg-clip-text text-transparent">
              برای سازمان‌های آینده
            </span>
          </h1>

          <p className="mt-6 text-sm leading-8 text-slate-400 sm:text-base">
            مجموعه‌ای از راهکارهای نرم‌افزاری دلفین برای مدیریت،
            هوشمندسازی و بهبود فرایندهای سازمانی.
          </p>
        </div>
      </section>

      {/* شبکه محصولات */}
      <section className="mx-auto max-w-[1440px] px-5 pb-28 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {products.map((product, index) => {
            const Icon = product.icon;

            return (

<Link
  key={product.href}
  href={product.href}
  className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-[#111522]/80 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/40 hover:bg-[#171a2b]"
>

                {/* نورپردازی پس‌زمینه کارت */}
                <div className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-violet-600/10 blur-[70px] transition-all duration-500 group-hover:bg-violet-500/25" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-violet-300 transition-all duration-500 group-hover:scale-110 group-hover:bg-violet-500/20">
                      <Icon size={27} strokeWidth={1.7} />
                    </div>

                    <span className="text-xs font-semibold tracking-widest text-slate-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h2 className="mt-8 text-lg font-bold leading-8 text-white">
                    {product.title}
                  </h2>

                  <p className="mt-4 min-h-16 text-sm leading-7 text-slate-400">
                    {product.description}
                  </p>

                  <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                    <span className="text-xs font-semibold text-violet-300">
                      راهکار سازمانی دلفین
                    </span>

                    <ArrowLeft
                      size={19}
                      className="text-slate-500 transition-all duration-300 group-hover:-translate-x-2 group-hover:text-violet-300"
                    />
                  </div>
                </div>
              </Link>
            );
          })}

        </div>
      </section>

    </main>
  );
}
