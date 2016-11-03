import React, { Component } from 'react';
import { Output } from './Output';
import { findDuplicates } from '../functions'

export default class Input extends Component {
  constructor(props) {
    super(props)
      this.state = {
        input: '',
        output: ''
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleCheckButton = this.handleCheckButton.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  handleCheckButton(event) {
    let duplicate = findDuplicates(this.state.input);
    this.setState({output: duplicate, input: ''})
  }

  render() {
    return (
      <div>
      <div>
          <input type='text'
                 placeholder= 'type your string here'
                 value={this.state.input}
                 onChange={this.handleChange}>
         </input>
         <button onClick={this.handleCheckButton}>check</button>
      <h2> Duplicate String Checker </h2>
      </div>
        <Output entry={this.state.output}/>
      </div>
    );
  }
}
