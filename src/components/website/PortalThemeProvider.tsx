
"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

// نوع پوسته‌های قابل استفاده در پورتال
export type PortalTheme = "dark" | "light";

type PortalThemeContextType = {
  theme: PortalTheme;
  setTheme: (theme: PortalTheme) => void;
};

const PortalThemeContext = createContext<PortalThemeContextType | null>(null);

const STORAGE_KEY = "dolphin-portal-settings";

export default function PortalThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [theme, setThemeState] = useState<PortalTheme>("dark");
  const [isReady, setIsReady] = useState(false);

  // دریافت پوسته ذخیره‌شده هنگام ورود به پورتال
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);

      if (saved) {
        const parsed = JSON.parse(saved);

        if (parsed.theme === "light" || parsed.theme === "dark") {
          setThemeState(parsed.theme);
        }
      }
    } catch {
      // در صورت نامعتبر بودن اطلاعات، پوسته تاریک فعال می‌ماند
    }

    setIsReady(true);
  }, []);

  // اعمال پوسته روی کل صفحه و ذخیره انتخاب کاربر
  const setTheme = useCallback((nextTheme: PortalTheme) => {
    setThemeState(nextTheme);

    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      const currentSettings = saved ? JSON.parse(saved) : {};

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          ...currentSettings,
          theme: nextTheme,
        })
      );
    } catch {
      // اگر ذخیره‌سازی ممکن نبود، پوسته در همین نشست اعمال می‌شود
    }
  }, []);

  // هماهنگ کردن پوسته با ویژگی سراسری صفحه
  useEffect(() => {
    if (!isReady) return;

    document.documentElement.setAttribute("data-portal-theme", theme);
  }, [theme, isReady]);

  return (
    <PortalThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </PortalThemeContext.Provider>
  );
}

// هوک دسترسی صفحات پورتال به پوسته فعال
export function usePortalTheme() {
  const context = useContext(PortalThemeContext);

  if (!context) {
    throw new Error(
      "usePortalTheme باید داخل PortalThemeProvider استفاده شود."
    );
  }

  return context;
}
