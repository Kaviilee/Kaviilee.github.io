import React, { FC, useEffect, useState, useCallback } from 'react';
import { LinkProps } from 'react-router-dom';
import classnames from 'classnames';

import { SubMenu } from './SubMenu';
import { MenuItem } from './MenuItem';

import { MenuConfigContainerProps, MenuItemType } from './index.d';

import styles from './index.less';

/**
 * 获取路径信息
 */
const getCurrentPath = (path: string | LinkProps['to']) => {
  switch (typeof path) {
    case 'string':
      return path;
    case 'object':
      return path.pathname || '';

    default:
      return '';
  }
};

interface MenuProps {
  collapsed: boolean;
  children?: React.ReactNode;
}

/**
 * 菜单
 */
export function Menu (props: MenuProps) {
  const { collapsed, children } = props;
  return (
    <nav className={classnames({ [styles.collapsed]: collapsed })}>
      <ul>{children}</ul>
    </nav>
  );
};

/**
 * 配置式菜单
 */
export function MenuConfigContainer(props: MenuConfigContainerProps) {
  const {
    menuData,
    collapsed = false,
    selectedKeys,
    defaultOpenKeys = [],
  } = props;
  const [openKeys, setOpenKeys] = useState<
    MenuConfigContainerProps['defaultOpenKeys']
  >(defaultOpenKeys);

  /**
   * 处理子菜单展开状态
   */
  const handeChangeSubmenuAction = useCallback(
    (key: React.Key) => {
      setOpenKeys((oldData) => {
        return openKeys?.includes(key)
          ? // 如果触发展开的 key 已经存在，那就移除它
            oldData?.filter((k) => k !== key)
          : [...oldData, key];
      });
    },
    [openKeys]
  );

  /**
   * 渲染菜单数据
   */
  function renderMenuData(menuDatas: MenuItemType[], level: number) {
    return menuDatas.map((data, idx) => {
      const key = data.key || idx;

      if (data.type === 'submenu') {
        const paths = data.items.map(item => item.path)
        const [ selectedKey ] = selectedKeys
        const flag = paths.some(p => p === selectedKey)
        return (
          <SubMenu
            active={flag}
            {...data}
            collapsed={collapsed}
            key={data.key}
            isOpen={openKeys?.includes(key)}
            triggerSubMenuAction={() => handeChangeSubmenuAction(key)}
          >
            {renderMenuData(data.items, level + 1)}
          </SubMenu>
        );
      }

      const currentPath = getCurrentPath(data.path);
      return (
        <MenuItem
          active={selectedKeys?.includes(currentPath)}
          disabledTips={data.disabledTips || '正在开发中...'}
          style={level === 1 ? {} : { paddingLeft: 24 * level }}
          {...data}
          level={level}
          key={key}
        />
      );
    });
  }

  useEffect(() => {
    if ('openKeys' in props) {
      setOpenKeys(props.openKeys);
    }
  }, [props]);

  return <Menu collapsed={collapsed}>{renderMenuData(menuData, 1)}</Menu>;
};

Menu.displayName = 'Menu';
MenuConfigContainer.displayName = 'MenuConfigContainer';

export { SubMenu, MenuItem };
