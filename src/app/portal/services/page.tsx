
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpLeft,
  Package,
  Network,
  Utensils,
  Users,
  Server,
  Lightbulb,
  ShoppingCart,
  ScanFace,
  CheckCircle2,
  Clock3,
  Search,
  X,
  Headset,
  ChevronLeft,
  Sparkles,
} from "lucide-react";

// ساختار اطلاعات سرویس‌ها
type Service = {
  id: number;
  title: string;
  category: string;
  description: string;
  status: "فعال" | "در حال راه‌اندازی";
  icon: typeof Network;
  details: string[];
};

// اطلاعات نمونه سرویس‌های مشتری
const services: Service[] = [
  {
    id: 1,
    title: "پلتفرم مرکزی و مدیریت اطلاعات دلفین",
    category: "مدیریت سازمانی",
    description: "بستر یکپارچه برای مدیریت و ساماندهی اطلاعات سازمان.",
    status: "فعال",
    icon: Network,
    details: [
      "مدیریت متمرکز اطلاعات",
      "دسترسی یکپارچه به داده‌ها",
      "ساماندهی فرآیندهای سازمانی",
    ],
  },
  {
    id: 2,
    title: "اتوماسیون تغذیه",
    category: "خدمات رفاهی",
    description: "راهکار مدیریت و ساماندهی فرآیندهای تغذیه سازمان.",
    status: "فعال",
    icon: Utensils,
    details: [
      "مدیریت فرآیند تغذیه",
      "ساماندهی خدمات مرتبط",
      "مدیریت اطلاعات کاربران",
    ],
  },
  {
    id: 3,
    title: "سیستم مدیریت خدمات رفاهی کارکنان",
    category: "مدیریت منابع انسانی",
    description: "سامانه مدیریت خدمات رفاهی و امکانات کارکنان.",
    status: "در حال راه‌اندازی",
    icon: Users,
    details: [
      "مدیریت خدمات رفاهی",
      "ساماندهی اطلاعات کارکنان",
      "مدیریت درخواست‌های رفاهی",
    ],
  },
  {
    id: 4,
    title: "سامانه پایش شرایط اتاق سرور",
    category: "زیرساخت و مانیتورینگ",
    description: "راهکار پایش و نظارت بر شرایط محیطی اتاق سرور.",
    status: "فعال",
    icon: Server,
    details: [
      "پایش شرایط محیطی",
      "نمایش وضعیت زیرساخت",
      "نظارت بر شرایط اتاق سرور",
    ],
  },
  {
    id: 5,
    title: "سامانه نظام پیشنهادات",
    category: "مدیریت سازمانی",
    description: "بستر ثبت، بررسی و مدیریت پیشنهادهای سازمانی.",
    status: "در حال راه‌اندازی",
    icon: Lightbulb,
    details: [
      "ثبت پیشنهادها",
      "مدیریت فرآیند بررسی",
      "پیگیری وضعیت پیشنهادها",
    ],
  },
  {
    id: 6,
    title: "سیستم خرید دلفین",
    category: "خرید سازمانی",
    description: "راهکار مدیریت فرآیندهای خرید و تأمین سازمانی.",
    status: "فعال",
    icon: ShoppingCart,
    details: [
      "مدیریت فرآیند خرید",
      "ساماندهی درخواست‌های تأمین",
      "مدیریت اطلاعات خرید سازمانی",
    ],
  },
  {
    id: 7,
    title: "سیستم پلاک‌خوان هوشمند",
    category: "سیستم‌های هوشمند",
    description: "راهکار تشخیص پلاک و مدیریت کنترل تردد.",
    status: "در حال راه‌اندازی",
    icon: ScanFace,
    details: [
      "تشخیص پلاک خودرو",
      "مدیریت اطلاعات تردد",
      "کنترل دسترسی از طریق گیت",
    ],
  },
];

