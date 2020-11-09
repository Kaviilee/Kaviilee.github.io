import React from 'react';

import classNames from 'classnames'

import styles from './index.less'

import { ButtonProps } from './index.d'

function Button (props: ButtonProps) {

  const { className, disabled, size, btnType, children, href, block, ...restProps } = props;

  let s = size?.toLowerCase().replace(/^\S/, (L) => L.toUpperCase())
  let b = btnType?.toLowerCase().replace(/^\S/, (L) => L.toUpperCase())
  const classes = classNames(styles.btn, className, {
    [`${styles[`btn${s}`]}`]: s,
    [`${styles[`btn${b}`]}`]: b,
    'disabled': (btnType === 'link') && disabled,
    [styles.block]: block
  })


  if (btnType === 'link' && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        <span>{children}</span>
      </a>
    )
  }
    return (
      <button
        className={classes}
        disabled={disabled}
        {...restProps}
      >
        <span>
          {children}
        </span>
      </button>
    )


}

Button.defaultProps = {
  disabled: false,
  btnType: 'default'
}

Button.displayName = 'Button';

export default Button;
