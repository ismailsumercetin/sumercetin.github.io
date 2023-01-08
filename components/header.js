import { useRouter } from "next/router";
import Link from 'next/link';
import Image from 'next/image';
import MenuSection from './menusection';
import isSmallLayout from '../hooks/isSmallLayout';
import utilStyles from '../styles/utils.module.css';
import * as Utils from '../utils';

export default function Header() {
  const renderLinks = () => {
    const isSmall = isSmallLayout();
    const linkSection = (
      <nav className={`${utilStyles.row} ${utilStyles.navigationContainer}`}>
        <Link className={`${Utils.isActiveClass('/about')} ${utilStyles.underlinedLink}`} href="/about">About</Link>
        <Link className={`${Utils.isActiveClass('/work')} ${utilStyles.underlinedLink}`} href="#">Work</Link>
        <Link className={`${Utils.isActiveClass('/projects')} ${utilStyles.underlinedLink}`} href="#">Projects</Link>
        <Link className={`${Utils.isActiveClass('/contact')} ${utilStyles.underlinedLink}`} href="#">Contact</Link>
      </nav>
    );
    return ( isSmall ? <MenuSection /> : linkSection)
  };
  return (
    <header className={`${utilStyles.header} ${utilStyles.container} ${utilStyles.row}`}>
      <Link href="/">
        <Image
          className={`${utilStyles.logo}`}
          src="/images/sumercetin.svg"
          height={72}
          width={72}
          alt="Sümer Çetin"
        />
      </Link>
      {renderLinks()}
    </header>
  );
}

