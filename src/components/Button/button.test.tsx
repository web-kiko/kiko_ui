/*
 * @Descripttion: 
 * @version: 
 * @Author: kiko
 * @Date: 2022-09-09 09:50:10
 * @LastEditors: kiko
 * @LastEditTime: 2022-09-12 11:00:24
 */
import React from "react";
import Button,{ButtonSize,ButtonType} from "./button";
import { render} from '@testing-library/react'


describe(
    "test button",()=>{
        test(' button 是否能正常显示',()=>{
            const wrapper =render(<Button>nice</Button>)
            const element =wrapper.getByText('nice')
            expect(element).toBeInTheDocument()
            expect(element.tagName).toEqual('BUTTON')
            expect(element).toHaveClass('btn btn-default')

        })  
})