
"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Plus,
  Search,
  Headset,
  MessageCircle,
  Clock3,
  CheckCircle2,
  AlertCircle,
  X,
  Send,
  FileText,
  CalendarDays,
  ChevronLeft,
  Filter,
} from "lucide-react";

// نوع اطلاعات هر درخواست پشتیبانی
type Ticket = {
  id: string;
  title: string;
  category: string;
  priority: "عادی" | "متوسط" | "فوری";
  status: "در حال بررسی" | "پاسخ داده شده" | "بسته شده";
  date: string;
  description: string;
};

// اطلاعات نمونه برای نمایش اولیه صفحه
const initialTickets: Ticket[] = [
  {
    id: "DSP-1405",
    title: "مشکل در ورود به سامانه",
    category: "مشکلات فنی",
    priority: "فوری",
    status: "در حال بررسی",
    date: "۱۴۰۵/۰۸/۲۰",
    description: "هنگام ورود به سامانه با خطا مواجه می‌شوم.",
  },
  {
    id: "DSP-1404",
    title: "درخواست آموزش بخش گزارش‌ها",
    category: "آموزش",
    priority: "متوسط",
    status: "پاسخ داده شده",
    date: "۱۴۰۵/۰۸/۱۸",
    description: "لطفاً راهنمای استفاده از گزارش‌های مدیریتی را ارسال کنید.",
  },
  {
    id: "DSP-1403",
    title: "درخواست افزودن کاربر جدید",
    category: "درخواست خدمات",
    priority: "عادی",
    status: "بسته شده",
    date: "۱۴۰۵/۰۸/۱۵",
    description: "نیاز به ایجاد دسترسی برای یکی از کاربران سازمان داریم.",
  },
];

const statusStyles: Record<Ticket["status"], string> = {
  "در حال بررسی": "border-amber-400/20 bg-amber-400/10 text-amber-300",
  "پاسخ داده شده": "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
  "بسته شده": "border-slate-400/20 bg-slate-400/10 text-slate-300",
};

const priorityStyles: Record<Ticket["priority"], string> = {
  عادی: "text-slate-400",
  متوسط: "text-amber-300",
  فوری: "text-rose-400",
};

