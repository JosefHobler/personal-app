import React, { createContext, FC, useEffect, useState } from "react";
import { IntlProvider } from "react-intl";
import Czech from "./Locale/cs.json";
import English from "./Locale/en.json";

interface Props {
  children: React.ReactNode;
}

export const LocaleContext = createContext<{
  handleSelectLang: (newLocale: string) => void;
  locale: string;
} | null>(null);

const IntlWrapper: FC<Props> = ({ children }) => {
  const [locale, setLocale] = useState(navigator.language);
  const [lang, setLang] = useState(English);

  const handleSelectLang = (newLocale: string) => {
    setLocale(newLocale);
  };

  useEffect(() => {
    switch (locale) {
      case "cs":
        setLang(Czech);
        break;
      default:
        setLang(English);
        break;
    }
  }, [locale]);

  return (
    <IntlProvider locale={locale} messages={lang}>
      <LocaleContext.Provider value={{ handleSelectLang, locale }}>
        {children}
      </LocaleContext.Provider>
    </IntlProvider>
  );
};

export default IntlWrapper;
