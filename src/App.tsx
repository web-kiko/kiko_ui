/*
 * @Descripttion: 
 * @version: 
 * @Author: kiko
 * @Date: 2022-09-09 08:59:57
 * @LastEditors: kiko
 * @LastEditTime: 2022-09-21 16:27:56
 */
import React from 'react'
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import Input from './components/Input/input'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
library.add(fas)


function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Button>普通按钮</Button>
        <Button disabled>禁止按钮</Button>
        <Button buttonType="primary" buttonSize='lg'>
          大号按钮
        </Button>
        <Button buttonType='danger' buttonSize="sm">
          小号按钮
        </Button>
        <Button buttonType="link" href='http://www.baidu.com'>
          跳转页面按钮
        </Button>
        <Button buttonType='link' href='http://www.baidu.com' disabled>
          禁止跳转页面按钮
        </Button>
        
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        
      </header>
      
      <Menu defaultIndex='0' onSelect={(index)=>{alert(index)}}mode='horizontal'
        >
        <SubMenu title='下拉菜单1'>
          <MenuItem >子菜单1</MenuItem>
          <MenuItem >子菜单2</MenuItem>
          <MenuItem >子菜单3</MenuItem>
        </SubMenu>
        <SubMenu title='下拉菜单2'>
          <MenuItem >子菜单1</MenuItem>
          <MenuItem >子菜单2</MenuItem>
        </SubMenu>
        <SubMenu title='下拉菜单3'>
          <MenuItem >子菜单1</MenuItem>
          
        </SubMenu>  
      </Menu>

      <Menu defaultIndex='0' onSelect={(index)=>{alert(index)}}mode='vertical'
          defaultOpenSubMenus={['2']} >
        <SubMenu title='菜单1'>
          <MenuItem >子菜单1</MenuItem>
        </SubMenu>
        <SubMenu title='菜单2'>
          <MenuItem >子菜单1</MenuItem>
          <MenuItem >子菜单2</MenuItem>
        </SubMenu>
        <SubMenu title='菜单3'>
          <MenuItem >子菜单1</MenuItem>
          <MenuItem >子菜单2</MenuItem>
          <MenuItem >子菜单3</MenuItem>
        </SubMenu>  
      </Menu>

      <Input
      style={{width: '300px'}}
      placeholder="placeholder"/>

      <Input
      style={{width: '300px'}}
      placeholder="disabled input"
      disabled/>
    <Input
      style={{width: '300px'}}
      defaultValue="large size"
      size="lg"
    />
    <Input
      style={{width: '300px'}}
      placeholder="small size"
      size="sm"
    />
    <Input
      style={{width: '300px'}}
      defaultValue="prepend text"
      prepend="https://"
    />
    <Input
      style={{width: '300px'}}
      defaultValue="google"
      append=".com"
    />
  <Input
    style={{width: '300px'}}
    placeholder="input with icon"
    icon="search"
  />
    </div>
  )
}

export default App
