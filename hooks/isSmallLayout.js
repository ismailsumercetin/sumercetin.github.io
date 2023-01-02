import { useState, useEffect } from 'react';

export default function isSmallLayout() {
  const [isSmallLayout, setIsSmallLayout] = useState();

  const onresize = e => setIsSmallLayout(e.target.innerWidth < 601);

  useEffect(() => {
    setIsSmallLayout(window.innerWidth < 600);
    window.addEventListener('resize', onresize);
    return () => window.removeEventListener('resize', onresize);
  }, []);

  return isSmallLayout;
}
