import React, { useEffect } from 'react';
import { Link, LinkProps as ReactLinkProps } from 'react-router-dom';

import styles from './index.css';

interface LinkProps {
  name: string;
  href?: string;
  target?: string;
  to?: ReactLinkProps['to'];
}

const links: LinkProps[] = [
  {
    name: 'Blog',
    href: 'https://kaviilee.github.io/blog',
    // target: '_blank',
  },
  {
    name: 'Demos',
    to: { pathname: 'content' },
  },
  {
    name: 'Github',
    href: 'https://github.com/kaviilee',
    target: '_blank',
  },
  {
    name: 'QQ',
    href: 'tencent://message/?uin=756281971&Menu=yes',
  },
];

export const Introduction = () => {
  useEffect(() => {
    const { classList } = document.body;
    classList.add(styles.introduction);

    return function removeClass() {
      classList.remove(styles.introduction);
    };
  }, []);

  return (
    <main className={styles.container}>
      <section className={styles.card}>
        <h1 className={styles.name}>
          Kaviilee / <span className={styles.desc}>Web Developer</span>
        </h1>
        <nav className={styles.nav}>
          {links.map(({ name, href, to, ...restProps }) =>
            to ? (
              <Link key={name} className={styles.navItem} to={to}>
                {name}
              </Link>
            ) : (
              <a key={name} className={styles.navItem} href={href} {...restProps}>
                {name}
              </a>
            ),
          )}
        </nav>
      </section>
    </main>
  );
};

export default Introduction;
