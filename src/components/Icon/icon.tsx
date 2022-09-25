/*
 * @Descripttion: 
 * @version: 
 * @Author: kiko
 * @Date: 2022-09-16 17:13:35
 * @LastEditors: kiko
 * @LastEditTime: 2022-09-16 19:46:24
 */
import React from 'react'
import classNames from 'classnames'
import { FontAwesomeIcon,FontAwesomeIconProps} from '@fortawesome/react-fontawesome'
//主题色
export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'
export interface IconProps extends FontAwesomeIconProps {
    theme?: ThemeProps
}
const Icon: React.FC<IconProps> = (props) => {
    const { className, theme, ...restProps } = props
    const classes = classNames('kiko-icon', className, {
        [`icon-${theme}`]: theme
    })
    return (
        <FontAwesomeIcon className={classes} {...restProps} />
    )
}
export default Icon