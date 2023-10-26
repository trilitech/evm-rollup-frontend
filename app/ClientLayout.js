"use client"

import { useState } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";

export default function ClientLayout({ children }) {
  const [language, setLanguage] = useState('EN');

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <LanguageContext.Provider value={{ language, setLanguage }} >
        {children}
      </LanguageContext.Provider>
    </ThemeProvider>

  );
}
