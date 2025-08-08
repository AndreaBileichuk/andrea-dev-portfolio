import React from "react";
import {ProjectItemData} from "../Projects";
import s from "./../Projects.module.css"
import Modal from "../../common/Modal/ProjectDetailsModal";

const ProjectItem = ({name, Description, previewImage, video, technologies, gitHubRepo}: ProjectItemData) => {
    const [showDetail, setShowDetail] = React.useState(false);

    return (
        <>
            <section className={s.project_item} onClick={() => setShowDetail(true)}>
                <img src={previewImage} alt=""/>
                <h2>{name}</h2>
            </section>
            {showDetail && (
                <Modal onClose={() => setShowDetail(false)}>
                    <div className={s.modal_content}>
                        <video src={video} controls></video>
                        <h2>{name}</h2>
                        <Description />
                        <div className={s.modal_technologies}>
                            <h3>Technologies:</h3>
                            {technologies.map((t, index) =>
                                <div key={index} className={s.modal_technology_tag}>{t}</div>
                            )}
                        </div>
                        <a className={s.git_hub_repo} href={gitHubRepo} target="_blank" rel="noopener noreferrer">Go to
                            github</a>
                    </div>
                </Modal>
            )}
        </>
    );
};

export default ProjectItem;