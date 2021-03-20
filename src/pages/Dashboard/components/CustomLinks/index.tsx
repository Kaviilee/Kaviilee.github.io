import React from 'react';
import dayjs from 'dayjs';
// import * as PropTypes from 'prop-types';

import styles from './index.less';

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

export const CustomLinks = ({ style, className, links }: CustomLinksProps) => (
  <section className={className} style={style}>
    {links?.map((link, index) => {
      return (
        <div className={styles.linkContainer} key={link.key || index}>
          {
            link?.url ?
              <a className={styles.link} href={link.url} target="_blank" rel="noreferrer">
                {link.urlTitle}
              </a>
            : <span>{ link.urlTitle }</span>
          }
          {link.date ? (
            <div className={styles.date}>{dayjs(link.date).format('YYYY-MM-DD')}</div>
          ) : null}
        </div>
      );
    })}
  </section>
);

CustomLinks.displayName = 'CustomLinks';
