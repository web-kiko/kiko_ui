/*
 * @Descripttion: 
 * @version: 
 * @Author: kiko
 * @Date: 2022-09-18 15:15:08
 * @LastEditors: kiko
 * @LastEditTime: 2022-09-21 15:45:50
 */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
//单独配置，后来用了全局配置在preview.js
// import { withInfo } from '@storybook/addon-info'
import Button from './button'

const defaultButton = () => (
    <Button onClick={action('clicked')}>Default button</Button>
    )

    const buttonWithSize = () => (
        <>
        <Button buttonSize="lg">Large button</Button>
        <Button buttonSize="sm">Small button</Button>
        </>
    )
    
    const buttonWithType = () => (
        <>
        <Button buttonType="primary">Primary button</Button>
        <Button buttonType="default">Default Button</Button>
        <Button buttonType="danger">Danger button</Button>
        <Button buttonType="link" href='http://www.baidu.com'>Link button</Button>
        </>
    )
    
    storiesOf('Button Component', module)
        // .addDecorator(withInfo)
        .addParameters({
            info:{
                text:`## 支持md写法`
            }
        })
        .add(' 默认Button', defaultButton)
        .add('不同尺寸的 Button', buttonWithSize)
        .add('不同类型的 Button', buttonWithType)
