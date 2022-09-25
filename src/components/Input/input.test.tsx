/*
 * @Descripttion: 
 * @version: 
 * @Author: kiko
 * @Date: 2022-09-21 15:18:53
 * @LastEditors: kiko
 * @LastEditTime: 2022-09-21 15:21:53
 */
import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { Input, InputProps } from './input'

const defaultProps: InputProps = {
  onChange: jest.fn(),
  placeholder: 'test-input'
}

describe('Input组件 ', () => {
  it('默认 Input', () => {
    const wrapper = render(<Input {...defaultProps}/>)
    const testNode = wrapper.getByPlaceholderText('test-input') as HTMLInputElement
    expect(testNode).toBeInTheDocument()
    expect(testNode).toHaveClass('kiko-input-inner')
    fireEvent.change(testNode, { target: { value: '23' } })
    expect(defaultProps.onChange).toHaveBeenCalled()
    expect(testNode.value).toEqual('23')
  })
  it('disabled Input', () => {
    const wrapper = render(<Input disabled placeholder="disabled"/>)
    const testNode = wrapper.getByPlaceholderText('disabled') as HTMLInputElement
    expect(testNode.disabled).toBeTruthy()
  })
  it('input sizes ', () => {
    const wrapper = render(<Input placeholder="sizes" size="lg" />)
    const testContainer = wrapper.container.querySelector('.kiko-input-wrapper')
    expect(testContainer).toHaveClass('input-size-lg')
  })
  it('前缀、后缀input', () => {
    const {queryByText, container } = render(<Input placeholder="pend" prepend="https://" append=".com"/>)
    const testContainer = container.querySelector('.kiko-input-wrapper')
    expect(testContainer).toHaveClass('input-group input-group-append input-group-prepend')
    expect(queryByText('https://')).toBeInTheDocument()
    expect(queryByText('.com')).toBeInTheDocument()
  })
})
