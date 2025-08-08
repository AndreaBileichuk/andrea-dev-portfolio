import React, { useState } from "react";
import s from "./../../Header/Header.module.css";
import i18n from "i18next";

export default function LanguageToggle() {
    const [lang, setLang] = useState("ua"); // default language

    const handleToggle = (newLang : string) => {
        setLang(newLang);
        i18n.changeLanguage(newLang.toLowerCase());
    };

    return (
        <div className={s.language_toggle}>
            <div
                className={`${s.language} ${lang === "ua" ? s.active : ""}`}
                onClick={() => handleToggle("ua")}
            >
                UA
            </div>
            <div
                className={`${s.language} ${lang === "en" ? s.active : ""}`}
                onClick={() => handleToggle("en")}
            >
                EN
            </div>
        </div>
    );
}
