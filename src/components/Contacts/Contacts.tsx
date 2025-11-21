import React from "react";
import styles from "./Contacts.module.css";
import {
    FaEnvelope,
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaPinterest,
    FaTelegram,
    FaTiktok
} from "react-icons/fa";
import ContactItem from "./ContactItem";
import type {IconType} from "react-icons";
import {SiLeetcode} from "react-icons/si";
import {useTranslation} from "react-i18next";

export type Contact = {
    link: string,
    name: string,
    icon: IconType,
}

const contacts : Contact[] = [
    { link: "https://www.linkedin.com/in/andrea-bileichuk-5a5b46365/", name: "LinkedIn", icon: FaLinkedin },
    { link: "https://mail.google.com/mail/?view=cm&fs=1&to=bilejcukandrij@gmail.com", name: "Gmail", icon: FaEnvelope },
    { link: "https://www.instagram.com/_.anndrea___/", name: "Instagram", icon: FaInstagram },
    { link: "https://github.com/AndreaBileichuk", name: "GitHub", icon: FaGithub },
    { link: "https://t.me/andreapernerovskiy", name: "Telegram", icon: FaTelegram },
    { link: "https://leetcode.com/u/Andreaaaaaaa/", name: "LeetCode", icon: SiLeetcode },
    { link: "https://www.tiktok.com/@_annddrea_", name: "Tik-Tok", icon: FaTiktok },
    { link: "https://it.pinterest.com/bilejcukandrij/", name: "Pinterest", icon: FaPinterest },
];


const Contacts = () => {
    const { t } = useTranslation();

    return (
        <>
        <section className={`${styles.contactSection}`} id="contacts">
            <h2 className={styles.title}>{t("contacts")}</h2>
            <ul className={styles.contactList}>
                {contacts.map((c, i) => {
                    return <ContactItem key={i} link={c.link} name={c.name} icon = {c.icon}/>
                })}
            </ul>
        </section>
            <footer className={styles.footer}>
                <p>
                    Copyright © 2025. Made by Bileichuk Andrea
                </p>
            </footer>
        </>
    );
};

export default Contacts;