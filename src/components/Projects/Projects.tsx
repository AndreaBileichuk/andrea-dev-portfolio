import React, {JSX, ReactNode} from "react";
import s from "./Projects.module.css"
import ProjectItem from "./ProjectItem/ProjectItem";
import alhimik_project_preview from "../../assets/images/alhimik_project_preview.png"
import alhimik_project_video from "./../../assets/videos/alhimik_project_video.mp4"
import AlhimikGameDescription from "../common/helpers/AlhimikGameDescription";

export type ProjectItemData = {
    name: string,
    Description: () => JSX.Element,
    previewImage: string,
    video: string,
    technologies: string[],
    gitHubRepo: string
}

const projectsData: ProjectItemData[] = [
    {
        name: "Alhimik Game",
        Description: AlhimikGameDescription,
        previewImage: alhimik_project_preview,
        video: alhimik_project_video,
        technologies: ["WPF", "C#", "GOF Patterns"],
        gitHubRepo: "https://github.com/AndreaBileichuk/alhimikGame"
    }
];

const Projects = () => {
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