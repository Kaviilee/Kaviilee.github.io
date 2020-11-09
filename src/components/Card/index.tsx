import React from 'react';
import classnames from 'classnames'

import styles from './index.less'

export interface CardProps {
  title?: string;
  className?: string;
  bordered?: boolean;
  style?: React.CSSProperties;
  bodyStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

export function Card ({ title, style, bodyStyle, className, bordered, children }: CardProps){
  return (
    <section className={classnames(styles.card, className, {
      [styles.bordered]: bordered !== false
    })} style={style}>
      <header className={classnames(styles.cardHeader, styles.title)}>
        { title }
      </header>
      <main className={styles.content} style={bodyStyle}>{ children }</main>
    </section>
  )
}


Card.displayName = 'Card';

export default Card;
