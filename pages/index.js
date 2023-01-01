import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import HomeLayout from '../components/homelayout';
import homeStyles from '../styles/home.module.css';
import utilStyles from '../styles/utils.module.css';
import { useEffect, useState } from 'react';
import { render } from 'react-dom';

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
          <span className={`${homeStyles.title}`}>Frontend Developer</span>
        </div>
      </div>
      <LinkSection />
    </>
  );
};

const LinkSection = () => {
  const [isSmallLayout, setIsSmallLayout] = useState();
  const dummyfunction = e => setIsSmallLayout(e.target.innerWidth < 601);
  useEffect(() => {
    setIsSmallLayout(window.innerWidth < 600);
    window.addEventListener('resize', dummyfunction);
    return () => window.removeEventListener('resize', dummyfunction);
  }, []);

  const LINKS = [
    <Link key="about" href="#">About</Link>,
    <Link key="work" href="#">Work</Link>,
    <Link key="projects" href="#">Projects</Link>,
    <Link key="contact" href="#">Contact</Link>
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
        isSmallLayout ? renderSmallLayout() : LINKS.map(l => l)
      }
    </nav>
  );
};