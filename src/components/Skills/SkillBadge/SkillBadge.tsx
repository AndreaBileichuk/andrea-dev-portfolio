import React, { useState } from "react";
import s from "./../Skills.module.css";
import { Level, SkillBadgeProps } from "../Skills";
import {useTranslation} from "react-i18next";

const SkillBadge = ({ name, level }: SkillBadgeProps) => {
    const totalBars = 4;
    const [isHovered, setIsHovered] = useState(false);
    const { t, i18n } = useTranslation();

    const levelToText = (level: number): string => {
        switch (level) {
            case Level.Novice:
                return `${t("skills.novice")}`;
            case Level.Intermediate:
                return `${t("skills.intermediate")}`;
            case Level.Advanced:
                return `${t("skills.advanced")}`;
            case Level.Expert:
                return `${t("skills.expert")}`;
            default:
                return "";
        }
    };

    return (
        <div className={s.skill_badge}>
            <div className={`${s.textOnHover} ${isHovered ? s.show : ''}`}>
                {levelToText(level)}
            </div>
            <div
                className={s.bars}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {[...Array(totalBars)].map((_, i) => (
                    <span
                        key={i}
                        className={`${s.bar} ${i < level ? s.filled : ''}`}
                    />
                ))}
            </div>
            <span className={s.label}>{name}</span>
        </div>
    );
};

export default SkillBadge;