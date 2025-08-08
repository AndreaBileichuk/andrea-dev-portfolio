import React from "react";
import s from "./Welcome.module.css";
import welcome_section_andrea from "../../assets/images/welcome-section-andrea.jpg"

const Welcome = () => {
    return (
        <section className={`${s.welcome}`} id="welcome">
            <div className={s.textContent}>
                <h1 className={s.title}>
                    <span className={s.greeting}>Вітаю!</span>
                    <span className={s.name}>Я Andrea</span>
                    <span className={s.subtitle}>Радий бачити вас на моєму сайті-портфоліо</span>
                </h1>

                <p className={s.description}>
                    Тут ви маєте змогу побачити мої <span className={s.highlight}>навички</span>,
                    познайомитись з моїми <span className={s.highlight}>персональними проєктами</span>,
                    і також отримати мої <span className={s.highlight}>контакти</span> щоб зв'язатись зі мною
                </p>

                <div className={s.cta}>
                    <button className={s.primaryBtn}>
                        <span>Переглянути проекти</span>
                        <div className={s.btnIcon}>→</div>
                    </button>
                </div>
            </div>

            <div className={s.avatarContainer}>
                <div className={s.avatar}>
                    <div className={s.avatarImage}>
                        <img src={welcome_section_andrea} alt="Personal avatar"/>
                    </div>
                    <div className={s.avatarRing}></div>
                    <div className={s.avatarGlow}></div>
                </div>
            </div>
        </section>
    );
};

export default Welcome;