// صفحه سرویس‌های مشتری
export default function PortalServicesPage() {
  // جستجوی سرویس‌ها
  const [search, setSearch] = useState("");

  // فیلتر وضعیت سرویس‌ها
  const [filter, setFilter] = useState("همه");

  // سرویس انتخاب‌شده برای مشاهده جزئیات
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // اعمال فیلتر و جستجو
  const filteredServices = services.filter((service) => {
    const matchesSearch =
      service.title.includes(search) ||
      service.category.includes(search);

    const matchesFilter =
      filter === "همه" || service.status === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <main
      dir="rtl"
      className="relative min-h-screen overflow-hidden bg-[#070914] text-white"
    >
      {/* نورپردازی پس‌زمینه */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[130px]" />
        <div className="absolute -left-40 top-[650px] h-[400px] w-[400px] rounded-full bg-orange-500/10 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-5 py-10 sm:px-8 lg:px-12">

        {/* سربرگ صفحه */}
        <div className="mb-10">
          <Link
            href="/portal/dashboard"
            className="mb-7 inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-blue-400"
          >
            <ArrowUpLeft size={17} />
            بازگشت به داشبورد
          </Link>

          <div className="flex flex-wrap items-center justify-between gap-5">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-blue-400">
                <Sparkles size={15} />
                CUSTOMER SERVICES
              </div>

              <h1 className="mt-5 text-3xl font-black sm:text-4xl">
                سرویس‌های من
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-8 text-slate-400">
                در این بخش می‌توانید سرویس‌های اختصاصی خود را مشاهده
                و وضعیت هر یک را بررسی کنید.
              </p>
            </div>

            <div className="flex h-14 items-center gap-3 rounded-2xl border border-blue-400/20 bg-blue-500/10 px-5">
              <Package className="text-blue-400" size={23} />
              <div>
                <div className="text-2xl font-black">{services.length}</div>
                <div className="text-[10px] text-slate-400">
                  سرویس ثبت‌شده نمونه
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* آمار سرویس‌ها */}
        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-[#101525]/70 p-6">
            <div className="flex items-center gap-3 text-green-400">
              <CheckCircle2 size={22} />
              <span className="text-sm">سرویس‌های فعال</span>
            </div>
            <div className="mt-5 text-3xl font-black">
              {services.filter((s) => s.status === "فعال").length}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#101525]/70 p-6">
            <div className="flex items-center gap-3 text-orange-400">
              <Clock3 size={22} />
              <span className="text-sm">در حال راه‌اندازی</span>
            </div>
            <div className="mt-5 text-3xl font-black">
              {services.filter((s) => s.status === "در حال راه‌اندازی").length}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#101525]/70 p-6">
            <div className="flex items-center gap-3 text-blue-400">
              <Package size={22} />
              <span className="text-sm">مجموع سرویس‌ها</span>
            </div>
            <div className="mt-5 text-3xl font-black">
              {services.length}
            </div>
          </div>
        </div>

        {/* نوار جستجو و فیلتر */}
        <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#101525]/70 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-md">
            <Search
              size={19}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
            />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="جستجوی سرویس..."
              className="w-full rounded-xl border border-white/10 bg-[#070914] py-3.5 pr-12 pl-4 text-sm outline-none transition focus:border-blue-400/50"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {["همه", "فعال", "در حال راه‌اندازی"].map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`rounded-xl px-4 py-3 text-xs font-bold transition ${
                  filter === item
                    ? "bg-blue-600 text-white"
                    : "border border-white/10 bg-white/[0.03] text-slate-400 hover:bg-white/[0.07]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* کارت‌های سرویس‌ها */}
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            const isActive = service.status === "فعال";

            return (
              <article
                key={service.id}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#101525]/75 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/30"
              >
                {/* افکت نور کارت */}
                <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl opacity-0 transition group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-300 transition group-hover:scale-110">
                      <Icon size={27} />
                    </div>

                    <span
                      className={`rounded-full px-3 py-2 text-[11px] font-bold ${
                        isActive
                          ? "bg-green-500/10 text-green-400"
                          : "bg-orange-500/10 text-orange-400"
                      }`}
                    >
                      {service.status}
                    </span>
                  </div>

                  <div className="mt-8 text-xs font-bold text-blue-400">
                    {service.category}
                  </div>

                  <h2 className="mt-3 min-h-[56px] text-lg font-black leading-8">
                    {service.title}
                  </h2>

                  <p className="mt-4 min-h-[56px] text-sm leading-8 text-slate-400">
                    {service.description}
                  </p>

                  <div className="mt-7 border-t border-white/[0.07] pt-5">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="flex w-full items-center justify-between text-sm font-bold text-blue-400 transition hover:text-cyan-300"
                    >
                      مشاهده جزئیات
                      <ChevronLeft
                        size={18}
                        className="transition-transform group-hover:-translate-x-1"
                      />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* نتیجه خالی جستجو */}
        {filteredServices.length === 0 && (
          <div className="rounded-3xl border border-white/10 bg-[#101525]/70 px-6 py-20 text-center">
            <Search size={35} className="mx-auto text-slate-500" />
            <h3 className="mt-5 text-lg font-bold">
              سرویسی پیدا نشد
            </h3>
            <p className="mt-3 text-sm text-slate-500">
              عبارت جستجو یا فیلتر انتخاب‌شده را تغییر دهید.
            </p>
          </div>
        )}

        {/* ارتباط با پشتیبانی */}
<div className="mt-10 flex flex-col gap-5 rounded-3xl border border-blue-400/15 bg-gradient-to-l from-blue-950/50 to-orange-950/30 p-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
              <Headset size={24} />
            </div>
            <div>
              <h3 className="font-bold">به راهنمایی نیاز دارید؟</h3>
              <p className="mt-2 text-xs text-slate-400">
                برای دریافت اطلاعات بیشتر درباره سرویس‌ها با پشتیبانی ارتباط بگیرید.
              </p>
            </div>
          </div>

          <Link
            href="/portal/support"
            className="flex w-fit items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold transition hover:bg-blue-500"
          >
            ثبت درخواست پشتیبانی
            <ArrowLeft size={16} />
          </Link>
        </div>
      </div>

      {/* پنجره جزئیات سرویس */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/75 p-5 backdrop-blur-sm">
          <div className="relative my-auto w-full max-w-xl rounded-3xl border border-white/10 bg-[#101525] p-7 shadow-2xl sm:p-9">

            <button
              onClick={() => setSelectedService(null)}
              aria-label="بستن پنجره"
              className="absolute left-6 top-6 rounded-xl border border-white/10 p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
            >
              <X size={19} />
            </button>

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
              <selectedService.icon size={28} />
            </div>

            <div className="mt-7 text-xs font-bold text-blue-400">
              {selectedService.category}
            </div>

            <h2 className="mt-3 pl-8 text-2xl font-black leading-10">
              {selectedService.title}
            </h2>

            <p className="mt-5 text-sm leading-8 text-slate-400">
              {selectedService.description}
            </p>

            <div className="mt-8 border-t border-white/10 pt-7">
              <h3 className="font-bold">قابلیت‌ها و امکانات</h3>

              <div className="mt-5 space-y-4">
                {selectedService.details.map((detail) => (
                  <div key={detail} className="flex items-center gap-3 text-sm text-slate-300">
                    <CheckCircle2 size={17} className="shrink-0 text-blue-400" />
                    {detail}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
              <span className="text-xs text-slate-500">
                وضعیت سرویس: {selectedService.status}
              </span>

              <button
                onClick={() => setSelectedService(null)}
                className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold transition hover:bg-blue-500"
              >
                بستن
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
