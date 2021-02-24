import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import PropTypes from 'prop-types';

export type ButtonSize = 'sm' | 'lg';
export type ButtonType = 'default' | 'primary' | 'dashed' | 'danger' | 'link';

export interface BaseButtonProps {
  className?: PropTypes.string;
  disabled?: PropTypes.boolean;

  size?: ButtonSize;
  btnType?: ButtonType;

  href?: PropTypes.string;
  block?: PropTypes.boolean;
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
