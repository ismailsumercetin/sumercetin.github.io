import Head from 'next/head';
import Image from 'next/image';
import HomeLayout from '../components/homelayout';
import homeStyles from '../styles/home.module.css';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <HomeLayout>
      <Head>
        <title>Sümer Çetin</title>
      </Head>
      <IntroSection />
    </HomeLayout>
  );
}

const IntroSection = () => {
  return (
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
  );
}