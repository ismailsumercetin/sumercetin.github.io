import Link from 'next/link';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';

export default function Header() {
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
      <nav className={`${utilStyles.row} ${utilStyles.navigationContainer}`}>
        <Link href="/about">About</Link>
        <Link href="/work">Work</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}

