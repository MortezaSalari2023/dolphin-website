
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Package,
  Headset,
  Bell,
  UserRound,
  Settings,
  LogOut,
  Menu,
  X,
  ArrowLeft,
  CheckCircle2,
  Clock3,
  MessageSquare,
  Activity,
  ShieldCheck,
  ChevronLeft,
} from "lucide-react";


// آیتم‌های منوی کناری پورتال
const menuItems = [
  { title: "داشبورد", icon: LayoutDashboard, href: "/portal/dashboard" },
  { title: "سرویس‌های من", icon: Package, href: "/portal/services" },
  { title: "درخواست‌های پشتیبانی", icon: Headset, href: "/portal/support" },
  { title: "اطلاعیه‌ها", icon: Bell, href: "#announcements" },
  { title: "پروفایل کاربری", icon: UserRound, href: "/portal/profile" },
  { title: "تنظیمات", icon: Settings, href: "/portal/settings" },
];


// اطلاعات نمایشی سرویس‌ها
const services = [
  {
    name: "سامانه مدیریت اطلاعات",
    description: "سرویس مدیریت و یکپارچه‌سازی اطلاعات",
    status: "فعال",
    icon: Activity,
  },
  {
    name: "اتوماسیون سازمانی",
    description: "خدمات اتوماسیون و مدیریت فرآیندها",
    status: "فعال",
    icon: Package,
  },
  {
    name: "پشتیبانی فنی",
    description: "خدمات پشتیبانی و پاسخگویی",
    status: "در حال پیگیری",
    icon: Headset,
  },
];

