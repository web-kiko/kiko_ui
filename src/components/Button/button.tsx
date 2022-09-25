/*
 * @Descripttion: 
 * @version: 
 * @Author: kiko
 * @Date: 2022-09-09 08:59:57
 * @LastEditors: kiko
 * @LastEditTime: 2022-09-20 16:29:19
 */
import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes,ReactNode} from 'react'
import classNames from 'classnames'

export type ButtonSize = 'lg' | 'sm'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'
// export enum ButtonSize {
//   Large = 'lg',
//   Small = 'sm'
// }

// export enum ButtonType {
//   Primary = 'primary',
//   Default = 'default',
//   Danger = 'danger',
//   Link = 'link',
// }

interface BaseButtonProps {
  className?: string;
  /**设置 Button 是否禁用*/
  disabled?: boolean;
  /**设置 Button 大小*/
  buttonSize?: ButtonSize;
  /**设置 Button 类型*/
  buttonType?: ButtonType;
  children: ReactNode;
  href?: string;
};

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互，支持 HTML button 和 a 链接 的所有属性
 * ~~~
 */
export const Button: FC<ButtonProps> = (props) => {
  const { buttonType, disabled, buttonSize, children, className, href, ...restProps } = props
  // btn, btn-lg, btn-primary
  const classes = classNames('btn', className, {
    [`btn-${buttonType}`]: !!buttonType,
    [`btn-${buttonSize}`]: !!buttonSize,
    'disabled': (buttonType === 'link') && disabled
  })

  if (buttonType === 'link' && href) {
    return (
      <a
        className={classes}
        href={href}
        {...restProps}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  buttonType: 'default',
  buttonSize: 'lg',
}

export default Button;
