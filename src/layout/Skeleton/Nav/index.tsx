import React, { FC, useEffect, useState } from 'react';
import { useRouter } from '@/hooks/use-router';
import { MenuConfigContainer } from '@/components/Menu';
import { routes } from '@/routes';

import { routesToMenuData } from './tool';

export interface NavProps {
  collapsed?: boolean;
}

/**
 * 侧边栏导航
 */
export const Nav: FC<NavProps> = ({ collapsed = false }: NavProps) => {
  const router = useRouter();
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [defaultOpenKeys, setDefaultOpenKeys] = useState<string[]>([]);

  const menuData = routesToMenuData(routes);

  useEffect(() => {
    const regex = /\/\w+/;
    setDefaultOpenKeys(router.pathname.match(regex) || []);
    setSelectedKeys([router.pathname]);
  }, [router]);

  return (
    <MenuConfigContainer
      menuData={menuData}
      collapsed={collapsed}
      selectedKeys={selectedKeys}
      defaultOpenKeys={defaultOpenKeys}
    />
  );
};
