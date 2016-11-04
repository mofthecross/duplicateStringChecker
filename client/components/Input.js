import React, { Component } from 'react';
import { Output } from './Output';
import { findDuplicates, alphaNumericCheck } from '../functions'

export default class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      output: []
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
    if (!alphaNumericCheck(this.state.input)) {
      alert('only alphanumeric allowed!')
      this.setState({input: '', output:[]});
    } else {
      let duplicate = findDuplicates(this.state.input.toUpperCase());
      this.setState({
        output: duplicate,
        input: ''
      });
    }
  }

  render() {
    return (
      <div className='inputContainer'>
        <div className='inputBox'>
        <input className="textField"
                type='text'
                placeholder= 'Type your string here'
                value={this.state.input}
                onChange={this.handleChange}></input>
          <button  className='button' onClick={this.handleCheckButton}>Check</button>

        </div>
        <h2>Duplicate String Checker </h2>
        <div id='outputContainer'>
          { this.state.output.map(entry=>{
            return <Output key={entry[0]}
                           value={entry} /> })}
        </div>
      </div>
    )
  }
}
