import React from 'react';
import classnames from 'classnames'

import styles from './index.less'

export interface CardProps {
  title?: string;
  className?: string;
  bordered?: boolean;
  style?: React.CSSProperties;
  bodyStyle?: React.CSSProperties;
  hoverable?: boolean;
  children?: React.ReactNode;
}

export function Card ({ title, style, bodyStyle, className, bordered, hoverable, children }: CardProps){
  return (
    <section className={classnames(styles.card, className, {
      [styles.bordered]: bordered,
      [styles.hoverable]: hoverable
    })} style={style}>
      {
        title ?
          <section className={classnames(styles.cardHeader)}>
            <header className={classnames(styles.title)}>
              { title }
            </header>
          </section>
          : null
      }
      <section className={styles.content} style={bodyStyle}>
        <main>{ children }</main>
      </section>
    </section>
  )
}


Card.displayName = 'Card';

export default Card;
