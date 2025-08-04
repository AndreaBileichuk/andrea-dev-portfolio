import React from "react";
import s from "./About.module.css";
import welcome_section_andrea from "./../../assets/welcome-section-andrea.jpg";

const About = () => {
    return (
        <section className={s.about} id="about">
            <div className={s.container}>
                <div className={s.photo}>
                    <img src={welcome_section_andrea} alt="Моє фото" />
                    <div className={s.photo_content}>
                        <h2>Білейчук Андреа</h2>
                        <p>Front-End та Back-End розробник. Також цікавлюсь десктопними застосунками на базі WPF.</p>
                    </div>
                </div>
                <div className={s.info}>
                    <p>
                        Я студент спеціальності <strong>Інженерія програмного забезпечення</strong> у
                        Національному університеті "Львівська політехніка". Маю глибоку зацікавленість у розробці сучасних веб- та десктопних застосунків,
                        які поєднують зручність, ефективність і користь для користувача.
                    </p>
                    <p>
                        Працюю з такими технологіями, як <strong>ASP.NET, Entity Framework Core, MySQL, JavaScript, TypeScript, React, Node.js, WPF</strong>.
                        Постійно вдосконалюю свої навички в області архітектури програмного забезпечення, баз даних, фронтенд- та серверної розробки.
                    </p>
                    <p>
                        У майбутньому прагну створювати інноваційні та корисні програмні рішення, які будуть мати позитивний вплив на суспільство.
                        Вірю, що технології — це інструмент для змін на краще.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
