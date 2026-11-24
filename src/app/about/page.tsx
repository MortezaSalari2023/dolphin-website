
import Link from "next/link";
import {
  ArrowLeft,
  Target,
  Eye,
  Lightbulb,
  ShieldCheck,
  Cpu,
  Users,
  Workflow,
  Sparkles,
} from "lucide-react";

// اطلاعات ارزش‌های سازمانی
const values = [
  {
    icon: Lightbulb,
    title: "نوآوری",
    description: "استفاده از ایده‌ها و فناوری‌های نوین برای خلق راهکارهای کاربردی.",
  },
  {
    icon: ShieldCheck,
    title: "اعتماد و تعهد",
    description: "توجه به کیفیت، مسئولیت‌پذیری و ایجاد روابط پایدار با مشتریان.",
  },
  {
    icon: Cpu,
    title: "توسعه فناوری",
    description: "طراحی و توسعه سامانه‌های هوشمند متناسب با نیاز سازمان‌ها.",
  },
  {
    icon: Users,
    title: "مشتری‌مداری",
    description: "شناخت نیازهای واقعی مشتریان و ارائه راهکارهای متناسب با آن‌ها.",
  },
];

// صفحه درباره ما
export default function AboutPage() {
  return (
    <main
      dir="rtl"
      className="relative min-h-screen overflow-hidden bg-[#070914] text-white"
    >
      {/* نورهای تزئینی پس‌زمینه */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[140px]" />
   <div className="absolute -left-40 top-[700px] h-[450px] w-[450px] rounded-full bg-orange-500/10 blur-[140px]" />
      </div>

      {/* معرفی اصلی */}
      <section className="relative mx-auto flex min-h-[520px] max-w-[1440px] items-center px-6 py-28 sm:px-10 lg:px-16">
        <div className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/5 px-5 py-2 text-sm text-blue-300">
            <Sparkles size={16} />
            <span>ABOUT DOLPHIN</span>
          </div>

          <h1 className="text-4xl font-black leading-[1.5] sm:text-5xl lg:text-7xl">
            درباره
            <span className="bg-gradient-to-l from-[#F59E0B] via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              {" "}گروه مهندسی دلفین
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-9 text-slate-400 sm:text-lg">
            ما در گروه مهندسی دلفین با تمرکز بر توسعه فناوری و طراحی راهکارهای
            نرم‌افزاری، به دنبال ساده‌تر کردن فرآیندها و هوشمندسازی فعالیت‌های
            سازمانی هستیم.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 rounded-xl bg-blue-600 px-7 py-4 font-bold transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_35px_rgba(37,99,235,0.35)]"
            >
             مشاهده حوزه‌های تخصصی
              <ArrowLeft
                size={18}
                className="transition-transform group-hover:-translate-x-1"
              />
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-white/15 px-7 py-4 font-bold text-slate-300 transition-all hover:border-blue-400/50 hover:bg-white/5"
            >
              ارتباط با ما
            </Link>
          </div>
        </div>

        {/* المان گرافیکی سه‌بعدی و تزئینی */}
        <div className="pointer-events-none absolute left-[8%] top-1/2 hidden h-72 w-72 -translate-y-1/2 items-center justify-center lg:flex">
          <div className="absolute h-64 w-64 animate-[spin_25s_linear_infinite] rounded-full border border-blue-400/20" />
          <div className="absolute h-48 w-48 animate-[spin_18s_linear_infinite_reverse] rounded-full border border-orange-400/30" />
          <div className="absolute h-32 w-32 rounded-full bg-blue-500/10 blur-2xl" />
          <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-blue-300/30 bg-blue-500/10 shadow-[0_0_70px_rgba(59,130,246,0.2)] backdrop-blur-xl">
            <Workflow size={42} className="text-cyan-300" />
          </div>
        </div>
      </section>

      {/* معرفی شرکت */}
      <section className="relative mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-bold tracking-[0.25em] text-blue-400">
              WHO WE ARE
            </span>

            <h2 className="mt-5 text-3xl font-black leading-relaxed sm:text-4xl">
              فناوری برای ساختن
              <span className="text-blue-400"> آینده‌ای هوشمندتر</span>
            </h2>

            <p className="mt-7 text-base leading-9 text-slate-400">
              گروه مهندسی دلفین فعالیت رسمی خود را از سال ۱۴۰۰ آغاز کرده است.
              تمرکز ما بر شناخت چالش‌های سازمانی و تبدیل آن‌ها به راهکارهای
              نرم‌افزاری و فناورانه است.
            </p>

            <p className="mt-5 text-base leading-9 text-slate-400">
              باور داریم فناوری زمانی ارزشمند است که بتواند در عمل، کیفیت
              فرآیندها را بهبود دهد و مسیر تصمیم‌گیری و مدیریت را ساده‌تر کند.
            </p>
          </div>

          {/* کارت تاریخ شروع فعالیت */}
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-blue-500/10 to-orange-500/10 to-purple-500/10 p-10 sm:p-14">
            <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative">
              <div className="text-sm font-bold tracking-widest text-slate-400">
                OUR JOURNEY
              </div>

              <div className="mt-8 text-7xl font-black text-white sm:text-8xl">
                ۱۴۰۰
              </div>

              <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-l from-blue-400 to-orange-400" />

              <p className="mt-7 max-w-sm text-lg leading-9 text-slate-300">
                آغاز مسیر رسمی گروه مهندسی دلفین در دنیای فناوری و راهکارهای
                هوشمند سازمانی.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ماموریت و چشم‌انداز */}
      <section className="relative mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="group rounded-3xl border border-blue-400/15 bg-[#10172a]/70 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/40 sm:p-10">
            <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-400">
              <Target size={30} />
            </div>

            <h3 className="text-2xl font-black">مأموریت ما</h3>

            <p className="mt-5 leading-9 text-slate-400">
              توسعه راهکارهای فناورانه و سامانه‌های نرم‌افزاری که به سازمان‌ها
              در بهبود فرآیندها، مدیریت بهتر اطلاعات و افزایش بهره‌وری کمک کنند.
            </p>
          </div>

          <div className="group rounded-3xl border border-orange-400/15 bg-[#10172a]/70 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-orange-400/40 sm:p-10">
            <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-400">
              <Eye size={30} />
            </div>

            <h3 className="text-2xl font-black">چشم‌انداز ما</h3>

            <p className="mt-5 leading-9 text-slate-400">
              حرکت در مسیر تبدیل شدن به مجموعه‌ای اثرگذار در طراحی و توسعه
              راهکارهای هوشمند و یکپارچه برای سازمان‌ها و کسب‌وکارها.
            </p>
          </div>
        </div>
      </section>

      {/* ارزش‌های سازمانی */}
      <section className="relative mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mb-14 text-center">
          <span className="text-sm font-bold tracking-[0.25em] text-blue-400">
            OUR VALUES
          </span>

          <h2 className="mt-5 text-3xl font-black sm:text-4xl">
            ارزش‌هایی که به آن‌ها باور داریم
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
            اصولی که مسیر طراحی، توسعه و ارائه راهکارهای دلفین را شکل می‌دهند.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/30 hover:bg-blue-500/[0.06]"
              >
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-400 transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-500/20">
                  <Icon size={28} />
                </div>

                <div className="mb-3 text-xs font-bold text-slate-600">
                  0{index + 1}
                </div>

                <h3 className="text-xl font-bold">{item.title}</h3>

                <p className="mt-4 text-sm leading-8 text-slate-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* دعوت به ارتباط */}
      <section className="relative mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16">
        <div className="relative overflow-hidden rounded-[32px] border border-blue-400/20 bg-gradient-to-l from-blue-950/70 via-[#11172a] to-orange-950/30 px-7 py-14 text-center sm:px-12 sm:py-20">
          <div className="absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[80px]" />

          <div className="relative">
            <h2 className="text-3xl font-black sm:text-4xl">
              برای ساختن آینده آماده‌اید؟
            </h2>

            <p className="mx-auto mt-6 max-w-xl leading-9 text-slate-400">
              برای آشنایی بیشتر با راهکارهای دلفین و بررسی فرصت‌های همکاری
              با ما در ارتباط باشید.
            </p>

            <Link
              href="/contact"
              className="group mt-9 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-4 font-bold transition-all hover:bg-blue-500 hover:shadow-[0_0_35px_rgba(37,99,235,0.3)]"
            >
              شروع گفتگو
              <ArrowLeft
                size={18}
                className="transition-transform group-hover:-translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
