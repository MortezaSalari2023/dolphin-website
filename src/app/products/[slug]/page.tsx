
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Layers3,
  Utensils,
  Users,
  Server,
  Lightbulb,
  ShoppingCart,
  ScanFace,
  CheckCircle2,
  Headset,
} from "lucide-react";

// ساختار اطلاعات هر محصول
const products = {
  "central-platform": {
    title: "پلتفرم مرکزی و مدیریت اطلاعات دلفین",
    englishTitle: "DOLPHIN CENTRAL PLATFORM",
    description:
      "مدیریت متمرکز اطلاعات و فرایندهای سازمانی در یک بستر یکپارچه برای افزایش هماهنگی، شفافیت و بهره‌وری سازمان.",
    icon: Layers3,
    features: [
      "مدیریت متمرکز اطلاعات سازمانی",
      "یکپارچه‌سازی فرایندهای سازمان",
      "دسترسی ساختاریافته به اطلاعات",
      "افزایش هماهنگی واحدهای سازمانی",
    ],
  },
  "food-automation": {
    title: "اتوماسیون تغذیه",
    englishTitle: "DOLPHIN FOOD AUTOMATION",
    description:
      "راهکاری نرم‌افزاری برای مدیریت هوشمند فرایندهای تغذیه سازمانی و سامان‌دهی خدمات مرتبط با غذا.",
    icon: Utensils,
    features: [
      "مدیریت خدمات تغذیه سازمان",
      "سامان‌دهی فرایندهای سفارش غذا",
      "مدیریت اطلاعات و گزارش‌ها",
      "بهبود کنترل و نظارت بر خدمات",
    ],
  },
  welfare: {
    title: "سیستم مدیریت خدمات رفاهی کارکنان",
    englishTitle: "DOLPHIN WELFARE MANAGEMENT",
    description:
      "راهکاری برای مدیریت و سامان‌دهی خدمات و امکانات رفاهی کارکنان در سازمان.",
    icon: Users,
    features: [
      "مدیریت خدمات رفاهی کارکنان",
      "سامان‌دهی درخواست‌های رفاهی",
      "مدیریت اطلاعات و سوابق",
      "بهبود فرایند ارائه خدمات",
    ],
  },
  "server-monitoring": {
    title: "سامانه پایش شرایط اتاق سرور",
    englishTitle: "DOLPHIN SERVER MONITORING",
    description:
      "راهکاری برای پایش شرایط محیطی و وضعیت زیرساخت اتاق سرور با هدف افزایش آگاهی از وضعیت تجهیزات.",
    icon: Server,
    features: [
      "پایش شرایط محیطی اتاق سرور",
      "بررسی وضعیت زیرساخت",
      "نمایش اطلاعات و وضعیت سامانه",
      "کمک به شناسایی شرایط غیرعادی",
    ],
  },
  suggestions: {
    title: "سامانه نظام پیشنهادات",
    englishTitle: "DOLPHIN SUGGESTION SYSTEM",
    description:
      "بستری برای ثبت، مدیریت و بررسی پیشنهادهای کارکنان با هدف تقویت مشارکت و بهبود مستمر سازمان.",
    icon: Lightbulb,
    features: [
      "ثبت پیشنهادهای سازمانی",
      "مدیریت و بررسی پیشنهادها",
      "پیگیری وضعیت پیشنهادها",
      "تقویت مشارکت کارکنان",
    ],
  },
  procurement: {
    title: "سیستم خرید دلفین",
    englishTitle: "DOLPHIN PROCUREMENT",
    description:
      "راهکاری برای مدیریت فرایندهای خرید سازمانی و سامان‌دهی تأمین نیازمندی‌های سازمان.",
    icon: ShoppingCart,
    features: [
      "مدیریت درخواست‌های خرید",
      "سامان‌دهی فرایند تأمین",
      "پیگیری مراحل خرید",
      "مدیریت اطلاعات و گزارش‌ها",
    ],
  },
  "license-plate": {
    title: "سیستم پلاک‌خوان هوشمند",
    englishTitle: "DOLPHIN SMART LICENSE PLATE",
    description:
      "راهکاری هوشمند برای تشخیص پلاک خودروها و مدیریت فرایندهای مرتبط با تردد وسایل نقلیه.",
    icon: ScanFace,
    features: [
      "تشخیص هوشمند پلاک خودرو",
      "مدیریت اطلاعات تردد",
      "ثبت و نگهداری سوابق",
      "سامان‌دهی فرایند کنترل تردد",
    ],
  },
};


// معرفی مسیرهای ثابت هفت محصول برای تولید صفحات
export function generateStaticParams() {
  return Object.keys(products).map((slug) => ({
    slug,
  }));
}

type ProductSlug = keyof typeof products;

// نمایش اطلاعات محصول بر اساس آدرس
export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // بررسی معتبر بودن شناسه محصول
  if (!Object.prototype.hasOwnProperty.call(products, slug)) {
    notFound();
  }

  const product = products[slug as ProductSlug];
  const Icon = product.icon;

  return (
    <main
      dir="rtl"
      className="min-h-screen overflow-hidden bg-[#070914] text-white"
    >
      {/* بخش معرفی محصول */}
      <section className="relative px-5 pb-24 pt-24 sm:px-10 lg:pb-32 lg:pt-36">
        <div className="pointer-events-none absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-600/15 blur-[120px]" />

        <div className="relative mx-auto max-w-6xl">
          <Link
            href="/products"
            className="mb-12 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
          >
            <ArrowRight size={18} />
            بازگشت به محصولات
          </Link>

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
            <Icon size={32} strokeWidth={1.7} />
          </div>

          <p className="mt-8 text-xs font-semibold tracking-widest text-blue-300">
            {product.englishTitle}
          </p>

          <h1 className="mt-5 max-w-4xl text-3xl font-black leading-relaxed sm:text-5xl">
            {product.title}
          </h1>

          <p className="mt-7 max-w-3xl text-sm leading-9 text-slate-400 sm:text-base">
            {product.description}
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-3 rounded-xl bg-gradient-to-l from-blue-600 to-blue-500 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-900/20 transition-all hover:-translate-y-1 hover:shadow-blue-700/30"
          >
            درخواست مشاوره
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* قابلیت‌های محصول */}
      <section className="mx-auto max-w-6xl px-5 pb-28 sm:px-10">
        <div className="rounded-3xl border border-white/10 bg-[#111522]/80 p-7 sm:p-10">
          <div className="flex items-center gap-3">
            <CheckCircle2 size={24} className="text-blue-300" />
            <h2 className="text-xl font-bold sm:text-2xl">
              قابلیت‌ها و امکانات
            </h2>
          </div>

          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            {product.features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 text-sm leading-7 text-slate-300"
              >
                <CheckCircle2
                  size={19}
                  className="shrink-0 text-blue-300"
                />
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* ارتباط با دلفین */}
        <div className="mt-8 flex flex-col items-start justify-between gap-6 rounded-3xl border border-orange-400/15 bg-gradient-to-l from-orange-500/10 to-[#111522] p-7 sm:flex-row sm:items-center sm:p-10">
          <div>
            <h2 className="text-xl font-bold">
              برای آشنایی بیشتر با این محصول آماده‌ایم
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              برای دریافت اطلاعات بیشتر و بررسی نیازهای سازمان خود با ما در ارتباط باشید.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-orange-400/30 bg-orange-500/10 px-6 py-3 text-sm font-semibold text-orange-200 transition-colors hover:bg-orange-500/20"
          >
            <Headset size={18} />
            ارتباط با ما
          </Link>
        </div>
      </section>
    </main>
  );
}
