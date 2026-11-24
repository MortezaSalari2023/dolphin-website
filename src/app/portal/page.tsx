
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  LockKeyhole,
  UserRound,
  ArrowLeft,
  ShieldCheck,
  Headset,
  Sparkles,
  Eye,
  EyeOff,
} from "lucide-react";

// صفحه ورود پورتال مشتریان دلفین
export default function PortalPage() {
  // مدیریت اطلاعات ورود
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // نمایش یا مخفی کردن رمز عبور
  const [showPassword, setShowPassword] = useState(false);

  // وضعیت نمایشی فرم
  const [error, setError] = useState("");

  // بررسی اولیه فرم ورود
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // احراز هویت در مرحله اتصال به سرور پیاده‌سازی می‌شود
    setError("سامانه ورود هنوز به سرویس احراز هویت متصل نشده است.");
  };

  return (
    <main
      dir="rtl"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#070914] px-5 py-16 text-white"
    >
      {/* نورهای پس‌زمینه */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-600/15 blur-[150px]" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-purple-600/15 blur-[150px]" />
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/[0.04]" />
      </div>

      {/* لینک بازگشت به سایت */}
      <Link
        href="/"
        className="absolute right-6 top-6 z-20 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white sm:right-10 sm:top-10"
      >
        بازگشت به وب‌سایت
        <ArrowLeft size={16} />
      </Link>

      <div className="relative z-10 grid w-full max-w-[1100px] overflow-hidden rounded-[32px] border border-white/10 bg-[#101525]/80 shadow-[0_30px_100px_rgba(0,0,0,0.4)] backdrop-blur-2xl lg:grid-cols-2">

        {/* بخش معرفی پورتال */}
        <div className="relative hidden min-h-[650px] flex-col justify-between overflow-hidden bg-gradient-to-br from-blue-950/80 via-[#11172a] to-purple-950/70 p-12 lg:flex">

          {/* افکت‌های گرافیکی */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-20 top-20 h-72 w-72 rounded-full border border-blue-400/20" />
            <div className="absolute -right-10 top-32 h-52 w-52 rounded-full border border-purple-400/20" />
            <div className="absolute right-20 top-52 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl" />
          </div>

          <div className="relative">
            {/* لوگوی اصلی */}
            <Image
              src="/brand/dolphin-logo.png"
              alt="لوگوی گروه مهندسی دلفین"
              width={2048}
              height={2048}
              priority
              className="h-auto w-32 object-contain"
            />

            <div className="mt-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-xs text-blue-300">
                <Sparkles size={14} />
                DOLPHIN CUSTOMER PORTAL
              </div>

              <h1 className="mt-8 text-4xl font-black leading-[1.7]">
                دنیای خدمات
                <span className="block bg-gradient-to-l from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  اختصاصی دلفین
                </span>
              </h1>

              <p className="mt-6 max-w-sm text-sm leading-9 text-slate-400">
                محیطی یکپارچه برای دسترسی به خدمات، سامانه‌ها و امکانات
                اختصاصی مشتریان گروه مهندسی دلفین.
              </p>
            </div>
          </div>

          {/* ویژگی‌های پورتال */}
          <div className="relative space-y-5">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                <ShieldCheck size={22} />
              </div>
              <div>
                <h3 className="text-sm font-bold">دسترسی امن</h3>
                <p className="mt-1 text-xs text-slate-400">
                  دسترسی کنترل‌شده به خدمات مشتریان
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/15 text-purple-300">
                <Headset size={22} />
              </div>
              <div>
                <h3 className="text-sm font-bold">پشتیبانی مشتریان</h3>
                <p className="mt-1 text-xs text-slate-400">
                  ارتباط با واحد پشتیبانی
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* بخش فرم ورود */}
        <div className="flex min-h-[650px] flex-col justify-center p-7 sm:p-12">

          {/* لوگو در نسخه موبایل */}
          <div className="mb-10 flex justify-center lg:hidden">
            <Image
              src="/brand/dolphin-logo.png"
              alt="لوگوی گروه مهندسی دلفین"
              width={2048}
              height={2048}
              className="h-auto w-28 object-contain"
            />
          </div>

          <div className="mb-10">
            <span className="text-xs font-bold tracking-[0.2em] text-blue-400">
              CUSTOMER LOGIN
            </span>

            <h2 className="mt-5 text-3xl font-black">
              ورود به پورتال
            </h2>

            <p className="mt-4 text-sm leading-8 text-slate-400">
              برای ورود به حساب کاربری خود، اطلاعات ورود را وارد کنید.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* نام کاربری */}
            <div>
              <label className="mb-3 block text-sm font-bold text-slate-300">
                نام کاربری
              </label>

              <div className="relative">
                <UserRound
                  size={19}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  autoComplete="username"
                  placeholder="نام کاربری خود را وارد کنید"
                  className="w-full rounded-xl border border-white/10 bg-[#070914] py-4 pl-5 pr-14 text-sm outline-none transition placeholder:text-slate-600 focus:border-blue-400/60"
                />
              </div>
            </div>

            {/* رمز عبور */}
            <div>
              <label className="mb-3 block text-sm font-bold text-slate-300">
                رمز عبور
              </label>

              <div className="relative">
                <LockKeyhole
                  size={19}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  placeholder="رمز عبور خود را وارد کنید"
                  className="w-full rounded-xl border border-white/10 bg-[#070914] py-4 pl-14 pr-14 text-sm outline-none transition placeholder:text-slate-600 focus:border-blue-400/60"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "مخفی کردن رمز عبور" : "نمایش رمز عبور"}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-white"
                >
                  {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                </button>
              </div>
            </div>

            {/* پیام خطا */}
            {error && (
              <div className="rounded-xl border border-orange-400/20 bg-orange-500/10 px-4 py-3 text-sm leading-7 text-orange-300">
                {error}
              </div>
            )}

            {/* دکمه ورود */}
            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-7 py-4 font-bold transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_35px_rgba(37,99,235,0.3)]"
            >
              ورود به حساب کاربری
              <ArrowLeft
                size={18}
                className="transition-transform group-hover:-translate-x-1"
              />
            </button>
          </form>

          {/* راهنمای ورود */}
          <div className="mt-9 border-t border-white/10 pt-7">
            <p className="text-center text-sm leading-8 text-slate-500">
              برای دریافت اطلاعات حساب کاربری یا راهنمایی بیشتر،
              با واحد پشتیبانی دلفین تماس بگیرید.
            </p>

            <Link
              href="/contact"
              className="mt-4 flex items-center justify-center gap-2 text-sm font-bold text-blue-400 transition hover:text-cyan-300"
            >
              ارتباط با پشتیبانی
              <ArrowLeft size={16} />
            </Link>
          </div>

        </div>
      </div>

      {/* متن پایین صفحه */}
      <p className="absolute bottom-5 text-center text-xs text-slate-600">
        © Dolphin Engineering Group
      </p>
    </main>
  );
}
