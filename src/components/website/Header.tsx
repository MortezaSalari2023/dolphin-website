
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowUpLeft,
  ChevronDown,
  Menu,
  X,
  Layers3,
  Utensils,
  Building2,
  Server,
  Lightbulb,
  ShoppingCart,
  CarFront,
} from "lucide-react";


// تعریف ساختار اطلاعات هر محصول
const products = [
  {
    title: "پلتفرم مرکزی دلفین",
    description: "مدیریت یکپارچه اطلاعات و فرایندهای سازمانی",
    href: "/products/central-platform",
    icon: Layers3,
  },
  {
    title: "اتوماسیون تغذیه",
    description: "مدیریت هوشمند خدمات تغذیه سازمان",
    href: "/products/food-automation",
    icon: Utensils,
  },
  {
    title: "مدیریت خدمات رفاهی",
    description: "مدیریت خدمات و امکانات رفاهی کارکنان",
    href: "/products/welfare",
    icon: Building2,
  },
  {
    title: "پایش اتاق سرور",
    description: "پایش شرایط و زیرساخت اتاق سرور",
    href: "/products/server-monitoring",
    icon: Server,
  },
  {
    title: "نظام پیشنهادات",
    description: "مدیریت ایده‌ها و پیشنهادهای سازمانی",
    href: "/products/suggestions",
    icon: Lightbulb,
  },
  {
    title: "سیستم خرید سازمانی",
    description: "مدیریت فرایندهای خرید و تأمین سازمان",
    href: "/products/procurement",
    icon: ShoppingCart,
  },
  {
    title: "پلاک‌خوان هوشمند",
    description: "تشخیص پلاک و مدیریت تردد خودروها",
    href: "/products/license-plate",
    icon: CarFront,
  },
];

// لینک‌های اصلی هدر
const navigation = [
  { title: "صفحه اصلی", href: "/" },
  { title: "پروژه‌ها", href: "/projects" },
  { title: "درباره ما", href: "/about" },
  { title: "تماس با ما", href: "/contact" },
];

export default function Header() {
  // کنترل باز و بسته شدن منوها
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // بستن تمام منوها پس از انتخاب یک لینک
  const closeMenus = () => {
    setProductsOpen(false);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#080b18]/90 text-white shadow-lg shadow-black/10 backdrop-blur-2xl">
      <div className="mx-auto flex h-[82px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">

        {/* لوگوی رسمی دلفین */}
        <Link
          href="/"
          onClick={closeMenus}
          className="relative flex shrink-0 items-center"
          aria-label="صفحه اصلی گروه مهندسی دلفین"
        >
 <Image
  src="/brand/dolphin-logo.png"
  alt="لوگوی گروه مهندسی دلفین"
  width={80}
  height={80}
  priority
  className="!h-auto !w-[80px] object-contain"
/>
        </Link>

        {/* منوی دسکتاپ */}
        <nav className="hidden items-center gap-8 lg:flex">

          {navigation.slice(0, 1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition-colors hover:text-white"
            >
              {item.title}
            </Link>
          ))}

          {/* منوی بازشونده محصولات */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              type="button"
              onClick={() => setProductsOpen(!productsOpen)}
              aria-expanded={productsOpen}
              aria-controls="products-mega-menu"
              className={`flex items-center gap-2 text-sm transition-colors ${
                productsOpen ? "text-violet-300" : "text-slate-300 hover:text-white"
              }`}
            >
              محصولات
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  productsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* محتوای مگامنو */}
            <div
              id="products-mega-menu"
              className={`absolute right-1/2 top-full z-50 w-[720px] translate-x-1/2 pt-5 transition-all duration-300 ${
                productsOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible translate-y-3 opacity-0"
              }`}
            >
              <div className="rounded-2xl border border-white/10 bg-[#101529] p-6 shadow-2xl shadow-black/40">

                <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-base font-bold text-white">
                      راهکارهای نرم‌افزاری دلفین
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      مجموعه محصولات و راهکارهای سازمانی
                    </p>
                  </div>

                  <span className="rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs text-violet-300">
                    ۷ محصول
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {products.map((product) => {
                    const Icon = product.icon;

                    return (
                      <Link
                        key={product.href}
                        href={product.href}
                        onClick={closeMenus}
                        className="group flex items-start gap-3 rounded-xl border border-transparent p-3 transition-all duration-300 hover:border-violet-400/20 hover:bg-violet-400/[0.07]"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300 transition-all group-hover:bg-violet-500/20 group-hover:text-violet-200">
                          <Icon size={20} />
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-slate-200 transition-colors group-hover:text-white">
                            {product.title}
                          </p>
                          <p className="mt-1 text-xs leading-6 text-slate-500">
                            {product.description}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* سایر لینک‌های اصلی */}
          {navigation.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition-colors hover:text-white"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* دکمه ورود مشتریان در دسکتاپ */}
        <Link
          href="/login"
          className="hidden items-center gap-2 rounded-xl border border-violet-400/30 bg-violet-500/10 px-5 py-3 text-sm font-semibold text-violet-200 transition-all duration-300 hover:border-violet-400/60 hover:bg-violet-500/20 lg:flex"
        >
          ورود مشتریان
          <ArrowUpLeft size={16} />
        </Link>

        {/* دکمه منوی موبایل */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "بستن منو" : "باز کردن منو"}
          aria-expanded={mobileOpen}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 lg:hidden"
        >
          {mobileOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {/* منوی موبایل و تبلت */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-[#0b1020] transition-all duration-300 lg:hidden ${
          mobileOpen
            ? "max-h-[85vh] opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <nav className="max-h-[85vh] space-y-2 overflow-y-auto px-5 py-5">

          {navigation.slice(0, 1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenus}
              className="block rounded-xl px-4 py-3 text-sm text-slate-200 transition-colors hover:bg-white/5"
            >
              {item.title}
            </Link>
          ))}

          {/* بخش محصولات در منوی موبایل */}
          <div className="rounded-xl border border-white/10 bg-white/[0.03]">
            <button
              type="button"
              onClick={() => setProductsOpen(!productsOpen)}
              aria-expanded={productsOpen}
              className="flex w-full items-center justify-between px-4 py-3 text-sm text-slate-200"
            >
              محصولات
              <ChevronDown
                size={17}
                className={`transition-transform ${
                  productsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ${
                productsOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="space-y-1 px-3 pb-3">
                  {products.map((product) => {
                    const Icon = product.icon;

                    return (
                      <Link
                        key={product.href}
                        href={product.href}
                        onClick={closeMenus}
                        className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-slate-300 transition-colors hover:bg-violet-500/10 hover:text-white"
                      >
                        <Icon size={17} className="text-violet-300" />
                        {product.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* لینک‌های دیگر */}
          {navigation.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenus}
              className="block rounded-xl px-4 py-3 text-sm text-slate-200 transition-colors hover:bg-white/5"
            >
              {item.title}
            </Link>
          ))}

          {/* ورود مشتریان در موبایل */}
          <Link
            href="/login"
            onClick={closeMenus}
            className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-violet-400/30 bg-violet-500/10 px-4 py-4 text-sm font-semibold text-violet-200"
          >
            ورود مشتریان
            <ArrowUpLeft size={17} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
