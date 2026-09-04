import { useCallback, useState } from "react";

import LanguageContext from "./LanguageContext";

import i18n, { setLanguage as changeLanguage } from "../i18n";

export default function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(i18n.language || "en");

  const setLanguage = useCallback(async (value) => {
    try {
      await changeLanguage(value);

      setLanguageState(value);
    } catch (error) {
      console.error("Failed to change language:", error);
    }
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
