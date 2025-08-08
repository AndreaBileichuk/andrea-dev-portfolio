import React from "react";
import s from "./HelpersStyles.module.css";
import { Trans, useTranslation } from "react-i18next";

const SimpleCodeEditorDescription = () => {
    const { t } = useTranslation();

    return (
        <div className={s.container}>
            <p>
                <Trans i18nKey="projects.simple_code.intro" components={{ 1: <strong /> }} />
            </p>
            <p>{t("projects.simple_code.features")}</p>
            <h3>{t("projects.simple_code.technologies_title")}</h3>
            <ul>
                <li><Trans i18nKey="projects.simple_code.tech_csharp" components={{ 1: <strong /> }} /></li>
                <li><Trans i18nKey="projects.simple_code.tech_wpf" components={{ 1: <strong /> }} /></li>
                <li><Trans i18nKey="projects.simple_code.tech_mvvm" components={{ 1: <strong /> }} /></li>
                <li><Trans i18nKey="projects.simple_code.tech_gpp" components={{ 1: <strong /> }} /></li>
            </ul>
            <h3>{t("projects.simple_code.capabilities_title")}</h3>
            <ul>
                <li>{t("projects.simple_code.capability_create_project")}</li>
                <li>{t("projects.simple_code.capability_open_project")}</li>
                <li>{t("projects.simple_code.capability_code_editing")}</li>
                <li>{t("projects.simple_code.capability_compile_run")}</li>
                <li>{t("projects.simple_code.capability_sync")}</li>
            </ul>
            <p>{t("projects.simple_code.ending")}</p>
        </div>
    );
};

export default SimpleCodeEditorDescription;
