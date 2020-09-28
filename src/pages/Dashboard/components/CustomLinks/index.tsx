import React, { FC } from 'react';
import dayjs from 'dayjs'

import styles from './index.less'

export interface LinkItem {
  key?: React.ReactText;
  url?: string;
  urlTitle?: string;
  date?: string | number;
}

export interface CustomLinksProps {
  style?: React.CSSProperties;
  className?: string;
  links?: LinkItem[];
}

export const CustomLinks: FC<CustomLinksProps> = ({ style, className, links }) => (
  <section className={className} style={style}>
    {links?.map((link, index) => {
      return (
        <div className={styles.linkContainer} key={link.key || index}>
          <a className={styles.link} href={link.url} target="_blank">{ link.urlTitle }</a>
          {link.date ? (
            <div className={styles.date}>
              {dayjs(link.date).format('YYYY-MM-DD')}
            </div>
          ) : null}
        </div>
      )
    })}
  </section>
)

CustomLinks.displayName = 'CustomLinks'
