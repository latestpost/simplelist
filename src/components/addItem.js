import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddItem extends Component {

  constructor() {
    super();
    this.state = { selectedItemIndex: 0, selectedItem: { name: 'Peas', price: 95, unit: 'bag' } };
    this.products = [
      { name: 'Peas', price: 95, unit: 'bag' },
      { name: 'Eggs', price: 210, unit: 'dozen' },
      { name: 'Milk', price: 130, unit: 'bottle' },
      { name: 'Beans', price: 73, unit: 'can' }
    ];
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addBasketItem(this.state.selectedItem);
  }

  handleChange(event) {
    this.setState({ selectedItemIndex: event.target.value, selectedItem: this.products[event.target.value],
     });
  }

  render() {
    return (
      <form>
        <select onChange={event => this.handleChange(event)} value={this.state.selectedItemIndex}>
          {this.products.map(function (item, index) {
            return <option key={ index } value={ index }>{item.name} {item.price} {item.unit}</option>;
          })}
        </select>
        <button type="button" onClick={event => this.handleSubmit(event)}>Add Item</button>
      </form>
    );
  }
}

AddItem.propTypes = {
  addBasketItem: PropTypes.func.isRequired,
};

export default AddItem;
