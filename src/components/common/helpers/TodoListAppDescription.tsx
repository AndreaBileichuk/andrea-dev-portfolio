import React from "react";
import s from "./HelpersStyles.module.css";
import { Trans, useTranslation } from "react-i18next";

const TodoListAppDescription = () => {
    const { t } = useTranslation();

    return (
        <div className={s.container}>
            <p>
                {/* Intro: "Я розробив комплексну систему..." */}
                <Trans i18nKey="projects.todo_list.intro" components={{ 1: <strong /> }} />
            </p>

            {/* Features: "Додаток дозволяє створювати списки..." */}
            <p>{t("projects.todo_list.features")}</p>

            <h3>{t("projects.todo_list.technologies_title")}</h3>
            <ul>
                {/* Technologies: ASP.NET, EF Core, PostgreSQL, Identity */}
                <li><Trans i18nKey="projects.todo_list.tech_aspnet" components={{ 1: <strong /> }} /></li>
                <li><Trans i18nKey="projects.todo_list.tech_ef" components={{ 1: <strong /> }} /></li>
                <li><Trans i18nKey="projects.todo_list.tech_postgres" components={{ 1: <strong /> }} /></li>
                <li><Trans i18nKey="projects.todo_list.tech_identity" components={{ 1: <strong /> }} /></li>
            </ul>

            <h3>{t("projects.todo_list.capabilities_title")}</h3>
            <ul>
                {/* Capabilities: Lists, Tasks, Search, Tags, Auth */}
                <li>{t("projects.todo_list.capability_lists")}</li>
                <li>{t("projects.todo_list.capability_tasks")}</li>
                <li>{t("projects.todo_list.capability_search")}</li>
                <li>{t("projects.todo_list.capability_comments")}</li>
                <li>{t("projects.todo_list.capability_auth")}</li>
            </ul>

            {/* Ending: "Цей проєкт демонструє..." */}
            <p>{t("projects.todo_list.ending")}</p>
        </div>
    );
};

export default TodoListAppDescription;