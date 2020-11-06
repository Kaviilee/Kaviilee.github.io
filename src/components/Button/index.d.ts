import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

export type ButtonSize = 'sm' | 'lg';
export type ButtonType = 'default' | 'primary' | 'dashed' | 'danger' | 'link';

export interface BaseButtonProps {
  className?: string;
  disabled?: boolean;

  size?: ButtonSize;
  btnType?: ButtonType;

  href?: string;
  block?: boolean
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
