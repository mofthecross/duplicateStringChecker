import React, { Component } from 'react';
import { Output } from './Output';

export default class Input extends Component {
  constructor(props) {
    super(props)
      this.state = {
        input: 'sendtoOUtput'
      }
  }
  render() {
    return (
      <div>
        <h1>this is an input</h1>
        <Output entry={this.state.sendtoOutput}/>
      </div>
    );
  }
}
