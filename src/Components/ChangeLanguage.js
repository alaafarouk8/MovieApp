import React, { useContext } from "react";
import { languageContext } from "../contexts/languageContext";

export default function ChangeLanguage() {
  const { contextLang, setContextLang } = useContext(languageContext);

  return (
    <div>
      <button
        className="btn btn-warning" style={{ margin:10 ,width:100 }}
        onClick={() => setContextLang(contextLang === "ar" ? "en" : "ar")}
      >
        {contextLang}
      </button>
    </div>
  );
}
