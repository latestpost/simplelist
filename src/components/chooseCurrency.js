import React, { Component } from 'react';

class ChooseCurrency extends Component {

  constructor() {
    super();
    this.state = { value: 'USD' };
    this.currencies = [
      { name: 'USD', rate: 1.23 },
      { name: 'GBP', rate: 1.5 }
    ];
  }
  getInitialState() {
    return { value: 'USD' };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
        <select onChange={event => this.handleChange(event)} value={this.state.value}>
          {this.currencies.map(function (item, index) {
            return <option key={index}>{item.name}</option>;
          })}
        </select>
    );
  }
}

export default ChooseCurrency;
