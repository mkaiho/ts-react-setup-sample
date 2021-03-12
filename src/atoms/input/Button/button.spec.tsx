import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'
import Button from '.'

type Props = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

test('is element', () => {
  const expectedLabel = 'test button'
  const props: Props = {}
  const sut = <Button onClick={props.onClick}>{expectedLabel}</Button>

  expect(ReactTestUtils.isElement(sut)).toBeTruthy()
})

test('children is set as button label', () => {
  const expectedLabel = 'test button'
  const props: Props = {}
  const sut = <Button {...props}>{expectedLabel}</Button>
  const instance = ReactTestUtils.renderIntoDocument<Props, Button>(sut)
  const node = ReactTestUtils.findRenderedDOMComponentWithTag(
    instance,
    'Button'
  )

  ReactTestUtils.Simulate.click(node)

  expect(node.textContent).toBe(expectedLabel)
})

test('onClick called once', () => {
  const expectedLabel = 'test button'
  const props: Props = {
    onClick: jest.fn(),
  }
  const sut = <Button {...props}>{expectedLabel}</Button>
  const instance = ReactTestUtils.renderIntoDocument<Props, Button>(sut)
  const node = ReactTestUtils.findRenderedDOMComponentWithTag(
    instance,
    'Button'
  )

  ReactTestUtils.Simulate.click(node)

  expect(props.onClick).toBeCalledTimes(1)
})
