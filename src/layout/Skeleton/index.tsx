import React, { FC, useState, useEffect } from 'react';
import { observer } from 'mobx-react';

import { Header } from './Header';
import { Sidebar, UserInfoProps } from './Sidebar';

import { SkeletonStore } from './skeleton-store';
import styles from './index.less';

interface SkeletonProps {
  children?: React.ReactChild;
  userInfo?: UserInfoProps;
}

const links = [
  {
    href: 'https://kaviilee.github.io/blog',
    label: 'Blog',
    isBlank: true,
  },
  {
    href: 'https://github.com/kaviilee',
    label: 'Github',
    isBlank: true,
  },
];

export function Skeleton({ children, userInfo }: SkeletonProps) {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    setTimeout(() => {
      setCollapsed(false);
    }, 1000);
  }, []);

  return (
    <section className={styles.container}>
      <Sidebar collapsed={collapsed} userInfo={userInfo} />
      <section className={styles.main}>
        <Header collapsed={collapsed} links={links} toggleCollapsed={toggleCollapsed} />
        <main className={styles.content}>{children}</main>
      </section>
    </section>
  );
}

Skeleton.displayName = 'Skeleton';

export function createSkeleton() {
  const store = new SkeletonStore();
  store.initUserInfo();

  const SkeletonImpl: FC<SkeletonProps> = (props) => (
    <Skeleton userInfo={store.githubUserInfo} {...props} />
  );

  return observer(SkeletonImpl);
}

export default createSkeleton();
