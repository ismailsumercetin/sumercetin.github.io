import { useRouter } from 'next/router';
import utilStyles from '../styles/utils.module.css';

export const isActiveClass = path => {
  const currentPath = useRouter().asPath;
  return currentPath === path ? `${utilStyles.activeLink}` : '';
};
