import React, { Component } from 'react'

type Props = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

type State = Record<string, unknown>

export default class Button extends Component<Props, State> {
  render(): JSX.Element {
    return <button onClick={this.props.onClick}>{this.props.children}</button>
  }
}
