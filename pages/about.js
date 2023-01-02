import Header from '../components/header';
import utilStyles from '../styles/utils.module.css';

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
        
      </div>
    </>
  );
}
