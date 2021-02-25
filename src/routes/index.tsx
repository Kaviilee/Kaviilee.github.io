// import React from 'react';
import Skeleton from '@/layout/Skeleton';
import Introduction from '@/layout/Introduction';
import { Message, Button, Card, Tag } from '@/pages/UI';
import Preview from '@/pages/Preview';
import { StockOutlined, LayoutOutlined, BulbOutlined } from '@ant-design/icons';

import Dashboard from '@/pages/Dashboard';
import NoMatch from '@/pages/NoMatch';

import { RouteConfig } from './index.d';

export { RouteConfig };
export { renderRoutes } from './renderRoutes';

export const routes: RouteConfig[] = [
  {
    path: '/cover',
    hideMenu: true,
    component: Introduction,
  },
  {
    path: '/',
    hideMenuItem: true,
    component: Skeleton,
    routes: [
      {
        path: '/',
        name: '数据预览',
        exact: true,
        component: Dashboard,
        icon: StockOutlined,
      },
      {
        path: '/preview',
        name: 'Demos',
        icon: LayoutOutlined,
        routes: [
          {
            path: '/preview/flexbox',
            name: 'Flexbox',
            meta: { path: 'https://kaviilee.github.io/demos/flexbox' },
            disabled: false,
            component: Preview,
          },
          // {
          //   path: '/layout/flex',
          //   name: 'Flexbox',
          //   disabled: false,
          // },
        ],
      },
      {
        name: 'UI',
        path: '/ui',
        icon: BulbOutlined,
        routes: [
          {
            name: 'Button 按钮',
            path: '/ui/button',
            disabled: false,
            component: Button,
          },
          {
            name: 'Card 卡片',
            path: '/ui/card',
            component: Card,
          },
          {
            name: 'Message 提示',
            path: '/ui/message',
            disabled: false,
            component: Message,
          },
          {
            name: 'Tag 标签',
            path: '/ui/tag',
            disabled: false,
            component: Tag,
          },
        ],
      },
      {
        path: '*',
        component: NoMatch,
        hideMenu: true,
      },
    ],
  },
];