export default function SupportPage() {
  const [tickets, setTickets] = useState<Ticket[]>(initialTickets);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("همه");
  const [showForm, setShowForm] = useState(false);
  // درخواست انتخاب‌شده برای نمایش جزئیات
const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);

  // اطلاعات فرم ثبت درخواست
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("مشکلات فنی");
  const [priority, setPriority] = useState<Ticket["priority"]>("متوسط");
  const [description, setDescription] = useState("");

  // فیلتر کردن درخواست‌ها بر اساس جستجو و وضعیت
  const filteredTickets = useMemo(() => {
    return tickets.filter((ticket) => {
      const matchesSearch =
        ticket.title.toLowerCase().includes(search.toLowerCase()) ||
        ticket.id.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "همه" || ticket.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [tickets, search, statusFilter]);

  // ثبت آزمایشی درخواست در حافظه موقت صفحه
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!title.trim() || !description.trim()) return;

    const newTicket: Ticket = {
      id: `DSP-${1406 + tickets.length}`,
      title: title.trim(),
      category,
      priority,
      status: "در حال بررسی",
      date: new Intl.DateTimeFormat("fa-IR").format(new Date()),
      description: description.trim(),
    };

    // اضافه کردن درخواست جدید به ابتدای فهرست
    setTickets((previous) => [newTicket, ...previous]);

    // پاک کردن فرم و بستن پنجره ثبت درخواست
    setTitle("");
    setCategory("مشکلات فنی");
    setPriority("متوسط");
    setDescription("");
    setShowForm(false);
    setStatusFilter("همه");
    setSearch("");
  }

  return (
    <main
      dir="rtl"
      className="relative min-h-screen overflow-hidden bg-[#070914] text-white"
    >
      {/* نورپردازی پس‌زمینه */}
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[130px]" />
      <div className="pointer-events-none absolute -left-40 top-96 h-96 w-96 rounded-full bg-orange-500/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12 lg:py-12">

        {/* مسیر بازگشت و عنوان صفحه */}
        <div className="mb-10">
          <Link
            href="/portal/dashboard"
            className="mb-7 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-blue-300"
          >
            <ArrowRight size={17} />
            بازگشت به داشبورد
          </Link>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="mb-3 flex items-center gap-2 text-sm text-blue-400">
                <Headset size={18} />
                <span>مرکز ارتباط با مشتریان</span>
              </div>

              <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
                درخواست‌های پشتیبانی
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                درخواست‌های خود را ثبت کنید و وضعیت پیگیری و پاسخ کارشناسان
                پشتیبانی را مشاهده کنید.
              </p>
            </div>

            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
            >
              <Plus size={19} />
              ثبت درخواست جدید
            </button>
          </div>
        </div>

        {/* کارت‌های آمار درخواست‌ها */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm text-slate-400">کل درخواست‌ها</span>
              <div className="rounded-xl bg-blue-500/10 p-2.5 text-blue-400">
                <FileText size={20} />
              </div>
            </div>
            <div className="text-3xl font-black">{tickets.length}</div>
            <p className="mt-2 text-xs text-slate-500">تمام درخواست‌های ثبت‌شده</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm text-slate-400">در حال بررسی</span>
              <div className="rounded-xl bg-amber-500/10 p-2.5 text-amber-400">
                <Clock3 size={20} />
              </div>
            </div>
            <div className="text-3xl font-black">
              {tickets.filter((ticket) => ticket.status === "در حال بررسی").length}
            </div>
            <p className="mt-2 text-xs text-slate-500">منتظر بررسی کارشناسان</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm text-slate-400">پاسخ داده شده</span>
              <div className="rounded-xl bg-emerald-500/10 p-2.5 text-emerald-400">
                <CheckCircle2 size={20} />
              </div>
            </div>
            <div className="text-3xl font-black">
              {tickets.filter((ticket) => ticket.status === "پاسخ داده شده").length}
            </div>
            <p className="mt-2 text-xs text-slate-500">دارای پاسخ از پشتیبانی</p>
          </div>
        </div>

        {/* بخش جستجو و فیلتر */}
        <section className="mb-6 rounded-2xl border border-white/10 bg-white/[0.035] p-4 sm:p-5">
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <Search
                size={19}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
              />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="جستجو بر اساس عنوان یا شماره درخواست..."
                className="w-full rounded-xl border border-white/10 bg-[#0b1020] py-3.5 pr-12 pl-4 text-sm outline-none transition placeholder:text-slate-600 focus:border-blue-500/50"
              />
            </div>

            <div className="relative sm:w-56">
              <Filter
                size={17}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
              />
              <select
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
                className="w-full appearance-none rounded-xl border border-white/10 bg-[#0b1020] py-3.5 pr-11 pl-4 text-sm text-slate-300 outline-none focus:border-blue-500/50"
              >
                <option value="همه">تمام وضعیت‌ها</option>
                <option value="در حال بررسی">در حال بررسی</option>
                <option value="پاسخ داده شده">پاسخ داده شده</option>
                <option value="بسته شده">بسته شده</option>
              </select>
            </div>
          </div>
        </section>

        {/* فهرست درخواست‌ها */}
        <section className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035]">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-5 sm:px-7">
            <div>
              <h2 className="font-bold">فهرست درخواست‌ها</h2>
              <p className="mt-1 text-xs text-slate-500">
                {filteredTickets.length} درخواست قابل نمایش
              </p>
            </div>
            <MessageCircle size={21} className="text-blue-400" />
          </div>

          <div className="divide-y divide-white/[0.07]">
            {filteredTickets.length > 0 ? (
              filteredTickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="p-5 transition hover:bg-white/[0.025] sm:px-7"
                >
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                    <div className="min-w-0 flex-1">
                      <div className="mb-3 flex flex-wrap items-center gap-3">
                        <span className="text-xs font-bold text-blue-400">
                          {ticket.id}
                        </span>

                        <span
                          className={`rounded-full border px-3 py-1 text-[11px] ${statusStyles[ticket.status]}`}
                        >
                          {ticket.status}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-white">
                        {ticket.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {ticket.description}
                      </p>

                      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500">
                        <span className="flex items-center gap-1.5">
                          <FileText size={14} />
                          {ticket.category}
                        </span>

                        <span className="flex items-center gap-1.5">
                          <CalendarDays size={14} />
                          {ticket.date}
                        </span>

                        <span className={priorityStyles[ticket.priority]}>
                          اولویت: {ticket.priority}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-end">
<button
  onClick={() => setSelectedTicket(ticket)}
  className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-xs text-slate-300 transition hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-300"
>
  مشاهده جزئیات
  <ChevronLeft size={15} />
</button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center px-5 py-16 text-center">
                <div className="mb-4 rounded-2xl bg-white/5 p-4 text-slate-500">
                  <AlertCircle size={30} />
                </div>
                <h3 className="font-bold">درخواستی پیدا نشد</h3>
                <p className="mt-2 text-sm text-slate-500">
                  عبارت جستجو یا فیلتر وضعیت را تغییر دهید.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* راهنمای پشتیبانی */}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-blue-500/20 bg-blue-500/[0.06] p-6 sm:flex-row sm:items-center">
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-blue-500/15 p-3 text-blue-400">
              <Headset size={23} />
            </div>
            <div>
              <h3 className="font-bold">به راهنمایی بیشتری نیاز دارید؟</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                برای پیگیری مشکلات یا دریافت راهنمایی، درخواست پشتیبانی جدید ثبت کنید.
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowForm(true)}
            className="shrink-0 rounded-xl border border-blue-400/30 px-5 py-3 text-sm text-blue-300 transition hover:bg-blue-500/10"
          >
            ثبت درخواست
          </button>
        </div>
      </div>

      {/* پنجره ثبت درخواست جدید */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/75 p-4 backdrop-blur-sm">
          <div className="my-auto w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-[#0d1222] shadow-2xl shadow-black/50">
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <div>
                <h2 className="text-lg font-bold">ثبت درخواست پشتیبانی</h2>
                <p className="mt-1 text-xs text-slate-500">
                  اطلاعات درخواست خود را وارد کنید.
                </p>
              </div>

              <button
                onClick={() => setShowForm(false)}
                className="rounded-xl p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
                aria-label="بستن فرم"
              >
                <X size={21} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 p-6">
              {/* عنوان درخواست */}
              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  عنوان درخواست
                </label>
                <input
                  required
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  placeholder="موضوع درخواست خود را بنویسید"
                  className="w-full rounded-xl border border-white/10 bg-[#080d19] px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-600 focus:border-blue-500/60"
                />
              </div>

              {/* انتخاب دسته‌بندی و اولویت */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-slate-300">
                    دسته‌بندی درخواست
                  </label>
                  <select
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-[#080d19] px-4 py-3.5 text-sm text-slate-300 outline-none focus:border-blue-500/60"
                  >
                    <option>مشکلات فنی</option>
                    <option>درخواست خدمات</option>
                    <option>آموزش</option>
                    <option>پیشنهاد و انتقاد</option>
                    <option>سایر موارد</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-300">
                    اولویت درخواست
                  </label>
                  <select
                    value={priority}
                    onChange={(event) =>
                      setPriority(event.target.value as Ticket["priority"])
                    }
                    className="w-full rounded-xl border border-white/10 bg-[#080d19] px-4 py-3.5 text-sm text-slate-300 outline-none focus:border-blue-500/60"
                  >
                    <option value="عادی">عادی</option>
                    <option value="متوسط">متوسط</option>
                    <option value="فوری">فوری</option>
                  </select>
                </div>
              </div>

              {/* شرح کامل درخواست */}
              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  شرح درخواست
                </label>
                <textarea
                  required
                  rows={5}
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  placeholder="مشکل یا درخواست خود را با جزئیات توضیح دهید..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-[#080d19] px-4 py-3.5 text-sm leading-7 outline-none transition placeholder:text-slate-600 focus:border-blue-500/60"
                />
              </div>

              {/* دکمه‌های فرم */}
              <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 rounded-xl border border-white/10 px-5 py-3.5 text-sm text-slate-300 transition hover:bg-white/5"
                >
                  انصراف
                </button>

                <button
                  type="submit"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-bold transition hover:bg-blue-500"
                >
                  <Send size={17} />
                  ثبت آزمایشی درخواست
                </button>
              </div>

              <p className="text-center text-xs leading-6 text-amber-300/70">
                این نسخه آزمایشی است؛ درخواست فقط در حافظه موقت صفحه ذخیره می‌شود.
              </p>
            </form>
          </div>
        </div>
      )}
      {/* پنجره نمایش جزئیات درخواست */}
{selectedTicket && (
  <div className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-black/75 p-4 backdrop-blur-sm">
    <div className="relative my-auto max-h-[calc(100dvh-2rem)] w-full max-w-xl overflow-y-auto rounded-3xl border border-white/10 bg-[#101525] p-6 shadow-2xl sm:p-8">

      <button
        onClick={() => setSelectedTicket(null)}
        aria-label="بستن پنجره"
        className="absolute left-5 top-5 rounded-xl border border-white/10 p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
      >
        <X size={19} />
      </button>

      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
        <MessageCircle size={27} />
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <span className="text-sm font-bold text-blue-400">
          {selectedTicket.id}
        </span>

        <span className={`rounded-full border px-3 py-1 text-xs ${statusStyles[selectedTicket.status]}`}>
          {selectedTicket.status}
        </span>
      </div>

      <h2 className="mt-4 pl-8 text-xl font-black leading-9">
        {selectedTicket.title}
      </h2>

      <p className="mt-5 text-sm leading-8 text-slate-400">
        {selectedTicket.description}
      </p>

      <div className="mt-7 space-y-4 border-t border-white/10 pt-6">
        <div className="flex justify-between gap-3 text-sm">
          <span className="text-slate-500">دسته‌بندی</span>
          <span className="text-slate-300">{selectedTicket.category}</span>
        </div>

        <div className="flex justify-between gap-3 text-sm">
          <span className="text-slate-500">اولویت</span>
          <span className={priorityStyles[selectedTicket.priority]}>
            {selectedTicket.priority}
          </span>
        </div>

        <div className="flex justify-between gap-3 text-sm">
          <span className="text-slate-500">تاریخ ثبت</span>
          <span className="text-slate-300">{selectedTicket.date}</span>
        </div>
      </div>

      <div className="mt-8 border-t border-white/10 pt-6">
        <p className="text-xs leading-7 text-slate-500">
          اطلاعات نمایش‌داده‌شده نمونه هستند و هنوز به سامانه واقعی پشتیبانی متصل نشده‌اند.
        </p>

        <button
          onClick={() => setSelectedTicket(null)}
          className="mt-5 w-full rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold transition hover:bg-blue-500"
        >
          بستن پنجره
        </button>
      </div>
    </div>
  </div>
)}
    </main>
  );
}
