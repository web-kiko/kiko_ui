/*
 * @Descripttion: 
 * @version: 
 * @Author: kiko
 * @Date: 2022-09-15 18:17:03
 * @LastEditors: kiko
 * @LastEditTime: 2022-09-18 10:50:49
 */
import React,{useContext,useState} from 'react'
import classNames from 'classnames'
import { MenuContext } from './menu'
import { MenuItemProps } from './menuItem';
import Icon from '../Icon/icon';

export interface SubMenuProps {
    index?: string;
    //下拉菜单选项的文字 
    title: string;
    // 下拉菜单选型的扩展类名 
    className?: string;
    children?:any;
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
    const { index, title, children, className } = props
    //context
    const context = useContext(MenuContext)
    //断言改成string不需要undefined
    const openedSubMenus = context.defaultOpenSubMenus as Array<string>
    //默认张开子菜单
    const isOpened = (index && context.mode === 'vertical') ? openedSubMenus.includes(index) : false
    //子组件打开显示
    const [menuOpen,setOpen] =useState(isOpened)
    
    const classes = classNames('menu-item submenu-item', className, {
        'is-active': context.index === index,
        'is-opened': menuOpen,
        'is-vertical': context.mode === 'vertical' 

    })
    const handleClick=(e:React.MouseEvent)=>{
        e.preventDefault()
        setOpen(!menuOpen)
        
    }
    
    let timer: any
    const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
        clearTimeout(timer)
        e.preventDefault()
        timer = setTimeout(() => {
        setOpen(toggle)
        }, 300)
    }

    const clickEvents = context.mode === 'vertical' ? { onClick: handleClick } : {}
    const hoverEvents = context.mode !== 'vertical' ? {
    onMouseEnter: (e: React.MouseEvent) => { handleMouse(e, true) },
    onMouseLeave: (e: React.MouseEvent) => { handleMouse(e, false) }
    } : {}
const renderChildren=()=>{
        const subMenuClasses=classNames('kiko-submenu',{
            'menu-opened':menuOpen
        })
        const childrenComponent=React.Children.map(children,(child,i)=>{
            const childElement =child as React.FunctionComponentElement<MenuItemProps>
            if(childElement.type.displayName==='MenuItem'){
                return  React.cloneElement(childElement, {
                    index: `${index}-${i}`
                })
            }else{
                console.error("这不是一个菜单的子组件")
            }
        })
        return(
            <ul className={subMenuClasses}>
                {childrenComponent}
            </ul>
        )
        }
        return(
        <li key={index} className={classes} {...hoverEvents}>
            <div className='submenu-title' {...clickEvents}>
                {title}
                <Icon icon="angle-down" className="arrow-icon"/>
            </div>
            {renderChildren()}
        </li>
    )
    
}
SubMenu.displayName='SubMenu'
export default SubMenu