import { createContext, useState, useEffect } from "react";

export const DataContext = createContext({});

const DataProvider = ({ children }) => {
  const languages = [
    { code: "en", label: "English", flag: "us" }, 
    { code: "bg", label: "Bulgarian", flag: "bg" },
  ];

  const savedLanguage = localStorage.getItem("language");
  const [language, setLanguage] = useState(
    savedLanguage ? JSON.parse(savedLanguage) : languages[0]
  );

  useEffect(() => {
    localStorage.setItem("language", JSON.stringify(language));
  }, [language]);

  return (
    <DataContext.Provider
      value={{
        language,
        setLanguage,
        languages,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
