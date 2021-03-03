import React, { Component } from 'react'
import './button.scss'

type Props = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

type State = Record<string, unknown>

export default class Button extends Component<Props, State> {
  render(): JSX.Element {
    return (
      <button className='Button' onClick={this.props.onClick}>
        {this.props.children}
      </button>
    )
  }
}
