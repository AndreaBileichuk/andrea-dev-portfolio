import ReactDOM from "react-dom";
import {ReactNode} from "react";
import s from "./ProjectDetailsModal.module.css"

const modalRoot = document.getElementById("modal-root");

type ProjectDetailsModalProps = {
    children: ReactNode;
    onClose: () => void;
}

const Modal = ({ children, onClose } : ProjectDetailsModalProps) => {

    if (!modalRoot) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className={s.container} onClick={onClose}>
            <div onClick={(e) => e.stopPropagation()} className={s.content}>
                {children}
            </div>
        </div>,
        modalRoot!
    );
};

export default Modal;
