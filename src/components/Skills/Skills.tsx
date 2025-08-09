import React from "react";
import s from "./Skills.module.css";
import SkillBadge from "./SkillBadge/SkillBadge";

export enum Level {
    Novice = 1,
    Intermediate,
    Advanced,
    Expert,
}

export type SkillBadgeProps = {
    name: string,
    level: number
}

const projects: SkillBadgeProps[] = [
    {name: "C#", level: Level.Advanced},
    {name: ".NET", level: Level.Advanced},
    {name: "ASP.NET", level: Level.Intermediate},
    {name: "Entity Framework Core", level: Level.Intermediate},
    {name: "MySQL", level: Level.Intermediate},
    {name: "WPF", level: Level.Intermediate},
    {name: "HTML", level: Level.Advanced},
    {name: "CSS", level: Level.Advanced},
    {name: "JavaScript", level: Level.Advanced},
    {name: "TypeScript", level: Level.Intermediate},
    {name: "React.js", level: Level.Advanced},
    {name: "Node.js", level: Level.Intermediate},
];

const Skills = () => {
    return (
        <section className={`${s.skills}`} id="skills">
            <div className={s.skills_container}>
                {projects.map((skill, i) => {
                    return <SkillBadge key={i} name={skill.name} level={skill.level}/>
                })}
            </div>
        </section>
    );
};

export default Skills;