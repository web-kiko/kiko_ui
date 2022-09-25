/*
 * @Descripttion: 
 * @version: 
 * @Author: kiko
 * @Date: 2022-09-13 14:19:02
 * @LastEditors: kiko
 * @LastEditTime: 2022-09-16 16:51:04
 */
import React from "react";
import { fireEvent, render,RenderResult,waitFor} from '@testing-library/react'
import Menu,{ MenuProps} from './menu'
import MenuItem from './menuItem'
import SubMenu from "./subMenu";

const testProps:MenuProps={
  defaultIndex:'0',
  onSelect:jest.fn(),
  className:'test'
}
const testVerProps:MenuProps={
  defaultIndex:'0',
  mode:'vertical'
}
//公共部分
const generateMenu =(props:MenuProps)=>{
  return(
    <Menu {...props}>
      <MenuItem > active</MenuItem>
      <MenuItem disabled > disabled </MenuItem>
      <MenuItem >kiko</MenuItem>
      <SubMenu title="dropdown">
        <MenuItem>
        drop1
        </MenuItem>
      </SubMenu>
    </Menu>
  )

}

const createStyleFile = () => {
  const cssFile: string = `
    .kiko-submenu {
      display: none;
    }
    .kiko-submenu.menu-opened {
      display:block;
    }
  `
  const style = document.createElement('style')
  style.type = 'text/css'
  style.innerHTML = cssFile
  return style
}
let wrapper:RenderResult, menuElement:HTMLElement,activeElement:HTMLElement,disabledElement:HTMLElement
describe(
  "test menu and menu-item",()=>{
    //公共部分
    beforeEach(()=>{
      wrapper=render(generateMenu(testProps))
      //插入节点
      wrapper.container.append(createStyleFile())
      menuElement=wrapper.getByTestId('test-menu')
      activeElement=wrapper.getByText('active')
      disabledElement=wrapper.getByText('disabled')
    })
      test('是否能正常显示menu和menu-item',()=>{
        expect(menuElement).toBeInTheDocument()
        expect(menuElement).toHaveClass('kiko-menu test')
        // expect(menuElement.getElementsByTagName('li').length).toEqual(3)
        expect(menuElement.querySelectorAll(':scope>li').length).toEqual(4)
        expect(activeElement).toHaveClass('menu-item is-active')
        expect(disabledElement).toHaveClass('menu-item is-disabled')
      }) 
      
      test('点击item能否正常触发行为以及是否有回调',()=>{
        const thirdItem =wrapper.getByText('kiko')
        fireEvent.click(thirdItem)
        expect(thirdItem).toHaveClass('is-active')
        expect(activeElement).not.toHaveClass('is-active')
        expect(testProps.onSelect).toHaveBeenCalledWith('2')
        fireEvent.click(disabledElement)
        expect(disabledElement).not.toHaveClass('is-active')
        expect(testProps.onSelect).not.toHaveBeenCalledWith('1')
      })  
      
      test('下拉菜单subMenu的功能和逻辑', async()=>{
        expect(wrapper.queryByText('drop1')).not.toBeVisible()
        const dropdownElement = wrapper.getByText('dropdown')
  
  })
  
})