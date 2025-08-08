import styles from "./Contacts.module.css";
import React from "react";
import {Contact} from "./Contacts";

type ContactItemProps = Contact;

const ContactItem = ({link, name, icon: Icon} : ContactItemProps) => {
    const lowerName = name.toLowerCase();
    const dynamicStyle = styles[lowerName] || "";

    return (
        <li>
            <a href={link} className={`${styles.contactItem} ${dynamicStyle}`} target="_blank"
               rel="noopener noreferrer">
                <Icon className={styles.icon}/>
                {name}
            </a>
        </li>
    );
}

export default ContactItem;