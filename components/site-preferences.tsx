"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Locale = "ar" | "en";
type Preferences = {
  locale: Locale;
  toggleLocale: () => void;
  toggleTheme: () => void;
  isDark: boolean;
};

const PreferencesContext = createContext<Preferences | null>(null);

export function SitePreferences({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("ar");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.classList.toggle("dark", isDark);
  }, [locale, isDark]);

  return (
    <PreferencesContext.Provider
      value={{
        locale,
        toggleLocale: () =>
          setLocale((value) => (value === "ar" ? "en" : "ar")),
        toggleTheme: () => setIsDark((value) => !value),
        isDark,
      }}
    >
      {children}
    </PreferencesContext.Provider>
  );
}

export function useSitePreferences() {
  const context = useContext(PreferencesContext);
  if (!context)
    throw new Error("useSitePreferences must be used inside SitePreferences");
  return context;
}