// صفحه داشبورد مشتریان
export default function PortalDashboardPage() {
  // باز و بسته کردن منوی موبایل
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // بخش انتخاب‌شده در منو
  const [activeMenu, setActiveMenu] = useState("داشبورد");

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#070914] text-white"
    >
      <div className="flex min-h-screen">

        {/* منوی کناری دسکتاپ */}
        <aside className="hidden w-[270px] shrink-0 border-l border-white/10 bg-[#0c1120] p-6 lg:flex lg:flex-col">
          <Link href="/" className="mb-12 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
              <ShieldCheck size={25} />
            </div>
            <div>
              <div className="font-black">DOLPHIN</div>
              <div className="mt-1 text-[10px] tracking-widest text-slate-500">
                CUSTOMER PORTAL
              </div>
            </div>
          </Link>

          <div className="mb-4 text-xs font-bold text-slate-600">
            منوی اصلی
          </div>

          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              

              return (
  
<Link
  key={item.title}
  href={item.href}
  onClick={() => setActiveMenu(item.title)}
  className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3.5 text-sm font-medium transition-all duration-200 ${
   activeMenu === item.title
      ? "border-blue-300/15 bg-blue-400/15 text-blue-300 shadow-inner"
      : "border-transparent text-slate-400 hover:border-blue-300/10 hover:bg-blue-400/[0.07] hover:text-white"
  }`}
>
  <Icon size={19} />
  {item.title}
</Link>

              );
            })}
          </nav>

          <div className="mt-auto border-t border-white/10 pt-6">
            <Link
              href="/portal"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-red-400 transition hover:bg-red-500/10"
            >
              <LogOut size={19} />
              خروج از پورتال
            </Link>

            <p className="mt-6 text-center text-[10px] text-slate-600">
              © Dolphin Engineering Group
            </p>
          </div>
        </aside>

        {/* منوی موبایل */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
{/* پس‌زمینه تاریک پشت منوی موبایل */}
<button
  aria-label="بستن منو"
  onClick={() => setMobileMenuOpen(false)}
  className="absolute inset-0 h-full w-full bg-black/60 backdrop-blur-sm"
/>

<aside className="absolute right-0 top-0 flex h-full w-[280px] max-w-[85vw] flex-col border-l border-blue-300/15 bg-gradient-to-b from-[#172d4b] via-[#142641] to-[#10213a] p-6 shadow-[-15px_0_50px_rgba(0,0,0,0.3)]">
              <div className="mb-10 flex items-center justify-between">
              <span className="font-black tracking-wide text-blue-100">
  DOLPHIN PORTAL
</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="بستن منو"
                >
                  <X size={23} />
                </button>
              </div>

              <nav className="space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                 

                  return (
                    
<Link
  key={item.title}
  href={item.href}
onClick={() => {
  setActiveMenu(item.title);
  setMobileMenuOpen(false);
}}
  className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3.5 text-sm font-medium transition-all duration-200 ${
   activeMenu === item.title
      ? "border-blue-300/15 bg-blue-400/15 text-blue-300 shadow-inner"
      : "border-transparent text-slate-400 hover:border-blue-300/10 hover:bg-blue-400/[0.07] hover:text-white"
  }`}
>
  <Icon size={19} />
  {item.title}
</Link>

                  );
                })}
              </nav>

              <Link
                href="/portal"
                className="mt-auto flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-red-400"
              >
                <LogOut size={19} />
                خروج از پورتال
              </Link>
            </aside>
          </div>
        )}

        {/* محتوای اصلی */}
        <section className="min-w-0 flex-1">

          {/* نوار بالای داشبورد */}
          <header className="sticky top-0 z-30 flex h-[76px] items-center justify-between border-b border-white/10 bg-[#070914]/90 px-5 backdrop-blur-xl sm:px-8 lg:px-10">

            <div className="flex items-center gap-4">
              <button
                onClick={() => setMobileMenuOpen(true)}
                aria-label="باز کردن منو"
                className="rounded-lg p-2 text-slate-400 hover:bg-white/5 lg:hidden"
              >
                <Menu size={23} />
              </button>

              <div>
                <h1 className="text-lg font-black">
                  {activeMenu}
                </h1>
                <p className="mt-1 hidden text-xs text-slate-500 sm:block">
                  پورتال اختصاصی مشتریان دلفین
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                aria-label="اطلاعیه‌ها"
                onClick={() => setActiveMenu("اطلاعیه‌ها")}
                className="relative rounded-xl border border-white/10 p-3 text-slate-400 transition hover:bg-white/5 hover:text-white"
              >
                <Bell size={19} />
                <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-blue-400" />
              </button>

              <div className="flex items-center gap-3 border-r border-white/10 pr-4">
                <div className="hidden text-left sm:block">
                  <p className="text-sm font-bold">مشتری دلفین</p>
                  <p className="mt-1 text-[10px] text-slate-500">
                    حساب کاربری
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
                  <UserRound size={21} />
                </div>
              </div>
            </div>
          </header>

          {/* بخش محتوای داشبورد */}
          <div className="mx-auto max-w-[1500px] p-5 sm:p-8 lg:p-10">

            {/* پیام خوشامدگویی */}
            <div className="relative mb-8 overflow-hidden rounded-3xl border border-blue-300/20 bg-gradient-to-l from-[#24476f] via-[#1b3658] to-[#172c49] p-7 shadow-[0_15px_45px_rgba(0,0,0,0.15)] sm:p-10">
              <div className="absolute -left-10 -top-20 h-64 w-64 rounded-full bg-blue-500/15 blur-3xl" />

              <div className="relative">
                <div className="text-xs font-bold tracking-widest text-blue-300">
                  WELCOME TO DOLPHIN
                </div>

                <h2 className="mt-5 text-2xl font-black sm:text-3xl">
                  به پورتال مشتریان دلفین خوش آمدید
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-8 text-slate-400">
                  از این بخش می‌توانید سرویس‌های اختصاصی، درخواست‌های پشتیبانی
                  و اطلاعیه‌های مرتبط با حساب کاربری خود را مدیریت کنید.
                </p>
              </div>
            </div>

            {/* کارت‌های آماری */}
            <div className="mb-10 grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
              {[
                {
                  title: "سرویس‌های فعال",
                  value: "۲",
                  icon: Package,
                  color: "text-blue-400",
                  bg: "bg-blue-500/10",
                },
                {
                  title: "درخواست‌های پشتیبانی",
                  value: "۱",
                  icon: Headset,
                  color: "text-purple-400",
                  bg: "bg-purple-500/10",
                },
                {
                  title: "درخواست‌های در انتظار",
                  value: "۱",
                  icon: Clock3,
                  color: "text-orange-400",
                  bg: "bg-orange-500/10",
                },
                {
                  title: "درخواست‌های پاسخ داده شده",
                  value: "۳",
                  icon: CheckCircle2,
                  color: "text-green-400",
                  bg: "bg-green-500/10",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}

className="group relative overflow-hidden rounded-2xl border border-blue-300/10 bg-gradient-to-br from-[#203b60]/90 via-[#172d4b]/95 to-[#12233d]/95 p-4 sm:p-6 shadow-[0_10px_35px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-300/30 hover:shadow-[0_16px_40px_rgba(20,100,190,0.16)]"
                  >
                    {/* هاله نوری ظریف داخل کارت آماری */}
<div className="pointer-events-none absolute -left-10 -top-12 h-32 w-32 rounded-full bg-blue-400/[0.08] blur-3xl transition-all duration-500 group-hover:bg-blue-400/[0.16]" />
                    <div className="flex items-center justify-between">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.bg} ${item.color}`}>
                        <Icon size={23} />
                      </div>
                      <ChevronLeft size={18} className="text-slate-600" />
                    </div>

                    <div className="mt-6 text-3xl font-black">
                      {item.value}
                    </div>

                    <p className="mt-2 text-sm text-slate-500">
                      {item.title}
                    </p>
                  </div>
                );
              })}
            </div>


{/* سرویس‌های من */}
<div className="group relative mb-10 overflow-hidden rounded-3xl border border-blue-200/10 bg-gradient-to-br from-[#1d3657]/90 via-[#172d4b]/95 to-[#142641]/95 p-6 shadow-[0_12px_35px_rgba(0,0,0,0.12)] sm:p-8">

  {/* هاله نوری پس‌زمینه کارت */}
  <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-blue-400/[0.07] blur-3xl" />

  {/* عنوان و دکمه مشاهده همه */}
  <div className="relative mb-8 flex flex-wrap items-center justify-between gap-4">
    <div>
      <h2 className="text-xl font-black text-white">
        سرویس‌های من
      </h2>
      <p className="mt-2 text-xs text-slate-400">
        وضعیت سرویس‌های اختصاصی حساب کاربری
      </p>
    </div>

<Link
  href="/portal/services"
  className="flex items-center gap-2 text-sm font-bold text-blue-300 transition hover:text-cyan-300"
>
  مشاهده همه
  <ArrowLeft size={16} />
</Link>
  </div>

  {/* فهرست سرویس‌ها */}
  <div className="relative space-y-4">
    {services.map((service) => {
      const Icon = service.icon;
      const isActive = service.status === "فعال";

      return (
        <div
          key={service.name}
         className="group/item flex flex-row items-center justify-between gap-3 rounded-2xl border border-blue-200/10 bg-gradient-to-l from-[#203b60]/75 via-[#1b3454]/80 to-[#172d4b]/90 p-3 transition-all duration-300 hover:border-blue-300/25 hover:shadow-[0_10px_30px_rgba(30,110,200,0.12)] sm:gap-4 sm:p-5"
        >
          {/* آیکون و مشخصات سرویس */}
          <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-300/15 bg-gradient-to-br from-blue-400/20 to-blue-600/10 text-blue-300 shadow-inner transition-all duration-300 group-hover/item:border-blue-300/30 group-hover/item:from-blue-400/30 group-hover/item:to-blue-600/20">
              <Icon size={23} />
            </div>

            <div className="min-w-0">
              <h3 className="font-bold text-white">
                {service.name}
              </h3>

              <p className="mt-2 text-xs leading-6 text-slate-400">
                {service.description}
              </p>
            </div>
          </div>

          {/* وضعیت سرویس */}
          <div
            className={`flex w-fit shrink-0 items-center gap-2 rounded-full border px-2.5 py-1.5 sm:px-4 sm:py-2 text-xs font-bold ${
              isActive
                ? "border-green-400/15 bg-green-500/10 text-green-400"
                : "border-orange-400/15 bg-orange-500/10 text-orange-400"
            }`}
          >
            <span className="h-2 w-2 rounded-full bg-current" />
            {service.status}
          </div>
        </div>
      );
    })}
  </div>
</div>


            {/* بخش پایین داشبورد */}
            <div className="grid gap-6 xl:grid-cols-2">

              {/* درخواست‌های اخیر */}
              <div 
className="group relative overflow-hidden rounded-3xl border border-blue-200/10 bg-gradient-to-br from-[#1d3657]/90 via-[#172d4b]/95 to-[#142641]/95 p-4 sm:p-6 lg:p-8 shadow-[0_12px_35px_rgba(0,0,0,0.12)] transition-all duration-300 hover:border-blue-300/20"
>
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-black">
                    درخواست‌های اخیر
                  </h2>

                  <MessageSquare size={21} className="text-blue-400" />
                </div>

                <div className="mt-7 space-y-5">
                  <div className="flex items-start justify-between gap-4 border-b border-blue-200/10 pb-5">
                    <div>
                      <h3 className="text-sm font-bold">
                        درخواست بررسی سرویس
                      </h3>
                      <p className="mt-2 text-xs text-slate-500">
                        شماره درخواست: ۱۰۰۱
                      </p>
                    </div>

                    <span className="shrink-0 rounded-full bg-orange-500/10 px-3 py-2 text-xs text-orange-400">
                      در حال بررسی
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-sm font-bold">
                        درخواست پشتیبانی فنی
                      </h3>
                      <p className="mt-2 text-xs text-slate-500">
                        شماره درخواست: ۱۰۰۲
                      </p>
                    </div>

                    <span className="shrink-0 rounded-full bg-green-500/10 px-3 py-2 text-xs text-green-400">
                      پاسخ داده شده
                    </span>
                  </div>
                </div>

 <Link
  href="/portal/support"
  className="mt-7 flex items-center gap-2 text-sm font-bold text-blue-400 transition hover:text-cyan-300"
>
  مشاهده درخواست‌ها
  <ArrowLeft size={16} />
</Link>
              </div>

{/* اطلاعیه‌ها */}
<div
  id="announcements"
  className="rounded-3xl border border-white/10 bg-[#101525]/70 p-4 sm:p-6 lg:p-8"
>
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-black">
                    اطلاعیه‌ها
                  </h2>

                  <Bell size={21} className="text-purple-400" />
                </div>

                <div 
className="relative mb-8 overflow-hidden rounded-3xl border border-blue-300/20 bg-gradient-to-l from-[#24476f] via-[#1b3658] to-[#172c49] p-5 shadow-[0_15px_45px_rgba(0,0,0,0.15)] sm:p-7 lg:p-10"
>
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-400">
                    <span className="h-2 w-2 rounded-full bg-blue-400" />
                    اطلاعیه سامانه
                  </div>

                  <h3 className="mt-4 text-sm font-bold">
                    به پورتال مشتریان دلفین خوش آمدید
                  </h3>

                  <p className="mt-3 text-xs leading-7 text-slate-400">
                    این بخش برای نمایش اخبار و اطلاعیه‌های مرتبط با سرویس‌های
                    اختصاصی شما در نظر گرفته شده است.
                  </p>
                </div>

                <button
                  onClick={() => setActiveMenu("اطلاعیه‌ها")}
                  className="mt-7 flex items-center gap-2 text-sm font-bold text-blue-400"
                >
                  مشاهده اطلاعیه‌ها
                  <ArrowLeft size={16} />
                </button>
              </div>
            </div>

            {/* پشتیبانی */}
            <div className="mt-8 flex flex-col justify-between gap-5 rounded-2xl border border-blue-300/15 bg-gradient-to-l from-[#24476f]/90 via-[#1b3658]/95 to-[#172c49]/95 p-6 shadow-[0_10px_35px_rgba(0,0,0,0.12)] transition-all duration-300 hover:border-blue-300/25 sm:flex-row sm:items-center">
              <div>
                <h3 className="font-bold">به راهنمایی نیاز دارید؟</h3>
                <p className="mt-2 text-xs leading-7 text-slate-500">
                  تیم پشتیبانی دلفین برای پاسخگویی به شما آماده است.
                </p>
              </div>

              <Link
                href="/contact"
                className="flex w-fit items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold transition hover:bg-blue-500"
              >
                ارتباط با پشتیبانی
                <ArrowLeft size={16} />
              </Link>
            </div>

          </div>
        </section>
      </div>
    </main>
  );
}
