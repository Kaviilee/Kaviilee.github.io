import React, { FC } from 'react';
import classnames from 'classnames'

import { CardProps } from './index.d'

import styles from './index.less'

export const Card: FC<CardProps> = ({ title, style, bodyStyle, className, bordered, children }) => (
  <section className={classnames(styles.card, className, {
    [styles.bordered]: bordered !== false
  })} style={style}>
    <header className={classnames(styles.cardHeader, styles.title)}>
      { title }
    </header>
    <main className={styles.content} style={bodyStyle}>{ children }</main>
  </section>
)


Card.displayName = 'Card';

export default Card;
