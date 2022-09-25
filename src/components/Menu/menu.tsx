/*
 * @Descripttion: 
 * @version: 
 * @Author: kiko
 * @Date: 2022-09-12 11:04:19
 * @LastEditors: kiko
 * @LastEditTime: 2022-09-16 14:21:32
 */
import React,{createContext,useState,FC} from 'react'
import classNames from 'classnames'
import {MenuItemProps} from './menuItem'

type MenuMode ="horizontal"|"vertical"
type SelectCallBack =(selectedIndex:string)=>void
export interface MenuProps {
    //** 默认 active 的菜单项的索引值
    defaultIndex?:string;
    className?:string;
    //菜单类型 横向或者纵向
    mode?:MenuMode;
    style?:React.CSSProperties;
    children?:any;
    //点击菜单项触发的回掉函数
    onSelect?:SelectCallBack;
    //设置子菜单的默认打开 只在纵向模式下生效
    defaultOpenSubMenus?: string[];
}
interface IMenuContext{
    index?:string,
    onSelect?:SelectCallBack;
    mode?:MenuMode;
    defaultOpenSubMenus?: string[];
}
export const  MenuContext=createContext<IMenuContext>({index:'0'})

 export const Menu:FC<MenuProps> =(props)=>{
    const {defaultIndex,mode,style,className,children,onSelect,defaultOpenSubMenus} =props;
    const [ currentActive,setCurrentActive]=useState(defaultIndex);
    const classes =classNames("kiko-menu",className,{
        'menu-vertical':mode==='vertical',
        'menu-horizontal':mode==='horizontal'
    })
    //onSelect的点击
    const handleClick=(index:string)=>{
        setCurrentActive(index)
        if(onSelect){
            onSelect(index)
        }
    }
    //context
    const passedContext:IMenuContext ={
        index:currentActive?currentActive:'0',
        onSelect:handleClick,
        mode,
        defaultOpenSubMenus,
    }
    //children
    const renderChildren=()=>{
        return React.Children.map(children,(child,index)=>{
            const childElement =child as React.FunctionComponentElement<MenuItemProps>
            const { displayName }=childElement.type
            if(displayName==='MenuItem'||displayName==='SubMenu'){ 
                return React.cloneElement(childElement,{
                    index:index.toString()
                })
            }else{
                console.error("这不是一个菜单的子组件")
            }
        })
    }

    return (
        <ul className={classes} style={style} data-testid='test-menu'>
            <MenuContext.Provider value={passedContext}>
                {renderChildren()}
            </MenuContext.Provider>
        
        </ul>
    )
}
Menu.defaultProps ={
    defaultIndex:'0',
    mode:'vertical',
    defaultOpenSubMenus: []
}

export default Menu