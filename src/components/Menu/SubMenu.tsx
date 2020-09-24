import React, { FC } from 'react';
import classnames from 'classnames';
import { UpOutlined, DownOutlined } from '@ant-design/icons';
import { HoverMenu } from './HoverMenu'

import { SubmenuProps } from './index.d';

import styles from './index.less';

/**
 * 子菜单
 */
export const SubMenu: FC<SubmenuProps> = ({
  active,
  isOpen,
  icon: Icon,
  label,
  collapsed,
  triggerSubMenuAction,
  children,
  style,
  items
}) => {
  return (
    <li className={styles.subMenu}>
      <div
        className={classnames(styles.submenuTitle, {
          [styles.active]: active,
        })}
        style={style}
        onClick={triggerSubMenuAction}
      >
        {Icon && <Icon className={styles.icon} />}
        <span>{label}</span>
        {React.createElement(isOpen ? UpOutlined : DownOutlined, {
          className: styles.submenuArrow,
        })}
      </div>
      {!collapsed && (
        <ul style={{ display: !isOpen ? 'none' : '' }}>{children}</ul>
      )}
      {
          collapsed && (
            <HoverMenu items={items}></HoverMenu>
          )
        }
    </li>
  );
}
