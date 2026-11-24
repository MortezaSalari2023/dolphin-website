
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

// ساختار اطلاعات فرم تماس
type ContactForm = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
};

// صفحه تماس با ما
export default function ContactPage() {
  // مدیریت اطلاعات فرم
  const [form, setForm] = useState<ContactForm>({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  // وضعیت ارسال فرم
  const [submitted, setSubmitted] = useState(false);

  // تغییر مقادیر ورودی‌ها
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // ثبت آزمایشی فرم
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // فعلاً فقط وضعیت نمایشی ارسال را فعال می‌کنیم
    setSubmitted(true);
  };

  return (
    <main
      dir="rtl"
      className="relative min-h-screen overflow-hidden bg-[#070914] text-white"
    >
      {/* نورپردازی پس‌زمینه */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute -left-40 top-[700px] h-[450px] w-[450px] rounded-full bg-orange-500/10 blur-[140px]" />
      </div>

      {/* بخش معرفی */}
      <section className="relative mx-auto max-w-[1440px] px-6 pb-16 pt-32 sm:px-10 lg:px-16 lg:pt-40">
        <div className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/5 px-5 py-2 text-sm text-blue-300">
            <Sparkles size={16} />
            <span>CONTACT DOLPHIN</span>
          </div>

          <h1 className="text-4xl font-black leading-[1.5] sm:text-5xl lg:text-7xl">
            بیایید با هم
            <span className="bg-gradient-to-l from-blue-400 via-cyan-300 to-orange-400 bg-clip-text text-transparent">
              {" "}در ارتباط باشیم
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-9 text-slate-400 sm:text-lg">
            برای دریافت مشاوره، آشنایی با محصولات و راهکارهای دلفین
            یا بررسی فرصت‌های همکاری، از طریق راه‌های ارتباطی زیر با ما در تماس باشید.
          </p>
        </div>
      </section>

      {/* اطلاعات تماس و فرم */}
      <section className="relative mx-auto max-w-[1440px] px-6 py-12 sm:px-10 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

          {/* کارت‌های اطلاعات تماس */}
          <div className="space-y-5">
            <div className="rounded-3xl border border-white/10 bg-[#101525]/80 p-8">
              <h2 className="text-2xl font-black">راه‌های ارتباطی</h2>

              <p className="mt-4 text-sm leading-8 text-slate-400">
                برای ارتباط با کارشناسان گروه مهندسی دلفین می‌توانید
                از راه‌های ارتباطی زیر استفاده کنید.
              </p>

              <div className="mt-8 space-y-7">

                {/* تلفن */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <Phone size={22} />
                  </div>

                  <div>
                    <h3 className="font-bold">تلفن تماس</h3>
                    <p className="mt-2 text-sm text-slate-400">
                      اطلاعات شماره تماس به‌زودی درج می‌شود
                    </p>
                  </div>
                </div>

                {/* ایمیل */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                    <Mail size={22} />
                  </div>

                  <div>
                    <h3 className="font-bold">پست الکترونیکی</h3>
                    <p className="mt-2 text-sm text-slate-400">
                      اطلاعات ایمیل به‌زودی درج می‌شود
                    </p>
                  </div>
                </div>

                {/* آدرس */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                    <MapPin size={22} />
                  </div>

                  <div>
                    <h3 className="font-bold">نشانی دفتر</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      نشانی دفتر مرکزی گروه مهندسی دلفین
                    </p>
                  </div>
                </div>

                {/* ساعت کاری */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                    <Clock size={22} />
                  </div>

                  <div>
                    <h3 className="font-bold">ساعات پاسخگویی</h3>
                    <p className="mt-2 text-sm text-slate-400">
                      ساعات کاری به‌زودی اعلام می‌شود
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* کارت دعوت به گفتگو */}
            <div className="relative overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-950/70 to-orange-950/30 p-8">
              <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />

              <div className="relative">
                <MessageSquare size={30} className="text-blue-400" />

                <h3 className="mt-5 text-xl font-black">
                  آماده همکاری هستیم
                </h3>

                <p className="mt-4 text-sm leading-8 text-slate-400">
                  اگر برای کسب‌وکار خود به دنبال راهکارهای نرم‌افزاری
                  و فناورانه هستید، خوشحال می‌شویم گفت‌وگو کنیم.
                </p>

                <Link
                  href="/products"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-cyan-300"
                >
                  مشاهده محصولات
                  <ArrowLeft size={16} />
                </Link>
              </div>
            </div>
          </div>

          {/* فرم تماس */}
          <div className="rounded-3xl border border-white/10 bg-[#101525]/80 p-7 sm:p-10">
            <div className="mb-8">
              <h2 className="text-2xl font-black">ارسال پیام</h2>
              <p className="mt-3 text-sm leading-8 text-slate-400">
                اطلاعات خود را وارد کنید تا امکان پیگیری درخواست شما فراهم شود.
              </p>
            </div>

            {submitted ? (
              // پیام نمایشی بعد از ثبت فرم
              <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
                <CheckCircle2 size={64} className="text-green-400" />

<h3 className="mt-6 text-2xl font-black">
  فرم آزمایشی تکمیل شد
</h3>

<p className="mt-4 text-sm leading-8 text-slate-400">
  در حال حاضر امکان ارسال واقعی پیام فعال نیست.
  این قابلیت پس از اتصال فرم به سامانه پردازش درخواست‌ها فعال خواهد شد.
</p>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: "",
                      phone: "",
                      email: "",
                      subject: "",
                      message: "",
                    });
                  }}
                  className="mt-8 rounded-xl border border-white/15 px-6 py-3 text-sm font-bold transition hover:bg-white/5"
                >
                  ارسال پیام جدید
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-5 sm:grid-cols-2">

                  {/* نام */}
                  <div>
                    <label className="mb-3 block text-sm font-bold text-slate-300">
                      نام و نام خانوادگی
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="نام خود را وارد کنید"
                      className="w-full rounded-xl border border-white/10 bg-[#070914] px-5 py-4 text-sm outline-none transition placeholder:text-slate-600 focus:border-blue-400/60"
                    />
                  </div>

                  {/* تلفن */}
                  <div>
                    <label className="mb-3 block text-sm font-bold text-slate-300">
                      شماره تماس
                    </label>
<input
  name="phone"
  type="tel"
  dir="ltr"
  inputMode="numeric"
  pattern="[0-9۰-۹]{11}"
  minLength={11}
  maxLength={11}
  value={form.phone}
  onChange={handleChange}
  required
  placeholder="09123456789"
  className="w-full rounded-xl border border-white/10 bg-[#070914] px-5 py-4 text-sm text-left outline-none transition placeholder:text-slate-600 focus:border-blue-400/60"
/>
                  </div>
                </div>

                {/* ایمیل */}
                <div>
                  <label className="mb-3 block text-sm font-bold text-slate-300">
                    ایمیل
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    className="w-full rounded-xl border border-white/10 bg-[#070914] px-5 py-4 text-sm outline-none transition placeholder:text-slate-600 focus:border-blue-400/60"
                  />
                </div>

                {/* موضوع */}
                <div>
                  <label className="mb-3 block text-sm font-bold text-slate-300">
                    موضوع پیام
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/10 bg-[#070914] px-5 py-4 text-sm text-slate-300 outline-none transition focus:border-blue-400/60"
                  >
                    <option value="">موضوع را انتخاب کنید</option>
                    <option value="products">مشاوره محصولات</option>
                    <option value="cooperation">درخواست همکاری</option>
                    <option value="support">پشتیبانی</option>
                    <option value="other">سایر موارد</option>
                  </select>
                </div>

                {/* متن پیام */}
                <div>
                  <label className="mb-3 block text-sm font-bold text-slate-300">
                    متن پیام
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="پیام خود را بنویسید..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-[#070914] px-5 py-4 text-sm leading-8 outline-none transition placeholder:text-slate-600 focus:border-blue-400/60"
                  />
                </div>

                {/* دکمه ارسال */}
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-7 py-4 font-bold transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_35px_rgba(37,99,235,0.3)]"
                >
                  ارسال پیام
                  <Send
                    size={18}
                    className="transition-transform group-hover:-translate-x-1"
                  />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* بخش موقعیت مکانی */}
      <section className="relative mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mb-8">
          <span className="text-sm font-bold tracking-[0.25em] text-blue-400">
            OUR LOCATION
          </span>

          <h2 className="mt-4 text-3xl font-black">
            موقعیت مکانی ما
          </h2>
        </div>

        <div className="flex min-h-[280px] flex-col items-center justify-center rounded-3xl border border-white/10 bg-[#101525]/80 px-6 py-12 text-center">
          <MapPin size={42} className="text-blue-400" />

          <h3 className="mt-5 text-xl font-bold">
            گروه مهندسی دلفین
          </h3>

          <p className="mt-3 text-sm leading-8 text-slate-400">
            پس از مشخص شدن نشانی دفتر، نقشه موقعیت مکانی در این قسمت قرار می‌گیرد.
          </p>
        </div>
      </section>
    </main>
  );
}
