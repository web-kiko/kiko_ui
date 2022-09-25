/*
 * @Descripttion: 
 * @version: 
 * @Author: kiko
 * @Date: 2022-09-20 22:46:49
 * @LastEditors: kiko
 * @LastEditTime: 2022-09-21 15:42:40
 */
import React, { FC, ReactElement, InputHTMLAttributes, ChangeEvent } from 'react';
import classNames from 'classnames'
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Icon from '../Icon/icon';

export type size = 'lg' | 'ml' | 'sm';

// Omit<属性,要忽略的属性>
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
    //是否禁用 Input
    disabled?: boolean,
    //大小
    size?: size,
    //添加图标，在右侧悬浮添加一个图标，用于提示
    icon?: IconProp,
    //添加前缀 用于配置一些固定组
    prepend?: string | ReactElement,
    //添加后缀 用于配置一些固定组合
    append?: string | ReactElement,
    onChange? : (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = (props) => {
    // 取出所有的属性
    const { disabled, size, icon, prepend, append, style, ...restProps } = props
    // 根据不同的属性计算className
    const classes = classNames('kiko-input-wrapper', {
    [`input-size-${size}`]: size,
    'is-disabled': disabled,
    'input-group': prepend || append,
    'input-group-append': !!append,
    'input-group-prepend': !!prepend
    })

    const fixControlledValue = (value: any) => {
    if (typeof value === 'undefined' || value === null) {
        return ''
    }
    return value
    }

    if ('value' in props) {
    delete restProps.defaultValue
    restProps.value = fixControlledValue(props.value)
    }
    return (
      // 根据属性判断是否要添加不同的节点
    <div className={classes} style={style}>
        {prepend && <div className="kiko-input-group-prepend">{prepend}</div>}
        {icon && <div className="icon-wrapper"><Icon icon={icon} title={`title-${icon}`} /></div>}
        <input
        className="kiko-input-inner"
        disabled={disabled}
        {...restProps}
        />
        {append && <div className="kiko-input-group-append">{append}</div>}
    </div>
    )
}

Input.defaultProps = {
    disabled: false
}

export default Input;

