import React from "react";
import personal_brand_logo from "../../assets/images/personal_brand.svg"
import s from "./Header.module.css"
import { useTranslation } from "react-i18next";
import "./../../i18n";
import LanguageToggle from "../common/LanguageToggle/LaguageToggle";

const Header = () => {
    const { t, i18n } = useTranslation();

    return (
        <header className={s.header}>
            <div>
                <a href="#welcome">
                    <img
                        className={s.personal_brand_logo}
                        src={personal_brand_logo}
                        alt={t("header.personal_brand_logo")}/>
                </a>
            </div>
            <nav className={s.nav}>
                <ul>
                    <li><a href="#about">{t("header.about_me")}</a></li>
                    <li><a href="#skills">{t("header.skills")}</a></li>
                    <li><a href="#projects">{t("header.projects")}</a></li>
                    <li><a href="#contacts">{t("header.contacts")}</a></li>
                </ul>
            </nav>

            <LanguageToggle />
        </header>
    );
};

export default Header;
