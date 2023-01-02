import { useState } from 'react';
import styles from './menusection.module.css';
import utilStyles from '../styles/utils.module.css';

const HamburgerButton = () => {
    return (
        <div className={`${styles.hamburgerButton} ${utilStyles.col}`}>
            <span className={`${styles.hamburgerButtonLine}`}></span>
            <span className={`${styles.hamburgerButtonLine}`}></span>
            <span className={`${styles.hamburgerButtonLine}`}></span>
        </div>
    )
};

const CloseButton = ({ isMenuOpened, setIsMenuOpened }) => {
    return (
        <div className={`${styles.closeButton}`}>
            <span className={`${styles.closeButtonText}`} onClick={() => isMenuOpened && setIsMenuOpened(!isMenuOpened)}>
                X
            </span>
        </div>
    );
};

export default function MenuSection() {
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const isMenuOpenedClass = isMenuOpened ? `${styles.opened}` : '';
    return (
        <div className={`${styles.menuSection} ${isMenuOpenedClass}`} onClick={() => !isMenuOpened && setIsMenuOpened(!isMenuOpened)}>
            {isMenuOpened ? <CloseButton isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} /> : <HamburgerButton />}
        </div>
    );
}
