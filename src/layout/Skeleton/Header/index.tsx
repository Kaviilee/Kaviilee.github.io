import React, { FC } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

import styles from './index.less';

interface LinkItemProps {
  href: string;
  label: string;
  isBlank: boolean;
}

interface HeaderProps {
  links?: LinkItemProps[];
  collapsed?: boolean;
  toggleCollapsed?: () => void;
}

export const Header: FC<HeaderProps> = React.memo(
  ({ collapsed = true, links = [], toggleCollapsed }) => (
    <header className={styles.header}>
      <span className={styles.headerTrigger} onClick={toggleCollapsed}>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
      </span>
      <ul className={styles.links}>
        {links.map((item, idx) => {
          const aProps = {
            className: styles.link,
            href: item.href,
            ...(item.isBlank ? { target: '_blank' } : {}),
          };
          return (
            <a key={idx} {...aProps}>{item.label}</a>
          )
        })}
      </ul>
    </header>
  )
);

Header.displayName = 'Header';
