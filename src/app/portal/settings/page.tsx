
"use client";

import { useEffect, useState } from "react";
import { usePortalTheme } from "@/components/website/PortalThemeProvider"
import Link from "next/link";
import {
  ArrowRight,
  Settings,
  Bell,
  Mail,
  MessageSquare,
  ShieldCheck,
  Monitor,
  Moon,
  Sun,
  Globe,
  Save,
  RotateCcw,
  LockKeyhole,
  Smartphone,
  Info,
} from "lucide-react";

// ساختار تنظیمات قابل ذخیره
type SettingsState = {
  emailNotifications: boolean;
  supportNotifications: boolean;
  systemNotifications: boolean;
  securityNotifications: boolean;
  theme: "dark" | "light";
  language: "fa" | "en";
  loginAlerts: boolean;
};

const defaultSettings: SettingsState = {
  emailNotifications: true,
  supportNotifications: true,
  systemNotifications: true,
  securityNotifications: true,
  theme: "dark",
  language: "fa",
  loginAlerts: true,
};

export default function SettingsPage() {
  const [settings, setSettings] = useState<SettingsState>(defaultSettings);
  const [isLoaded, setIsLoaded] = useState(false);
  const [message, setMessage] = useState("");

  // دریافت پوسته فعال و امکان تغییر آن در تمام پورتال
const { theme, setTheme } = usePortalTheme();

  // دریافت تنظیمات ذخیره‌شده پس از بارگذاری صفحه
  useEffect(() => {
    try {
      const savedSettings = localStorage.getItem("dolphin-portal-settings");

      if (savedSettings) {
        const parsed = JSON.parse(savedSettings);

        // فقط مقادیر معتبر تنظیمات پذیرفته می‌شوند
        setSettings({
          ...defaultSettings,
          ...parsed,
        });
      }
    } catch {
      // در صورت خراب بودن اطلاعات ذخیره‌شده، تنظیمات پیش‌فرض حفظ می‌شوند
      setSettings(defaultSettings);
    }

    setIsLoaded(true);
  }, []);

  // تغییر یک گزینه از تنظیمات
  function updateSetting<K extends keyof SettingsState>(
    key: K,
    value: SettingsState[K]
  ) {
    setSettings((previous) => ({
      ...previous,
      [key]: value,
    }));

    setMessage("");
  }

  // ذخیره تنظیمات در حافظه مرورگر
  function handleSave() {
    try {
      localStorage.setItem(
        "dolphin-portal-settings",
        JSON.stringify(settings)
      );

      setMessage("تنظیمات با موفقیت در این مرورگر ذخیره شدند.");
    } catch {
      setMessage("ذخیره تنظیمات امکان‌پذیر نیست.");
    }
  }

  // بازگرداندن تمام گزینه‌ها به حالت اولیه
  function handleReset() {
    setSettings(defaultSettings);
    localStorage.removeItem("dolphin-portal-settings");
    setMessage("تنظیمات به حالت پیش‌فرض بازگشتند.");
  }

  if (!isLoaded) {
    return (
      <main
        dir="rtl"
        className="flex min-h-screen items-center justify-center bg-[#070914] text-white"
      >
        <div className="animate-pulse text-sm text-slate-400">
          در حال بارگذاری تنظیمات...
        </div>
      </main>
    );
  }

  

  return (
    <main
      dir="rtl"
      className="relative min-h-screen overflow-hidden bg-[#070914] text-white"
    >
      {/* نورپردازی پس‌زمینه */}
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[130px]" />
      <div className="pointer-events-none absolute -left-40 top-[500px] h-96 w-96 rounded-full bg-purple-600/10 blur-[130px]" />

      <div className="relative mx-auto max-w-5xl px-5 py-8 sm:px-8 lg:px-12 lg:py-12">

        {/* عنوان صفحه */}
        <div className="mb-10">
          <Link
            href="/portal/dashboard"
            className="mb-7 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-blue-300"
          >
            <ArrowRight size={17} />
            بازگشت به داشبورد
          </Link>

          <div className="flex items-center gap-4">
            <div className="rounded-2xl border border-blue-400/20 bg-blue-500/10 p-3.5 text-blue-400">
              <Settings size={26} />
            </div>

            <div>
              <h1 className="text-3xl font-black sm:text-4xl">
                تنظیمات حساب
              </h1>
              <p className="mt-2 text-sm text-slate-400">
                مدیریت اعلان‌ها، ظاهر و امنیت حساب کاربری
              </p>
            </div>
          </div>
        </div>

        {/* پیام نتیجه عملیات */}
        {message && (
          <div className="mb-6 rounded-xl border border-blue-400/20 bg-blue-500/10 px-5 py-4 text-sm leading-7 text-blue-200">
            {message}
          </div>
        )}

        {/* تنظیمات اعلان‌ها */}
        <section className="mb-6 rounded-2xl border border-white/10 bg-white/[0.035] p-6 sm:p-8">
          <div className="mb-7 flex items-center gap-3">
            <div className="rounded-xl bg-blue-500/10 p-3 text-blue-400">
              <Bell size={22} />
            </div>

            <div>
              <h2 className="font-bold">مدیریت اعلان‌ها</h2>
              <p className="mt-1 text-xs text-slate-500">
                انتخاب کنید چه اعلان‌هایی برای شما فعال باشند.
              </p>
            </div>
          </div>

          <div className="divide-y divide-white/[0.07]">
            <SettingToggle
              icon={<Mail size={19} />}
              title="اعلان‌های ایمیلی"
              description="دریافت اعلان‌های سامانه از طریق ایمیل"
              checked={settings.emailNotifications}
              onChange={(value) => updateSetting("emailNotifications", value)}
            />

            <SettingToggle
              icon={<MessageSquare size={19} />}
              title="اعلان‌های پشتیبانی"
              description="اطلاع از پاسخ کارشناسان و تغییر وضعیت درخواست‌ها"
              checked={settings.supportNotifications}
              onChange={(value) => updateSetting("supportNotifications", value)}
            />

            <SettingToggle
              icon={<Monitor size={19} />}
              title="اعلان‌های سامانه"
              description="اطلاع از اطلاعیه‌ها و تغییرات سرویس‌ها"
              checked={settings.systemNotifications}
              onChange={(value) => updateSetting("systemNotifications", value)}
            />

            <SettingToggle
              icon={<ShieldCheck size={19} />}
              title="اعلان‌های امنیتی"
              description="اطلاع از رویدادهای امنیتی حساب کاربری"
              checked={settings.securityNotifications}
              onChange={(value) => updateSetting("securityNotifications", value)}
            />
          </div>
        </section>

        {/* تنظیمات ظاهر و زبان */}
        <section className="mb-6 rounded-2xl border border-white/10 bg-white/[0.035] p-6 sm:p-8">
          <div className="mb-7 flex items-center gap-3">
            <div className="rounded-xl bg-purple-500/10 p-3 text-purple-400">
              <Monitor size={22} />
            </div>

            <div>
              <h2 className="font-bold">ظاهر و زبان سامانه</h2>
              <p className="mt-1 text-xs text-slate-500">
                تنظیم نحوه نمایش محیط کاربری
              </p>
            </div>
          </div>

          <div className="mb-7">
            <label className="mb-3 block text-sm font-semibold text-slate-300">
              پوسته ظاهری
            </label>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <button
                onClick={() => {
  updateSetting("theme", "dark");
  setTheme("dark");
}}
                className={`flex items-center gap-4 rounded-xl border p-4 text-right transition ${
                  settings.theme === "dark"
                    ? "border-blue-500/50 bg-blue-500/10"
                    : "border-white/10 bg-[#080d19] hover:border-white/20"
                }`}
              >
                <div className="rounded-xl bg-slate-800 p-3 text-blue-300">
                  <Moon size={21} />
                </div>

                <div>
                  <p className="text-sm font-bold">حالت تاریک</p>
                  <p className="mt-1 text-xs text-slate-500">
                    مناسب محیط‌های کم‌نور
                  </p>
                </div>

                {settings.theme === "dark" && (
                  <span className="mr-auto text-xs text-blue-400">
                    انتخاب شده
                  </span>
                )}
              </button>

              <button
                onClick={() => {
  updateSetting("theme", "light");
  setTheme("light");
}}
                className={`flex items-center gap-4 rounded-xl border p-4 text-right transition ${
                  settings.theme === "light"
                    ? "border-blue-500/50 bg-blue-500/10"
                    : "border-white/10 bg-[#080d19] hover:border-white/20"
                }`}
              >
                <div className="rounded-xl bg-amber-400/10 p-3 text-amber-300">
                  <Sun size={21} />
                </div>

                <div>
                  <p className="text-sm font-bold">حالت روشن</p>
                  <p className="mt-1 text-xs text-slate-500">
                    محیط روشن و کلاسیک
                  </p>
                </div>

                {settings.theme === "light" && (
                  <span className="mr-auto text-xs text-blue-400">
                    انتخاب شده
                  </span>
                )}
              </button>
            </div>
          </div>

          <div>
            <label className="mb-3 block text-sm font-semibold text-slate-300">
              زبان سامانه
            </label>

            <div className="relative">
              <Globe
                size={18}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <select
                value={settings.language}
                onChange={(event) =>
                  updateSetting("language", event.target.value as "fa" | "en")
                }
                className="w-full appearance-none rounded-xl border border-white/10 bg-[#080d19] py-3.5 pr-12 pl-4 text-sm text-slate-300 outline-none focus:border-blue-500/50"
              >
                <option value="fa">فارسی</option>
                <option value="en">English</option>
              </select>
            </div>

            <p className="mt-2 text-xs text-slate-500">
              انتخاب زبان در این نسخه ذخیره می‌شود؛ تغییر واقعی زبان رابط کاربری هنوز پیاده‌سازی نشده است.
            </p>
          </div>
        </section>

        {/* تنظیمات امنیت و حریم خصوصی */}
        <section className="mb-6 rounded-2xl border border-white/10 bg-white/[0.035] p-6 sm:p-8">
          <div className="mb-7 flex items-center gap-3">
            <div className="rounded-xl bg-emerald-500/10 p-3 text-emerald-400">
              <LockKeyhole size={22} />
            </div>

            <div>
              <h2 className="font-bold">امنیت و حریم خصوصی</h2>
              <p className="mt-1 text-xs text-slate-500">
                کنترل اعلان‌های مرتبط با امنیت حساب
              </p>
            </div>
          </div>

          <SettingToggle
            icon={<Smartphone size={19} />}
            title="هشدار ورود به حساب"
            description="نمایش هشدار هنگام ورود جدید به حساب کاربری"
            checked={settings.loginAlerts}
            onChange={(value) => updateSetting("loginAlerts", value)}
          />

          <div className="mt-5 flex items-start gap-3 rounded-xl border border-blue-400/10 bg-blue-500/[0.06] p-4">
            <Info size={19} className="mt-0.5 shrink-0 text-blue-400" />
            <p className="text-xs leading-7 text-slate-400">
              تنظیمات امنیتی واقعی مانند نشست‌های فعال، خروج از دستگاه‌های دیگر
              و احراز هویت دومرحله‌ای در مرحله اتصال به سرویس احراز هویت اضافه خواهند شد.
            </p>
          </div>
        </section>

        {/* دکمه‌های ذخیره و بازنشانی */}
        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
          <button
            onClick={handleReset}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-6 py-3.5 text-sm text-slate-300 transition hover:border-rose-400/30 hover:text-rose-300"
          >
            <RotateCcw size={17} />
            بازگشت به تنظیمات پیش‌فرض
          </button>

          <button
            onClick={handleSave}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-3.5 text-sm font-bold shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
          >
            <Save size={18} />
            ذخیره تنظیمات
          </button>
        </div>
      </div>
    </main>
  );
}

// کامپوننت مشترک برای نمایش گزینه‌های روشن و خاموش
function SettingToggle({
  icon,
  title,
  description,
  checked,
  onChange,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}) {
    // دریافت پوسته فعال پورتال
const { theme, setTheme } = usePortalTheme();
  return (
    <div className="flex items-center justify-between gap-4 py-5">
      <div className="flex min-w-0 items-center gap-3">
        <div className="shrink-0 rounded-xl bg-white/5 p-3 text-slate-400">
          {icon}
        </div>

        <div className="min-w-0">
          <p className="text-sm font-semibold text-slate-200">{title}</p>
          <p className="mt-1 text-xs leading-6 text-slate-500">
            {description}
          </p>
        </div>
      </div>

      {/* کلید روشن و خاموش با پشتیبانی از صفحه‌کلید */}
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={title}
        onClick={() => onChange(!checked)}
        className={`relative h-7 w-12 shrink-0 rounded-full transition ${
          checked ? "bg-blue-600" : "bg-slate-700"
        }`}
      >
        <span
          className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-all ${
            checked ? "right-1" : "right-6"
          }`}
        />
      </button>
    </div>
  );
}
