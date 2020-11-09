import React, { FC }  from 'react'
import { Link } from 'react-router-dom';
import { useRouter } from '@/hooks/use-router';
import classnames from 'classnames'

// import { MenuItem } from './MenuItem';

import styles from './index.less'

import { MenuItemType } from './index.d'

interface Items {
  items: MenuItemType[];
}

export const HoverMenu: FC<Items> = ({ items }: Items) => {
  const router = useRouter()
  const itemElements = items.map((item) => {
    const { label, disabled, disabledTips, path } = item
    return (
      <li
        className={classnames({
          [styles.active]: router.pathname === path,
          [styles.disabled]: disabled,
        })}
        key={item.key}
        title={disabled ? disabledTips : ''}
      >
        <Link to={path || ''}>
          <span>{label}</span>
        </Link>
      </li>
    )
  })

  return (
    <div className={styles.hoverMenuWrapper}>
      <ul className={styles.hoverMenu}>
        { itemElements }
      </ul>
    </div>
  )
}
