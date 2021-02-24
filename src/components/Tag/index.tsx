import React, { useState } from 'react';
import classNames from 'classnames';
import { CloseOutlined } from '@ant-design/icons';

import styles from './index.less';

export interface TagProps {
  closable?: boolean;
  onClose?: (e: React.MouseEvent) => void;
  children: React.ReactChild;
}

export const Tag: React.FC<TagProps> = ({ closable, onClose, children }: TagProps) => {
  const [tagShow, setTagShow] = useState(true);

  const handleClose = (e: React.MouseEvent) => {
    setTagShow(false);
    onClose && onClose(e);
  };

  const classes = classNames(styles.tag, styles.default, {
    isClose: closable,
  });

  return tagShow ? (
    <span className={classes}>
      {children}
      {closable && (
        <div className={styles.iconWrapper} onClick={handleClose}>
          <CloseOutlined></CloseOutlined>
        </div>
      )}
    </span>
  ) : null;
};

Tag.displayName = 'Tag';

export default Tag;
