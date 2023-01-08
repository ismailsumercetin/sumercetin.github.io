import Image from 'next/image';
import Header from '../components/header';
import utilStyles from '../styles/utils.module.css';
import aboutStyles from '../styles/about.module.css';
import Link from 'next/link';

const SKILL_LIST = [
  'HTML5',
  'CSS3 (SASS - SCSS)',
  'Javascript',
  'React',
  'Redux',
  'Next.js',
  'Styled Components',
  'Git',
  'SQL (MySQL)',
  'NPM',
  'PNPM'
];

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
        <section className={`${aboutStyles.section}`}>
          {/* <Image
            className={`${aboutStyles.myImage}`}
            src="/images/me.png"
            height={260}
            width={400}
            alt="Sümer Çetin"
          /> */}
          <article className={`${aboutStyles.article}`}>
            <p>Hi. My name is <Link href="/" className={`${aboutStyles.myName} ${utilStyles.underlinedLink}`}>Sümer</Link>.</p>
            <p>
              I am a software developer with 2+ years of experience.
              I am currently working as Frontend Developer at Jotform, a US-based company for building online forms.
            </p>
            <p>
              I am curious about web technologies and trends.
              I love learning new things, use them to solve real world problems and share my knowledge with people around me.
              Being part of a motivated team always pushes me to do better and enjoy my work more.
            </p>
            <p>
              I have a strong interest in below topics:
              <ul className={`${aboutStyles.interestsList}`}>
                <li>Fullstack Web Development</li>
                <li>Software Design</li>
                <li>SOLID Principles / Design Patterns</li>
                <li>Web Design</li>
              </ul>
            </p>
          </article>
        </section>
        <section className={`${aboutStyles.section} ${aboutStyles.technologySection}`}>
          <p>Techologies I Use</p>
          <div className={`${aboutStyles.technologyContainer} ${utilStyles.row}`}>
            {SKILL_LIST.map(s => <span>{s}</span>)}
          </div>
        </section>
        <section className={`${aboutStyles.section} ${aboutStyles.resumeSection}`}>
          <p className={`${utilStyles.row}`}>
            <Image
              className={`${aboutStyles.fadeOutRight}`}
              src="/images/arrow-right.svg"
              height={24}
              width={18}
              alt="arrow-right"
            />
            <Link href="/files/sumercetin.pdf" target="_blank" className={`${aboutStyles.resume} ${utilStyles.underlinedLink}`}>Click To See My CV</Link>
          </p>
          <p className={`${utilStyles.row}`}>
            <Image
              className={`${aboutStyles.fadeOutRight}`}
              src="/images/arrow-right.svg"
              height={24}
              width={18}
              alt="arrow-right"
            />
            <Link href="/files/sumercetin_transcript.pdf" target="_blank" className={`${aboutStyles.transcript} ${utilStyles.underlinedLink}`}>Click To See My Transcript</Link>
          </p>
        </section>
      </div>
    </>
  );
}
