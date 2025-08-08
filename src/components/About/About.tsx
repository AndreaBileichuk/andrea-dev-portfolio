import React from "react";
import s from "./About.module.css";
import welcome_section_andrea from "../../assets/images/welcome-section-andrea.jpg";
import {Trans, useTranslation} from "react-i18next";

const About = () => {
    const {t, i18n} = useTranslation();

    return (
        <section className={s.about} id="about">
            <div className={s.container}>
                <div className={s.photo}>
                    <img src={welcome_section_andrea} alt={t("about.welcome_section_andrea_alt")}/>
                    <div className={s.photo_content}>
                        <h2>{t("about.full_name")}</h2>
                        <p>{t("about.interests")}</p>
                    </div>
                </div>
                <div className={s.info}>
                    <p>
                        <Trans
                            i18nKey="about.information1"
                            components={{1: <strong/>}}
                        />
                    </p>
                    <p>
                        <Trans
                            i18nKey="about.information2"
                            components={{1: <strong/>}}
                        />
                    </p>
                    <p>
                        <Trans
                            i18nKey="about.information3"
                            components={{1: <strong/>}}
                        />
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
