import Image from 'next/image';
import Header from '../components/header';
import utilStyles from '../styles/utils.module.css';
import aboutStyles from '../styles/about.module.css';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
          background-color: #000;
        }
      `}</style>
      <Header />
      <div className={`${utilStyles.container}`}>
        <section className={`${aboutStyles.section} ${aboutStyles.row}`}>
          <Image
            className={`${aboutStyles.myImage}`}
            src="/images/me.png"
            height={260}
            width={400}
            alt="Sümer Çetin"
          />
          <article className={`${aboutStyles.article}`}>
            <p>Hi. My name is <Link href="/" className={`${aboutStyles.myName}`}>Sümer</Link>.</p>
            <p>
              I am a frontend developer with 2+ years of experience.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
