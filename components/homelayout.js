import styles from './homelayout.module.css';

export default function HomeLayout({ children }) {
  return <div className={styles.container}>{children}</div>;
}