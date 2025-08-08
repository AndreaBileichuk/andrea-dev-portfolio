import React, {JSX, ReactNode} from "react";
import s from "./Projects.module.css"
import ProjectItem from "./ProjectItem/ProjectItem";
import alhimik_project_preview from "../../assets/images/alhimik_project_preview.png"
import alhimik_project_video from "./../../assets/videos/alhimik_project_video.mp4"
import AlhimikGameDescription from "../common/helpers/AlhimikGameDescription";

import simple_code_project from "./../../assets/images/simple_code_project.png";
import simple_code_project_video from "./../../assets/videos/simple_code_project.mp4"
import SimpleCodeEditorDescription from "../common/helpers/SimpleCodeEditorDescription";

import {useTranslation} from "react-i18next";

export type ProjectItemData = {
    name: string,
    Description: () => JSX.Element,
    previewImage: string,
    video: string,
    technologies: string[],
    gitHubRepo: string
}

const Projects = () => {
    const { t, i18n } = useTranslation();
    const projectsData: ProjectItemData[] = [
        {
            name: `${t("projects.simple_code.name")}`,
            Description: SimpleCodeEditorDescription,
            previewImage: simple_code_project,
            video: simple_code_project_video,
            technologies: ["WPF", "C#", "MVVM"],
            gitHubRepo: "https://github.com/AndreaBileichuk/simpleCodeEditor",
        },
        {
            name: `${t("projects.alhimik_game.name")}`,
            Description: AlhimikGameDescription,
            previewImage: alhimik_project_preview,
            video: alhimik_project_video,
            technologies: ["WPF", "C#", "GOF Patterns"],
            gitHubRepo: "https://github.com/AndreaBileichuk/alhimikGame",
        }
    ];

    return (
        <section className={s.projects} id="projects">
            {projectsData.map((project, index) => (
                <ProjectItem
                    key={index}
                    name={project.name}
                    Description={project.Description}
                    previewImage={project.previewImage}
                    video={project.video}
                    technologies={project.technologies}
                    gitHubRepo={project.gitHubRepo}
                />
            ))}
        </section>
    );
};

export default Projects;