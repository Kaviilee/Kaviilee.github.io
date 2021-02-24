import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import { MenuItemProps } from './index.d';

import styles from './index.less';

/**
 * 菜单项
 */
export function MenuItem({
  active,
  path,
  icon: Icon,
  label,
  className,
  disabled,
  disabledTips,
  style,
  level,
}: MenuItemProps) {
  return (
    <li
      className={classnames(styles.menuItem, className, {
        [styles.activeItem]: level && level > 1 && active,
        [styles.active]: level && level === 1 && active,
        [styles.disabled]: disabled,
      })}
      role="menuitem"
      title={disabled ? disabledTips : ''}
      style={style}
    >
      <Link to={path}>
        {Icon && <Icon className={styles.icon} />}
        <span>{label}</span>
      </Link>
    </li>
  );
}
