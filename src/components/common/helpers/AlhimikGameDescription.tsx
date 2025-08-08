import React from "react";
import s from "./HelpersStyles.module.css"

const AlhimikGameDescription = () => {
    return (
        <div className={s.container}>
            <p>
                <strong>“Алхімік”</strong> — ігрова RPG-система, розроблена для демонстрації 9 класичних шаблонів проєктування (Design Patterns).
            </p>

            <p>Гравець грає за алхіміка, який подорожує локаціями, збирає інгредієнти, створює еліксири за рецептами та бере участь у квестах і боях з монстрами.</p>

            <h3>Реалізовані шаблони:</h3>
            <ul>
                <li>
                    <strong>Твірні:</strong> Singleton, Abstract Factory, Builder
                </li>
                <li>
                    <strong>Структурні:</strong> Facade, Decorator, Proxy
                </li>
                <li>
                    <strong>Поведінкові:</strong> Strategy, State, Chain of Responsibility
                </li>
            </ul>

            <p>Проєкт демонструє практичне застосування архітектурних принципів у розробці ігрових систем, створюючи масштабовану та підтримувану кодову базу.</p>
        </div>
    );
};

export default AlhimikGameDescription;
