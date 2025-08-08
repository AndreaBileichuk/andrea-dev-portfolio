import React from "react";
import s from "./HelpersStyles.module.css"
import {Trans, useTranslation} from "react-i18next";

const AlhimikGameDescription = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className={s.container}>
            <p>
                <Trans i18nKey="projects.alhimik_game.intro" components={{1: <strong/>}}/>
            </p>
            <p>{t("projects.alhimik_game.story")}</p>
            <h3>{t("projects.alhimik_game.patterns_title")}</h3>
            <ul>
                <li><Trans i18nKey="projects.alhimik_game.patterns_creational" components={{1: <strong/>}}/></li>
                <li><Trans i18nKey="projects.alhimik_game.patterns_structural" components={{1: <strong/>}}/></li>
                <li><Trans i18nKey="projects.alhimik_game.patterns_behavioral" components={{1: <strong/>}}/></li>
            </ul>
            <p>{t("projects.alhimik_game.ending")}</p>
        </div>
    );
};

export default AlhimikGameDescription;
