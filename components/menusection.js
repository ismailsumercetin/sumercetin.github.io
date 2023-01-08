import { useState } from 'react';
import Link from 'next/link';
import styles from './menusection.module.css';
import utilStyles from '../styles/utils.module.css';
import * as Utils from '../utils';

const HamburgerButton = () => {
    return (
        <div className={`${styles.hamburgerButton} ${utilStyles.col}`}>
            <span className={`${styles.hamburgerButtonLine}`}></span>
            <span className={`${styles.hamburgerButtonLine}`}></span>
            <span className={`${styles.hamburgerButtonLine}`}></span>
        </div>
    )
};

const toggleMenu = (isMenuOpened, setIsMenuOpened) => isMenuOpened && setIsMenuOpened(!isMenuOpened);

const CloseButton = ({ isMenuOpened, setIsMenuOpened }) => {
    return (
        <div className={`${styles.closeButton}`}>
            <span className={`${styles.closeButtonText}`} onClick={() => toggleMenu(isMenuOpened, setIsMenuOpened)}>
                X
            </span>
        </div>
    );
};

const MenuContainer = () => {
    const LINKS = [
        <Link onClick={() => toggleMenu(isMenuOpened, setIsMenuOpened)} key="about" className={`${Utils.isActiveClass('/about')} ${utilStyles.underlinedLink}`} href="/about">About</Link>,
        <Link onClick={() => toggleMenu(isMenuOpened, setIsMenuOpened)} key="work" className={`${Utils.isActiveClass('/work')} ${utilStyles.underlinedLink}`} href="#">Work</Link>,
        <Link onClick={() => toggleMenu(isMenuOpened, setIsMenuOpened)} key="projects" className={`${Utils.isActiveClass('/projects')} ${utilStyles.underlinedLink}`} href="#">Projects</Link>,
        <Link onClick={() => toggleMenu(isMenuOpened, setIsMenuOpened)} key="contact" className={`${Utils.isActiveClass('/contact')} ${utilStyles.underlinedLink}`} href="#">Contact</Link>
    ];
    return (
        <div className={`${styles.menuContainer} ${utilStyles.col}`}>
            {LINKS.map(l => l)}
        </div>
    );
};

export default function MenuSection() {
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const isMenuOpenedClass = isMenuOpened ? `${styles.opened}` : '';
    return (
        <div className={`${styles.menuSection} ${isMenuOpenedClass}`} onClick={() => !isMenuOpened && setIsMenuOpened(!isMenuOpened)}>
            {isMenuOpened ? <CloseButton isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} /> : <HamburgerButton />}
            {isMenuOpened ? <MenuContainer /> : ''}
        </div>
    );
}
