import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    return (
          <button className="Btn" onClick={this.props.handelClick} >{this.props.title}</button>
      
    )
  }
}
