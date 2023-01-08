import { useState } from 'react';
import Link from 'next/link';
import styles from './menusection.module.css';
import utilStyles from '../styles/utils.module.css';
import * as Utils from '../utils';
import Image from 'next/image';

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
            <Image
                src="/images/close-icon.svg"
                height={36}
                width={36}
                alt="Close Icon"
                onClick={() => toggleMenu(isMenuOpened, setIsMenuOpened)}
            />
        </div>
    );
};

const MenuContainer = () => {
    const LINKS = [
        'about',
        'work',
        'projects',
        'contact'
    ];
    return (
        <div className={`${styles.menuContainer} ${utilStyles.col}`}>
            {LINKS.map(title => (
                <Link
                  onClick={() => toggleMenu(isMenuOpened, setIsMenuOpened)}
                  key={`${title}`}
                  className={`${Utils.isActiveClass(`/${title}`)} ${utilStyles.underlinedLink}`}
                  href={`/${title}`}>
                    {`${title.charAt(0).toUpperCase()}${title.slice(1)}`}
                </Link>
            ))}
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
