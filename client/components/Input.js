import React, { Component } from 'react';
import { Output } from './Output';

export default class Input extends Component {
  constructor(props) {
    super(props)
      this.state = {
        input: '',
        output: ''
      }
  }
  render() {
    return (
      <div>
      <div>
        <input type='text'
               placeholder= 'type your string here'>
       </input>
       <button>check</button>
      </div>
        <Output entry={this.state.sendtoOutput}/>
      </div>
    );
  }
}
