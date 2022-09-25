/*
 * @Descripttion: 
 * @version: 
 * @Author: kiko
 * @Date: 2022-09-20 01:15:17
 * @LastEditors: kiko
 * @LastEditTime: 2022-09-20 20:49:04
 */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Menu from './menu'
import MenuItem from './menuItem'
import SubMenu from './subMenu'


export const defaultMenu = () => (
  <Menu onSelect={(index) => {action(`clicked ${index} item`)}} >
    <MenuItem>
      菜单1
    </MenuItem>
    <MenuItem disabled>
      菜单2
    </MenuItem>
    <MenuItem>
      菜单3
    </MenuItem>
    <SubMenu title="下拉选项">
      <MenuItem>
        下拉选项一
      </MenuItem>
      <MenuItem>
        下拉选项二
      </MenuItem>
    </SubMenu>
  </Menu>
)


export const menuWithVertical = () => (
  <Menu mode='horizontal' onSelect={(index) => {action(`clicked ${index} item`)}} >
    <MenuItem>
      菜单1
    </MenuItem>
    <MenuItem>
      菜单2
    </MenuItem>
    <SubMenu title="菜单3点击下拉选项">
      <MenuItem>
        下拉选项一
      </MenuItem>
      <MenuItem>
        下拉选项二
      </MenuItem>
    </SubMenu>
  </Menu>
)

export const menuWithOpened = () => (
  <Menu mode="vertical" defaultOpenSubMenus={['2']} onSelect={(index) => {action(`clicked ${index} item`)}} >
    <MenuItem>
      菜单1
    </MenuItem>
    <MenuItem>
      菜单2
    </MenuItem>
    <SubMenu title="默认展开下拉选项">
      <MenuItem>
        下拉选项一
      </MenuItem>
      <MenuItem>
        下拉选项二
      </MenuItem>
    </SubMenu>
  </Menu>
)

storiesOf('Menu Component', module)
  .add('Menu', defaultMenu)
  .add('横向 Menu', menuWithVertical)
  .add('纵向 Menu', menuWithOpened)
