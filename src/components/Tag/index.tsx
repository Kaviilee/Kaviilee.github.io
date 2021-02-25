import React, { useState } from 'react';
import classNames from 'classnames';

import styles from './index.less';

type Colors = 'success' | 'warning' | 'error' | 'processing' | 'red' | 'green' | 'cyan' | 'blue';

export interface TagProps {
  closable?: boolean;
  onClose?: (e: React.MouseEvent) => void;
  icon?: React.ReactNode;
  color?: Colors;
  children: React.ReactChild;
  style?: { [id: string]: any };
  className?: string;
}

export const Tag: React.FC<TagProps> = ({
  closable,
  onClose,
  children,
  color,
  style,
  icon,
  className,
}: TagProps) => {
  const [tagShow, setTagShow] = useState(true);

  const handleClose = (e: React.MouseEvent) => {
    setTagShow(false);
    onClose && onClose(e);
  };

  const classes = classNames(
    styles.tag,
    styles.default,
    {
      isClose: closable,
      [`${styles[`${color}`]}`]: color,
    },
    className,
  );

  return tagShow ? (
    <span className={classes} style={style}>
      {icon}
      <span className={icon ? styles.tagText : ''}>{children}</span>
      {closable && (
        <div className={styles.iconWrapper} onClick={handleClose}>
          <span>&times;</span>
        </div>
      )}
    </span>
  ) : null;
};

Tag.displayName = 'Tag';

export default Tag;
