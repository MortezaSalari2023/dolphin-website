
import Link from "next/link";
import {
  ArrowLeft,
  Building2,
  Factory,
  Network,
  Monitor,
  ShieldCheck,
  Workflow,
  Sparkles,
} from "lucide-react";

// دسته‌بندی پروژه‌ها
const projects = [
  {
    number: "01",
    category: "نرم‌افزارهای سازمانی",
    title: "سامانه‌های مدیریت اطلاعات",
    description:
      "طراحی و توسعه راهکارهای نرم‌افزاری برای یکپارچه‌سازی اطلاعات و بهبود فرآیندهای سازمانی.",
    icon: Network,
    color: "from-blue-500/20 to-cyan-500/5",
  },
  {
    number: "02",
    category: "اتوماسیون صنعتی",
    title: "هوشمندسازی فرآیندها",
    description:
      "استفاده از فناوری برای خودکارسازی فعالیت‌ها و افزایش دقت و سرعت عملیات.",
    icon: Factory,
    color: "from-purple-500/20 to-blue-500/5",
  },
  {
    number: "03",
    category: "زیرساخت و مانیتورینگ",
    title: "پایش هوشمند زیرساخت",
    description:
      "توسعه راهکارهای نظارتی برای پایش وضعیت تجهیزات و زیرساخت‌های فناوری اطلاعات.",
    icon: Monitor,
    color: "from-cyan-500/20 to-blue-500/5",
  },
  {
    number: "04",
    category: "سیستم‌های هوشمند",
    title: "راهکارهای کنترل و نظارت",
    description:
      "طراحی راهکارهای هوشمند برای کنترل دسترسی، نظارت و مدیریت محیط‌های سازمانی.",
    icon: ShieldCheck,
    color: "from-orange-500/15 to-purple-500/5",
  },
  {
    number: "05",
    category: "راهکارهای یکپارچه",
    title: "اتصال سامانه‌های سازمانی",
    description:
      "ایجاد ارتباط میان سامانه‌ها و فراهم کردن بستری یکپارچه برای مدیریت عملیات.",
    icon: Workflow,
    color: "from-indigo-500/20 to-cyan-500/5",
  },
  {
    number: "06",
    category: "راهکارهای اختصاصی",
    title: "توسعه نرم‌افزار سفارشی",
    description:
      "تحلیل نیازهای کسب‌وکار و توسعه راهکارهای نرم‌افزاری متناسب با نیازهای اختصاصی.",
    icon: Building2,
    color: "from-blue-500/20 to-purple-500/5",
  },
];

// صفحه پروژه‌ها
export default function ProjectsPage() {
  return (
    <main
      dir="rtl"
      className="relative min-h-screen overflow-hidden bg-[#070914] text-white"
    >
      {/* نورهای پس‌زمینه */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute -left-40 top-[800px] h-[450px] w-[450px] rounded-full bg-purple-600/10 blur-[140px]" />
      </div>

      {/* معرفی صفحه */}
      <section className="relative mx-auto max-w-[1440px] px-6 pb-20 pt-32 sm:px-10 lg:px-16 lg:pt-40">
        <div className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/5 px-5 py-2 text-sm text-blue-300">
            <Sparkles size={16} />
            <span>DOLPHIN PROJECTS</span>
          </div>

<h1 className="text-4xl font-black leading-[1.5] sm:text-5xl lg:text-7xl">
  حوزه‌های تخصصی
  <span className="bg-gradient-to-l from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
    {" "}و راهکارهای دلفین
  </span>
</h1>

          <p className="mt-8 max-w-2xl text-base leading-9 text-slate-400 sm:text-lg">
            در دلفین، فناوری را به راهکارهایی کاربردی تبدیل می‌کنیم؛
            از توسعه سامانه‌های سازمانی تا هوشمندسازی فرآیندها و زیرساخت‌ها.
          </p>
        </div>

        {/* آمار و معرفی کوتاه */}
        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {[
            { title: "تحلیل نیاز", text: "شناخت دقیق چالش‌های سازمان" },
            { title: "طراحی راهکار", text: "انتخاب معماری و فناوری مناسب" },
            { title: "توسعه و اجرا", text: "تبدیل ایده به راهکار عملی" },
          ].map((item, index) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-6"
            >
              <span className="text-sm font-bold text-blue-400">
                STEP 0{index + 1}
              </span>
              <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* فهرست پروژه‌ها و حوزه‌های فعالیت */}
      <section className="relative mx-auto max-w-[1440px] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
          <div>
            <span className="text-sm font-bold tracking-[0.25em] text-blue-400">
              OUR EXPERTISE
            </span>
<h2 className="mt-4 text-3xl font-black sm:text-4xl">
  زمینه‌های فعالیت ما
</h2>
          </div>

<p className="max-w-md text-sm leading-8 text-slate-400">
  دلفین با تکیه بر دانش فنی و تجربه در حوزه نرم‌افزار و فناوری،
  راهکارهایی متناسب با نیازهای سازمان‌ها طراحی و توسعه می‌دهد.
</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
<article
  key={project.number}
  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#101525]/70 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/30 sm:p-8"
>
                {/* نور رنگی کارت */}
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.color} opacity-40 transition-opacity duration-500 group-hover:opacity-100`}
                />

                <div className="relative flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-300 transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-500/20">
                      <Icon size={28} />
                    </div>

                    <span className="text-4xl font-black text-white/10 transition-colors group-hover:text-blue-400/30">
                      {project.number}
                    </span>
                  </div>

                  <div className="mt-8 text-xs font-bold text-blue-400">
                    {project.category}
                  </div>

                  <h3 className="mt-3 text-xl font-black">
                    {project.title}
                  </h3>

                  <p className="mt-5 min-h-[84px] text-sm leading-8 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-7 h-px w-full bg-white/10" />

<div className="mt-5 flex items-center justify-between text-sm text-slate-500">
  <span>گروه مهندسی دلفین</span>
  <span className="text-xs text-blue-300/70">
    حوزه تخصصی
  </span>
</div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* فرآیند همکاری */}
      <section className="relative mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16">
        <div className="relative overflow-hidden rounded-[32px] border border-blue-400/20 bg-gradient-to-l from-blue-950/70 via-[#11172a] to-purple-950/50 px-7 py-14 text-center sm:px-12 sm:py-20">
          <div className="absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[80px]" />

          <div className="relative">
            <h2 className="text-3xl font-black sm:text-4xl">
              ایده‌ای برای توسعه دارید؟
            </h2>

            <p className="mx-auto mt-6 max-w-xl leading-9 text-slate-400">
              برای بررسی نیازهای پروژه و آشنایی با راهکارهای مناسب،
              با تیم دلفین در ارتباط باشید.
            </p>

            <Link
              href="/contact"
              className="group mt-9 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-4 font-bold transition-all hover:bg-blue-500 hover:shadow-[0_0_35px_rgba(37,99,235,0.3)]"
            >
              درخواست مشاوره
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
