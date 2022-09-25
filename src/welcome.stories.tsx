/*
 * @Descripttion: 
 * @version: 
 * @Author: kiko
 * @Date: 2022-09-20 16:08:56
 * @LastEditors: kiko
 * @LastEditTime: 2022-09-20 16:16:14
 */
import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Welcome', module)
  .add('welcome', () => {
    return (
      <>
        <h1>欢迎来到 kiko-ui 组件库</h1>
        <h3>kiko-ui是依照anrd规则react组件库</h3>
        <p>kiko-ui使用 React Hooks 和 typescript</p>
        <h3>安装试试</h3>
      </>
    )
  }, { info : { disable: true }})
