import React, { Component } from 'react';
import { Output } from './Output';

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
    this.setState({
      input: event.target.value
    });
  }

  handleCheckButton(event) {
    let findDuplicate = this.state.input;
    this.setState({output: findDuplicate , input: ''})
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
      </div>
        <Output entry={this.state.output}/>
      </div>
    );
  }
}
