
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  UserRound,
  Mail,
  Phone,
  Building2,
  ShieldCheck,
  LockKeyhole,
  Pencil,
  Save,
  X,
  CalendarDays,
  BadgeCheck,
  KeyRound,
} from "lucide-react";

export default function ProfilePage() {
  // اطلاعات نمونه کاربر؛ بعداً از حساب کاربری دریافت می‌شوند
  const [profile, setProfile] = useState({
    fullName: "مدیر سازمان",
    username: "admin",
    email: "admin@example.com",
    phone: "۰۹۱۲۰۰۰۰۰۰۰",
    company: "شرکت نمونه",
    role: "مدیر سیستم",
  });

  // کنترل حالت ویرایش اطلاعات
  const [isEditing, setIsEditing] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);

  // اطلاعات فرم تغییر رمز عبور
  const [passwords, setPasswords] = useState({
    current: "",
    next: "",
    confirm: "",
  });

  const [message, setMessage] = useState("");

  // تغییر مقادیر اطلاعات کاربر
  function updateProfile(field: keyof typeof profile, value: string) {
    setProfile((previous) => ({
      ...previous,
      [field]: value,
    }));
  }

  // ذخیره نمایشی اطلاعات پروفایل
  function handleSaveProfile() {
    setIsEditing(false);
    setMessage("تغییرات به‌صورت آزمایشی در همین صفحه اعمال شدند.");
  }

  // بررسی اولیه فرم تغییر رمز عبور
  function handlePasswordChange(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (passwords.next.length < 8) {
      setMessage("رمز عبور جدید باید حداقل ۸ کاراکتر باشد.");
      return;
    }

    if (passwords.next !== passwords.confirm) {
      setMessage("تکرار رمز عبور با رمز جدید مطابقت ندارد.");
      return;
    }

    // در نسخه فعلی هیچ تغییری در رمز واقعی حساب انجام نمی‌شود
    setMessage("فرم تغییر رمز عبور آماده است؛ اتصال به سرویس احراز هویت در مرحله بعد انجام می‌شود.");
    setPasswords({ current: "", next: "", confirm: "" });
    setShowPasswordForm(false);
  }

  return (
    <main
      dir="rtl"
      className="relative min-h-screen overflow-hidden bg-[#070914] text-white"
    >
      {/* نورهای پس‌زمینه هماهنگ با طراحی پورتال */}
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[130px]" />
      <div className="pointer-events-none absolute -left-40 top-[500px] h-96 w-96 rounded-full bg-purple-600/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12 lg:py-12">

        {/* عنوان صفحه */}
        <div className="mb-10">
          <Link
            href="/portal/dashboard"
            className="mb-7 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-blue-300"
          >
            <ArrowRight size={17} />
            بازگشت به داشبورد
          </Link>

          <div className="flex items-center gap-3">
            <div className="rounded-2xl border border-blue-400/20 bg-blue-500/10 p-3 text-blue-400">
              <UserRound size={25} />
            </div>

            <div>
              <h1 className="text-3xl font-black sm:text-4xl">
                پروفایل من
              </h1>
              <p className="mt-2 text-sm text-slate-400">
                مشاهده و مدیریت اطلاعات حساب کاربری
              </p>
            </div>
          </div>
        </div>

        {/* کارت معرفی کاربر */}
        <section className="mb-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035]">
          <div className="h-32 bg-gradient-to-l from-blue-700/50 via-indigo-600/30 to-purple-700/40" />

          <div className="px-6 pb-7 sm:px-8">
            <div className="-mt-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex items-end gap-4">
                <div className="flex h-24 w-24 items-center justify-center rounded-3xl border-4 border-[#0b1020] bg-gradient-to-br from-blue-500 to-indigo-700 text-3xl font-black shadow-xl">
                  {profile.fullName.charAt(0)}
                </div>

                <div className="pb-1">
                  <h2 className="text-xl font-black">{profile.fullName}</h2>
                  <p className="mt-1 text-sm text-slate-400">
                    {profile.role}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs text-emerald-300 sm:self-auto">
                <BadgeCheck size={16} />
                حساب فعال
              </div>
            </div>

            <div className="mt-7 grid grid-cols-1 gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <CalendarDays size={18} className="text-blue-400" />
                <span>عضویت در سامانه: اطلاعات ثبت نشده</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-400">
                <Building2 size={18} className="text-blue-400" />
                <span>{profile.company}</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-400">
                <ShieldCheck size={18} className="text-emerald-400" />
                <span>وضعیت حساب: فعال</span>
              </div>
            </div>
          </div>
        </section>

        {/* پیام نتیجه عملیات */}
        {message && (
          <div className="mb-6 flex items-start justify-between gap-3 rounded-xl border border-blue-400/20 bg-blue-500/10 px-5 py-4 text-sm leading-7 text-blue-200">
            <span>{message}</span>
            <button
              onClick={() => setMessage("")}
              aria-label="بستن پیام"
              className="shrink-0 text-blue-300 hover:text-white"
            >
              <X size={18} />
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

          {/* اطلاعات شخصی و سازمانی */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 sm:p-8 lg:col-span-2">
            <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-lg font-bold">اطلاعات حساب کاربری</h2>
                <p className="mt-2 text-xs text-slate-500">
                  مشخصات و اطلاعات تماس حساب شما
                </p>
              </div>

              {!isEditing ? (
                <button
                  onClick={() => {
                    setIsEditing(true);
                    setMessage("");
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-400/20 bg-blue-500/10 px-4 py-2.5 text-sm text-blue-300 transition hover:bg-blue-500/20"
                >
                  <Pencil size={16} />
                  ویرایش اطلاعات
                </button>
              ) : (
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsEditing(false)}
                    className="rounded-xl border border-white/10 px-4 py-2.5 text-sm text-slate-300 hover:bg-white/5"
                  >
                    انصراف
                  </button>

                  <button
                    onClick={handleSaveProfile}
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold transition hover:bg-blue-500"
                  >
                    <Save size={16} />
                    ذخیره
                  </button>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

              {/* نام و نام خانوادگی */}
              <div>
                <label className="mb-2 block text-xs text-slate-400">
                  نام و نام خانوادگی
                </label>
                <div className="relative">
                  <UserRound className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500" size={17} />
                  <input
                    disabled={!isEditing}
                    value={profile.fullName}
                    onChange={(event) => updateProfile("fullName", event.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-[#080d19] py-3.5 pr-11 pl-4 text-sm outline-none transition focus:border-blue-500/60 disabled:text-slate-400"
                  />
                </div>
              </div>

              {/* نام کاربری */}
              <div>
                <label className="mb-2 block text-xs text-slate-400">
                  نام کاربری
                </label>
                <div className="relative">
                  <UserRound className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500" size={17} />
                  <input
                    disabled
                    value={profile.username}
                    className="w-full rounded-xl border border-white/10 bg-[#080d19] py-3.5 pr-11 pl-4 text-sm text-slate-500"
                  />
                </div>
              </div>

              {/* ایمیل */}
              <div>
                <label className="mb-2 block text-xs text-slate-400">
                  آدرس ایمیل
                </label>
                <div className="relative">
                  <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500" size={17} />
                  <input
                    disabled={!isEditing}
                    type="email"
                    value={profile.email}
                    onChange={(event) => updateProfile("email", event.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-[#080d19] py-3.5 pr-11 pl-4 text-sm outline-none transition focus:border-blue-500/60 disabled:text-slate-400"
                  />
                </div>
              </div>

              {/* شماره تماس */}
              <div>
                <label className="mb-2 block text-xs text-slate-400">
                  شماره تماس
                </label>
                <div className="relative">
                  <Phone className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500" size={17} />
                  <input
                    disabled={!isEditing}
                    value={profile.phone}
                    onChange={(event) => updateProfile("phone", event.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-[#080d19] py-3.5 pr-11 pl-4 text-sm outline-none transition focus:border-blue-500/60 disabled:text-slate-400"
                  />
                </div>
              </div>

              {/* نام سازمان */}
              <div className="sm:col-span-2">
                <label className="mb-2 block text-xs text-slate-400">
                  نام سازمان
                </label>
                <div className="relative">
                  <Building2 className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500" size={17} />
                  <input
                    disabled={!isEditing}
                    value={profile.company}
                    onChange={(event) => updateProfile("company", event.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-[#080d19] py-3.5 pr-11 pl-4 text-sm outline-none transition focus:border-blue-500/60 disabled:text-slate-400"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* تنظیمات امنیتی */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 sm:p-8">
            <div className="mb-7 flex items-center gap-3">
              <div className="rounded-xl bg-purple-500/10 p-3 text-purple-400">
                <ShieldCheck size={22} />
              </div>
              <div>
                <h2 className="font-bold">امنیت حساب</h2>
                <p className="mt-1 text-xs text-slate-500">
                  مدیریت دسترسی و رمز عبور
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl border border-white/10 bg-[#080d19] p-4">
                <div className="flex items-center gap-3">
                  <LockKeyhole size={19} className="text-blue-400" />
                  <div>
                    <p className="text-sm font-semibold">رمز عبور</p>
                    <p className="mt-1 text-xs text-slate-500">
                      آخرین تغییر: نامشخص
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setShowPasswordForm((previous) => !previous);
                    setMessage("");
                  }}
                  className="mt-5 w-full rounded-lg border border-white/10 py-2.5 text-xs text-slate-300 transition hover:border-blue-400/30 hover:text-blue-300"
                >
                  تغییر رمز عبور
                </button>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#080d19] p-4">
                <div className="flex items-center gap-3">
                  <BadgeCheck size={19} className="text-emerald-400" />
                  <div>
                    <p className="text-sm font-semibold">وضعیت حساب</p>
                    <p className="mt-1 text-xs text-emerald-400">
                      فعال
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-blue-400/10 bg-blue-500/[0.06] p-4">
                <div className="flex items-start gap-3">
                  <KeyRound size={18} className="mt-0.5 text-blue-400" />
                  <p className="text-xs leading-7 text-slate-400">
                    اطلاعات امنیتی حساب باید فقط از طریق اتصال امن به سرویس
                    احراز هویت مدیریت شوند.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* فرم تغییر رمز عبور */}
        {showPasswordForm && (
          <section className="mt-6 rounded-2xl border border-purple-400/20 bg-white/[0.035] p-6 sm:p-8">
            <div className="mb-6">
              <h2 className="text-lg font-bold">تغییر رمز عبور</h2>
              <p className="mt-2 text-xs text-slate-500">
                رمز عبور فعلی و رمز عبور جدید را وارد کنید.
              </p>
            </div>

            <form onSubmit={handlePasswordChange} className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              <div>
                <label className="mb-2 block text-xs text-slate-400">
                  رمز عبور فعلی
                </label>
                <input
                  required
                  type="password"
                  value={passwords.current}
                  onChange={(event) =>
                    setPasswords((previous) => ({ ...previous, current: event.target.value }))
                  }
                  className="w-full rounded-xl border border-white/10 bg-[#080d19] px-4 py-3.5 text-sm outline-none focus:border-blue-500/60"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs text-slate-400">
                  رمز عبور جدید
                </label>
                <input
                  required
                  minLength={8}
                  type="password"
                  value={passwords.next}
                  onChange={(event) =>
                    setPasswords((previous) => ({ ...previous, next: event.target.value }))
                  }
                  className="w-full rounded-xl border border-white/10 bg-[#080d19] px-4 py-3.5 text-sm outline-none focus:border-blue-500/60"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs text-slate-400">
                  تکرار رمز عبور جدید
                </label>
                <input
                  required
                  minLength={8}
                  type="password"
                  value={passwords.confirm}
                  onChange={(event) =>
                    setPasswords((previous) => ({ ...previous, confirm: event.target.value }))
                  }
                  className="w-full rounded-xl border border-white/10 bg-[#080d19] px-4 py-3.5 text-sm outline-none focus:border-blue-500/60"
                />
              </div>

              <div className="flex flex-col gap-3 sm:col-span-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() => setShowPasswordForm(false)}
                  className="rounded-xl border border-white/10 px-6 py-3 text-sm text-slate-300 hover:bg-white/5"
                >
                  انصراف
                </button>

                <button
                  type="submit"
                  className="rounded-xl bg-purple-600 px-6 py-3 text-sm font-bold transition hover:bg-purple-500"
                >
                  بررسی اطلاعات
                </button>
              </div>
            </form>
          </section>
        )}
      </div>
    </main>
  );
}
