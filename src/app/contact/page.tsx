
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  PhoneCall,
  Clock,
  Send,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  Headset,
  MessageCircle,
} from "lucide-react";

// ساختار اطلاعات فرم تماس
type ContactForm = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
};


// انیمیشن سه‌بعدی حلقه‌های ارتباطی
function ContactOrbitAnimation() {
  return (
    <div className="contact-orbit-scene">
      {/* هاله نورانی پشت آیکون */}
      <div className="contact-orbit-glow" />

      {/* حلقه‌های چرخان */}
      <div className="contact-orbit-ring contact-ring-one" />
      <div className="contact-orbit-ring contact-ring-two" />
      <div className="contact-orbit-ring contact-ring-three" />

      {/* ذرات نورانی */}
      <span className="contact-orbit-particle particle-one" />
      <span className="contact-orbit-particle particle-two" />
      <span className="contact-orbit-particle particle-three" />

      {/* آیکون مرکزی ثابت */}
      <div className="contact-orbit-center">
        <PhoneCall size={54} strokeWidth={1.5} />
      </div>
    </div>
  );
}

export default function ContactPage() {
  // مدیریت اطلاعات فرم
  const [form, setForm] = useState<ContactForm>({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  // وضعیت ارسال آزمایشی فرم
  const [submitted, setSubmitted] = useState(false);

  // موقعیت ماوس برای واکنش انیمیشن
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // تغییر مقادیر ورودی‌ها
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // ثبت آزمایشی فرم
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // واکنش انیمیشن به حرکت ماوس
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    setMousePosition({
      x: x * 12,
      y: y * 12,
    });
  };

  // بازگرداندن فرم به حالت اولیه
  const resetForm = () => {
    setSubmitted(false);
    setForm({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main
      dir="rtl"
      className="relative min-h-screen overflow-hidden bg-[#070914] text-white"
    >
      {/* نورپردازی پس‌زمینه */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute -left-40 top-[700px] h-[400px] w-[400px] rounded-full bg-orange-500/10 blur-[140px]" />
      </div>

      {/* بخش معرفی و انیمیشن ارتباطات */}
      <section className="relative mx-auto max-w-[1440px] px-5 pb-10 pt-20 sm:px-8 lg:px-12 lg:pb-12 lg:pt-24">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-10">
          {/* متن معرفی */}
          <div className="relative z-10 max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/5 px-4 py-2 text-xs font-semibold text-blue-300">
              <Sparkles size={15} />
              CONTACT DOLPHIN
            </div>

            <h1 className="text-3xl font-black leading-[1.6] sm:text-4xl lg:text-5xl">
              بیایید با هم
              <span className="bg-gradient-to-l from-blue-400 via-cyan-300 to-orange-400 bg-clip-text text-transparent">
                {" "}در ارتباط باشیم
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">
              برای دریافت مشاوره، آشنایی با محصولات و راهکارهای دلفین
              یا بررسی فرصت‌های همکاری، از طریق راه‌های ارتباطی زیر با ما
              در تماس باشید.
            </p>
          </div>

          {/* انیمیشن سه‌بعدی ارتباطات */}
          <div
            className="contact-visual relative mx-auto h-[300px] w-full max-w-[480px] sm:h-[370px] lg:h-[410px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
          >
            {/* هاله نور پس‌زمینه */}
            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[90px]" />

            {/* حلقه‌های مداری */}
            <div className="contact-orbit contact-orbit-one" />
            <div className="contact-orbit contact-orbit-two" />
            <div className="contact-orbit contact-orbit-three" />

            {/* ذرات نور */}
            <div className="contact-particle particle-one" />
            <div className="contact-particle particle-two" />
            <div className="contact-particle particle-three" />
            <div className="contact-particle particle-four" />

            {/* پایه سه‌بعدی */}
            <div className="contact-platform">
              <div className="platform-ring platform-ring-one" />
              <div className="platform-ring platform-ring-two" />
              <div className="platform-core" />
            </div>

            {/* گوشی مرکزی */}
            <div
              className="contact-phone"
              style={{
                transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) rotate(-9deg)`,
              }}
            >
              <div className="phone-side" />
              <div className="phone-screen">
                <div className="phone-camera" />

                <div className="phone-logo">
                  <span className="logo-blue" />
                  <span className="logo-orange" />
                </div>

                <div className="phone-screen-line" />
                <div className="phone-screen-line short" />

                <div className="phone-call-button">
                  <Phone size={23} />
                </div>

                <div className="phone-bottom-line" />
              </div>
            </div>

            {/* هدست ارتباطی */}
            <div className="contact-headset">
              <div className="headset-band" />
              <div className="headset-left" />
              <div className="headset-right" />
              <div className="headset-mic" />
              <div className="headset-center">
                <Headset size={31} />
              </div>
            </div>

            {/* آیکون تماس */}
            <div className="floating-contact contact-call">
              <Phone size={25} />
            </div>

            {/* آیکون ایمیل */}
            <div className="floating-contact contact-mail">
              <Mail size={25} />
            </div>

            {/* آیکون پیام */}
            <div className="floating-contact contact-message">
              <MessageCircle size={25} />
            </div>

            {/* آیکون موقعیت مکانی */}
            <div className="floating-contact contact-location">
              <MapPin size={25} />
            </div>

            {/* حلقه نوری واکنش‌گرا */}
            <div className="contact-glow-ring" />
          </div>
        </div>
      </section>

      {/* اطلاعات تماس و فرم */}
      <section className="relative mx-auto max-w-[1440px] px-5 py-8 sm:px-8 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">

          {/* کارت‌های اطلاعات تماس */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-[#101525]/80 p-6 sm:p-7">
              <h2 className="text-xl font-black">راه‌های ارتباطی</h2>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                برای ارتباط با کارشناسان گروه مهندسی دلفین می‌توانید
                از راه‌های ارتباطی زیر استفاده کنید.
              </p>

              <div className="mt-6 space-y-6">

                {/* تلفن */}
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <Phone size={19} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold">تلفن تماس</h3>
                    <p className="mt-1 text-xs leading-6 text-slate-400">
                      اطلاعات شماره تماس به‌زودی درج می‌شود
                    </p>
                  </div>
                </div>

                {/* ایمیل */}
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                    <Mail size={19} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold">پست الکترونیکی</h3>
                    <p className="mt-1 text-xs leading-6 text-slate-400">
                      اطلاعات ایمیل به‌زودی درج می‌شود
                    </p>
                  </div>
                </div>

                {/* آدرس */}
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                    <MapPin size={19} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold">نشانی دفتر</h3>
                    <p className="mt-1 text-xs leading-6 text-slate-400">
                      نشانی دفتر مرکزی گروه مهندسی دلفین
                    </p>
                  </div>
                </div>

                {/* ساعت کاری */}
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                    <Clock size={19} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold">ساعات پاسخگویی</h3>
                    <p className="mt-1 text-xs leading-6 text-slate-400">
                      ساعات کاری به‌زودی اعلام می‌شود
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* کارت دعوت به گفتگو */}
            <div className="relative overflow-hidden rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-950/70 to-orange-950/30 p-6 sm:p-7">
              <div className="absolute -left-10 -top-10 h-36 w-36 rounded-full bg-blue-500/20 blur-3xl" />

              <div className="relative">
                <MessageSquare size={27} className="text-blue-400" />

                <h3 className="mt-4 text-lg font-black">
                  آماده همکاری هستیم
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  اگر برای کسب‌وکار خود به دنبال راهکارهای نرم‌افزاری
                  و فناورانه هستید، خوشحال می‌شویم گفت‌وگو کنیم.
                </p>

                <Link
                  href="/products"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-400 transition hover:text-cyan-300"
                >
                  مشاهده محصولات
                  <ArrowLeft size={16} />
                </Link>
              </div>
            </div>
          </div>

          {/* فرم تماس */}
          <div className="rounded-2xl border border-white/10 bg-[#101525]/80 p-6 sm:p-8">
            <div className="mb-6">
              <h2 className="text-xl font-black">ارسال پیام</h2>
              <p className="mt-2 text-sm leading-7 text-slate-400">
                اطلاعات خود را وارد کنید تا امکان پیگیری درخواست شما فراهم شود.
              </p>
            </div>

            {submitted ? (
              // پیام نمایشی بعد از ثبت فرم
              <div className="flex min-h-[350px] flex-col items-center justify-center text-center">
                <CheckCircle2 size={58} className="text-green-400" />

                <h3 className="mt-5 text-xl font-black">
                  فرم آزمایشی تکمیل شد
                </h3>

                <p className="mt-3 max-w-md text-sm leading-8 text-slate-400">
                  در حال حاضر امکان ارسال واقعی پیام فعال نیست.
                  این قابلیت پس از اتصال فرم به سامانه پردازش درخواست‌ها فعال خواهد شد.
                </p>

                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-6 rounded-xl border border-white/15 px-5 py-3 text-sm font-bold transition hover:bg-white/5"
                >
                  ارسال پیام جدید
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">

                  {/* نام */}
                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-300">
                      نام و نام خانوادگی
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="نام خود را وارد کنید"
                      className="w-full rounded-xl border border-white/10 bg-[#070914] px-4 py-3 text-sm outline-none transition placeholder:text-slate-600 focus:border-blue-400/60"
                    />
                  </div>

                  {/* تلفن */}
                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-300">
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
                      title="شماره تماس باید دقیقاً ۱۱ رقم باشد."
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="09123456789"
                      className="w-full rounded-xl border border-white/10 bg-[#070914] px-4 py-3 text-left text-sm outline-none transition placeholder:text-slate-600 focus:border-blue-400/60"
                    />
                  </div>
                </div>

                {/* ایمیل */}
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-300">
                    ایمیل
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    className="w-full rounded-xl border border-white/10 bg-[#070914] px-4 py-3 text-sm outline-none transition placeholder:text-slate-600 focus:border-blue-400/60"
                  />
                </div>

                {/* موضوع */}
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-300">
                    موضوع پیام
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/10 bg-[#070914] px-4 py-3 text-sm text-slate-300 outline-none transition focus:border-blue-400/60"
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
                  <label className="mb-2 block text-sm font-bold text-slate-300">
                    متن پیام
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="پیام خود را بنویسید..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-[#070914] px-4 py-3 text-sm leading-7 outline-none transition placeholder:text-slate-600 focus:border-blue-400/60"
                  />
                </div>

                {/* دکمه ارسال */}
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.3)]"
                >
                  ارسال پیام
                  <Send
                    size={17}
                    className="transition-transform group-hover:-translate-x-1"
                  />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* موقعیت مکانی */}
      <section className="relative mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-12">
        <div className="mb-6">
          <span className="text-xs font-bold tracking-[0.25em] text-blue-400">
            OUR LOCATION
          </span>

          <h2 className="mt-3 text-2xl font-black sm:text-3xl">
            موقعیت مکانی ما
          </h2>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#101525]/80 p-2">
          {/* نقشه موقعیت مکانی دلفین */}
          <iframe
            src="https://balad.ir/embed?p=6Zg1nZ5DFOZwzd"
            title="مشاهده پارک علم و فناوری هرمزگان روی نقشه بلد"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            aria-hidden={false}
            tabIndex={0}
            loading="lazy"
            className="block w-full rounded-xl"
          />
        </div>
      </section>

      {/* استایل‌های انیمیشن سه‌بعدی */}
      <style jsx global>{`
        .contact-visual {
          perspective: 1000px;
          isolation: isolate;
        }

        /* حلقه‌های مداری */
        .contact-orbit {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 78%;
          height: 35%;
          border: 1px solid rgba(40, 140, 255, 0.5);
          border-radius: 50%;
          transform: translate(-50%, -50%) rotate(-20deg);
          box-shadow: 0 0 15px rgba(0, 120, 255, 0.15);
        }

        .contact-orbit-one {
          animation: orbit-rotate 12s linear infinite;
        }

        .contact-orbit-two {
          width: 92%;
          height: 48%;
          border-color: rgba(255, 130, 40, 0.4);
          transform: translate(-50%, -50%) rotate(25deg);
          animation: orbit-reverse 16s linear infinite;
        }

        .contact-orbit-three {
          width: 65%;
          height: 65%;
          border-color: rgba(50, 120, 255, 0.2);
          transform: translate(-50%, -50%) rotate(55deg);
          animation: orbit-rotate 20s linear infinite;
        }

        /* گوشی سه‌بعدی */
        .contact-phone {
          position: absolute;
          z-index: 4;
          left: 43%;
          top: 47%;
          width: 145px;
          height: 245px;
          padding: 7px;
          border: 2px solid #287cff;
          border-radius: 27px;
          background: linear-gradient(135deg, #1c3e83, #080e28 65%, #152b62);
          box-shadow:
            -8px 8px 25px rgba(0, 100, 255, 0.35),
            8px -4px 20px rgba(255, 130, 40, 0.15),
            inset 2px 0 8px rgba(100, 180, 255, 0.5);
          transition: transform 0.15s ease-out;
          animation: phone-float 5s ease-in-out infinite;
          transform-style: preserve-3d;
        }

        .phone-side {
          position: absolute;
          right: -5px;
          top: 55px;
          width: 4px;
          height: 45px;
          border-radius: 0 4px 4px 0;
          background: #4098ff;
        }

        .phone-screen {
          position: relative;
          display: flex;
          height: 100%;
          flex-direction: column;
          align-items: center;
          overflow: hidden;
          border-radius: 20px;
          background:
            radial-gradient(circle at 50% 40%, rgba(34, 100, 220, 0.35), transparent 55%),
            linear-gradient(145deg, #101e49, #080c20);
        }

        .phone-camera {
          position: absolute;
          top: 9px;
          width: 35px;
          height: 5px;
          border-radius: 10px;
          background: #030817;
        }

        .phone-logo {
          position: relative;
          width: 75px;
          height: 50px;
          margin-top: 60px;
          filter: drop-shadow(0 0 10px rgba(0, 130, 255, 0.6));
        }

        .logo-blue {
          position: absolute;
          left: 5px;
          top: 5px;
          width: 62px;
          height: 26px;
          border-top: 8px solid #087cff;
          border-radius: 80% 70% 0 0;
          transform: rotate(-8deg);
        }

        .logo-orange {
          position: absolute;
          left: 19px;
          top: 20px;
          width: 42px;
          height: 17px;
          border-bottom: 7px solid #ff8a28;
          border-radius: 0 0 80% 60%;
          transform: rotate(-20deg);
        }

        .phone-screen-line {
          width: 65px;
          height: 4px;
          margin-top: 12px;
          border-radius: 5px;
          background: rgba(130, 180, 255, 0.25);
        }

        .phone-screen-line.short {
          width: 40px;
          margin-top: 7px;
        }

        .phone-call-button {
          display: flex;
          width: 43px;
          height: 43px;
          align-items: center;
          justify-content: center;
          margin-top: 17px;
          border-radius: 50%;
          color: white;
          background: linear-gradient(135deg, #087cff, #05b8e8);
          box-shadow: 0 0 20px rgba(0, 130, 255, 0.6);
          animation: call-pulse 2s ease-in-out infinite;
        }

        .phone-bottom-line {
          position: absolute;
          bottom: 8px;
          width: 38px;
          height: 3px;
          border-radius: 5px;
          background: rgba(255, 255, 255, 0.4);
        }

        /* هدست */
        .contact-headset {
          position: absolute;
          z-index: 5;
          left: 25%;
          top: 55%;
          width: 135px;
          height: 135px;
          animation: headset-float 6s ease-in-out infinite;
          filter: drop-shadow(0 0 14px rgba(0, 120, 255, 0.4));
        }

        .headset-band {
          position: absolute;
          left: 13px;
          top: 2px;
          width: 108px;
          height: 115px;
          border: 11px solid #087cff;
          border-bottom-color: transparent;
          border-radius: 65px 65px 20px 20px;
          filter: drop-shadow(0 0 5px #008cff);
        }

        .headset-left,
        .headset-right {
          position: absolute;
          top: 58px;
          width: 27px;
          height: 43px;
          border: 3px solid #5bc8ff;
          border-radius: 12px;
          background: linear-gradient(135deg, #147cff, #081d50);
        }

        .headset-left {
          left: 4px;
        }

        .headset-right {
          right: 4px;
        }

        .headset-mic {
          position: absolute;
          right: 5px;
          bottom: 13px;
          width: 42px;
          height: 5px;
          border-radius: 10px;
          background: #ff8a28;
          transform: rotate(25deg);
          transform-origin: right;
        }

        .headset-center {
          position: absolute;
          left: 35px;
          top: 48px;
          display: flex;
          width: 65px;
          height: 65px;
          align-items: center;
          justify-content: center;
          border: 2px solid #168bff;
          border-radius: 50%;
          color: #8bdcff;
          background: radial-gradient(circle, #183e82, #080d22);
          box-shadow: 0 0 20px rgba(0, 120, 255, 0.55);
        }

        /* آیکون‌های شناور */
        .floating-contact {
          position: absolute;
          z-index: 6;
          display: flex;
          width: 54px;
          height: 54px;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(100, 180, 255, 0.55);
          border-radius: 16px;
          color: #8bdcff;
          background: linear-gradient(145deg, rgba(20, 55, 115, 0.9), rgba(8, 15, 40, 0.9));
          box-shadow:
            0 0 18px rgba(0, 120, 255, 0.2),
            inset 0 0 12px rgba(80, 150, 255, 0.1);
          backdrop-filter: blur(10px);
        }

        .contact-call {
          left: 9%;
          top: 15%;
          color: #8bdcff;
          animation: floating-one 5s ease-in-out infinite;
        }

        .contact-mail {
          right: 12%;
          top: 18%;
          color: #ffad62;
          border-color: rgba(255, 140, 60, 0.5);
          animation: floating-two 6s ease-in-out infinite;
        }

        .contact-message {
          left: 10%;
          bottom: 14%;
          color: #8bdcff;
          animation: floating-two 5.5s ease-in-out infinite;
        }

        .contact-location {
          right: 10%;
          bottom: 13%;
          color: #ffad62;
          border-color: rgba(255, 140, 60, 0.5);
          animation: floating-one 6.5s ease-in-out infinite;
        }

        /* پایه نورانی */
        .contact-platform {
          position: absolute;
          z-index: 2;
          left: 50%;
          bottom: 5%;
          width: 75%;
          height: 35px;
          transform: translateX(-50%);
          border: 1px solid rgba(0, 130, 255, 0.6);
          border-radius: 50%;
          background: linear-gradient(90deg, rgba(0, 60, 150, 0.1), rgba(0, 130, 255, 0.3), rgba(255, 130, 40, 0.15));
          box-shadow:
            0 0 18px rgba(0, 130, 255, 0.35),
            0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .platform-ring {
          position: absolute;
          inset: -8px 10%;
          border: 1px solid rgba(50, 160, 255, 0.6);
          border-radius: 50%;
        }

        .platform-ring-two {
          inset: -15px 20%;
          border-color: rgba(255, 140, 50, 0.45);
          animation: platform-pulse 3s ease-in-out infinite;
        }

        .platform-core {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 45%;
          height: 5px;
          border-radius: 50%;
          background: #168bff;
          box-shadow: 0 0 20px 5px rgba(0, 130, 255, 0.6);
          transform: translate(-50%, -50%);
        }

        /* ذرات نور */
        .contact-particle {
          position: absolute;
          z-index: 1;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #4ebaff;
          box-shadow: 0 0 12px 3px rgba(0, 130, 255, 0.7);
        }

        .particle-one {
          left: 28%;
          top: 12%;
          animation: particle-blink 2s infinite;
        }

        .particle-two {
          right: 25%;
          top: 38%;
          background: #ff9b42;
          box-shadow: 0 0 12px 3px rgba(255, 130, 40, 0.7);
          animation: particle-blink 2.7s infinite;
        }

        .particle-three {
          left: 35%;
          bottom: 20%;
          animation: particle-blink 3s infinite;
        }

        .particle-four {
          right: 30%;
          bottom: 30%;
          background: #ff9b42;
          box-shadow: 0 0 12px 3px rgba(255, 130, 40, 0.7);
          animation: particle-blink 2.3s infinite;
        }

        .contact-glow-ring {
          position: absolute;
          z-index: 0;
          left: 50%;
          top: 50%;
          width: 90%;
          height: 75%;
          border: 1px solid rgba(50, 130, 255, 0.12);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 40px rgba(0, 100, 255, 0.08);
        }

        /* حرکت‌های انیمیشن */
        @keyframes phone-float {
          0%, 100% { translate: 0 0; }
          50% { translate: 0 -10px; }
        }

        @keyframes headset-float {
          0%, 100% { transform: translateY(0) rotate(-5deg); }
          50% { transform: translateY(-12px) rotate(1deg); }
        }

        @keyframes floating-one {
          0%, 100% { transform: translateY(0) rotate(-4deg); }
          50% { transform: translateY(-14px) rotate(4deg); }
        }

        @keyframes floating-two {
          0%, 100% { transform: translateY(0) rotate(4deg); }
          50% { transform: translateY(12px) rotate(-4deg); }
        }

        @keyframes orbit-rotate {
          from { rotate: 0deg; }
          to { rotate: 360deg; }
        }

        @keyframes orbit-reverse {
          from { rotate: 360deg; }
          to { rotate: 0deg; }
        }

        @keyframes call-pulse {
          0%, 100% { box-shadow: 0 0 15px rgba(0, 130, 255, 0.5); }
          50% { box-shadow: 0 0 28px rgba(0, 180, 255, 0.9); }
        }

        @keyframes platform-pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.04); }
        }

        @keyframes particle-blink {
          0%, 100% { opacity: 0.25; scale: 0.7; }
          50% { opacity: 1; scale: 1.4; }
        }

        @media (max-width: 640px) {
          .contact-phone {
            width: 120px;
            height: 205px;
          }

          .contact-headset {
            scale: 0.82;
            left: 21%;
          }

          .floating-contact {
            width: 45px;
            height: 45px;
            border-radius: 13px;
          }
        }

        /* رعایت تنظیم کاهش حرکت در سیستم کاربر */
        @media (prefers-reduced-motion: reduce) {
          .contact-visual *,
          .contact-visual *::before,
          .contact-visual *::after {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </main>
  );
}
