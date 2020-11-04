import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

export type ButtonSize = 'sm' | 'lg';
export type ButtonType = 'default' | 'primary' | 'dashed' | 'danger' | 'link';

export interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  icon?: string;

  size?: ButtonSize;
  btnType?: ButtonType;

  children: ReactNode;
  href?: string;
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
