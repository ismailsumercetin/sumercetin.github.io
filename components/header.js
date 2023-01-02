import Link from 'next/link';
import Image from 'next/image';
import MenuSection from './menusection';
import isSmallLayout from '../hooks/isSmallLayout';
import utilStyles from '../styles/utils.module.css';

export default function Header() {
  const renderLinks = () => {
    const isSmall = isSmallLayout();
    console.log
    const linkSection = (
      <nav className={`${utilStyles.row} ${utilStyles.navigationContainer}`}>
        <Link href="/about">About</Link>
        <Link href="/work">Work</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
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

