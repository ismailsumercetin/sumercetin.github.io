import { useRouter } from "next/router";
import Link from 'next/link';
import Image from 'next/image';
import MenuSection from './menusection';
import isSmallLayout from '../hooks/isSmallLayout';
import utilStyles from '../styles/utils.module.css';

export default function Header() {
  const renderLinks = () => {
    const isSmall = isSmallLayout();
    const isActiveClass = path => {
      const currentPath = useRouter().asPath;
      return currentPath === path ? `${utilStyles.activeLink}` : '';
    };
    const linkSection = (
      <nav className={`${utilStyles.row} ${utilStyles.navigationContainer}`}>
        <Link className={`${isActiveClass('/about')}`} href="/about">About</Link>
        <Link className={`${isActiveClass('/work')}`} href="/work">Work</Link>
        <Link className={`${isActiveClass('/projects')}`} href="/projects">Projects</Link>
        <Link className={`${isActiveClass('/contact')}`} href="/contact">Contact</Link>
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

