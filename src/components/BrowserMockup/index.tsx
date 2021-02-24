import React from 'react';
import classNames from 'classnames';

import './index.less?normal';

function BrowserMockup({
  mockupType,
  children,
}: {
  mockupType?: 'tab' | 'url';
  children: React.ReactNode;
}) {
  const classes = classNames('browser-mockup', {
    'with-tab': mockupType === 'tab',
    'with-url': mockupType === 'url',
  });
  return <div className={classes}>{children}</div>;
}

BrowserMockup.defaultProps = {
  mockupType: 'url',
};

export default BrowserMockup;
