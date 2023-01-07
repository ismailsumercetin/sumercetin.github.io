import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import isSmallLayout from '../hooks/isSmallLayout';
import HomeLayout from '../components/homelayout';
import homeStyles from '../styles/home.module.css';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <HomeLayout>
      <Head>
        <title>Sümer Çetin</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/sumercetin.svg"></link>
      </Head>
      <IntroSection />
    </HomeLayout>
  );
}

const IntroSection = () => {
  return (
    <>
      <div className={`${utilStyles.row} ${homeStyles.intro}`}>
        <Image
          className={`${homeStyles.logo}`}
          src="/images/sumercetin.svg"
          height={120}
          width={120}
          alt="Sümer Çetin"
        />
        <div className={`${utilStyles.col} ${homeStyles.introTextContainer}`}>
          <span className={`${homeStyles.name}`}>Sümer Çetin</span>
          <span className={`${homeStyles.title}`}>Software Developer</span>
        </div>
      </div>
      <LinkSection />
    </>
  );
};

const LinkSection = () => {
  const isSmall = isSmallLayout();

  const LINKS = [
    <Link key="about" className={`${utilStyles.underlinedLink}`} href="/about">About</Link>,
    <Link key="work" className={`${utilStyles.underlinedLink}`} href="#">Work</Link>,
    <Link key="projects" className={`${utilStyles.underlinedLink}`} href="#">Projects</Link>,
    <Link key="contact" className={`${utilStyles.underlinedLink}`} href="#">Contact</Link>
  ];

  const renderSmallLayout = () => (
    <>
      <div className={`${utilStyles.col}`}>
        {LINKS.slice(0, 2).map(l => l)}
      </div>
      <div className={`${utilStyles.col}`}>
        {LINKS.slice(2, 4).map(l => l)}
      </div>
    </>
  );

  return (
    <nav className={`${utilStyles.row} ${homeStyles.linkContainer}`}>
      {
        isSmall ? renderSmallLayout() : LINKS.map(l => l)
      }
    </nav>
  );
};