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
  }

  handleChange(event) {
    console.log(event);
    this.setState({
      input: event.target.value
    });
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
       <button>check</button>
      </div>
        <Output entry={this.state.output}/>
      </div>
    );
  }
}
