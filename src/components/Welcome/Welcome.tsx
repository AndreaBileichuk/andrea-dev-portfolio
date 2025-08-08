import React from "react";
import s from "./Welcome.module.css";
import welcome_section_andrea from "../../assets/images/welcome-section-andrea.jpg"
import {Trans, useTranslation} from "react-i18next";

const Welcome = () => {
    const { t, i18n } = useTranslation();

    return (
        <section className={`${s.welcome}`} id="welcome">
            <div className={s.textContent}>
                <h1 className={s.title}>
                    <span className={s.greeting}>{t("welcome.greeting")}</span>
                    <span className={s.name}>{t("welcome.name")}</span>
                    <span className={s.subtitle}>{t("welcome.subtitle")}</span>
                </h1>

                <p className={s.description}>
                    <Trans
                        i18nKey="welcome.description"
                        components={{ 1: <span className={s.highlight} /> }}
                    />
                </p>

                <div className={s.cta}>
                    <a className={s.primaryBtn} href="#projects">
                        <span>{t("welcome.look_at_projects")}</span>
                        <div className={s.btnIcon}>→</div>
                    </a>
                </div>
            </div>

            <div className={s.avatarContainer}>
                <div className={s.avatar}>
                    <div className={s.avatarImage}>
                        <img src={welcome_section_andrea} alt={t("welcome.welcome_section_andrea")}/>
                    </div>
                    <div className={s.avatarRing}></div>
                    <div className={s.avatarGlow}></div>
                </div>
            </div>
        </section>
    );
};

export default Welcome;