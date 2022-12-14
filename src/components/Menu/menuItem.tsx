/*
 * @Descripttion: 
 * @version: 
 * @Author: kiko
 * @Date: 2022-09-12 20:09:06
 * @LastEditors: kiko
 * @LastEditTime: 2022-09-16 14:00:49
 */

import React,{useContext} from 'react'
import classNames from 'classnames'
import { MenuContext } from './menu'

export interface MenuItemProps {
    index?:string,
    className?:string,
    disabled?:boolean,
    children?:any,
    style?:React.CSSProperties,
}
const MenuItem:React.FC< MenuItemProps> =(props)=>{
    const { index,className,disabled,style,children}=props
    const context =useContext(MenuContext)
    const classes =classNames("menu-item",className,{
        'is-disabled':disabled,
        'is-active':context.index===index
    })
    const handleClick=()=>{
        if(context.onSelect && !disabled && (typeof index==='string')){
            context.onSelect(index)
        }
    }
    
    return (
        <li className={classes} style={style} onClick ={handleClick}>
            {children}
        </li>
    )
}
MenuItem.displayName='MenuItem'
export default MenuItem