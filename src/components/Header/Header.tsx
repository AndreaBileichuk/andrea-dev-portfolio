import React from "react";
import personal_brand_logo from "./../../assets/personal_brand.svg"
import s from "./Header.module.css"

const Header = () => {
    return (
        <header className={s.header}>
            <div>
                <img className={s.personal_brand_logo} src={personal_brand_logo} alt="My brand's personal logo"/>
            </div>
            <nav className={s.nav}>
                <ul>
                    <li><a href="#about">Про мене</a></li>
                    <li><a href="#skills">Мої навички</a></li>
                    <li><a href="#projects">Проекти</a></li>
                    <li><a href="#contacts">Контакти</a></li>
                </ul>
            </nav>

            <div className={s.language_toggle}>
                <div className={s.language}>EN</div>
                <div className={`${s.language} ${s.active}`}>UA</div>
            </div>
        </header>
    );
};

export default Header;
