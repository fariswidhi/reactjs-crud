import React, { Component } from 'react'

export default class Square extends Component {
  render() {
    const style = {
        border: '1px solid #000',
        
    }
    return (
      <div style={style}>
        Halo {this.props.value}
      </div>
    )
  }
}
