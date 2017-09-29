import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadApp } from '../actions/app';
import styles from './app.css';
import AddItem from '../components/addItem';
import ChooseCurrency from '../components/chooseCurrency';
import { bindActionCreators } from 'redux';

type Props = {
  dispatch: () => void,
  loaded: boolean
}

export class Basket extends Component {
  constructor() {
    super();
    this.state = { total: 0, rate: 1, items: [] };
  }

  getInitialState() {

  }

  componentDidMount() {
    //this.props.dispatch(loadApp());
    this.updateBasket();
  }
  updateBasket() {
    // TODO dispatch
    this.setState({
      total: this.getTotal()
    });
  }

  addToBasket(item) {
    // TODO dispatch instead of mutating
    let newArray = this.state.items.slice();
    newArray.push(item);
    this.setState({ items: newArray }, );
    this.updateBasket();
  }

  setRate(rate) {
    // TODO use dispatch
    this.setState({
      rate: rate
    });
  }

  getTotal() {
    let price = 0;
    this.state.items.map(function (item, index) {
      price = price + item.price;
    });
    return price * this.state.rate;
  }

  props: Props;
  render() {
    return (
      <div className={styles.basket}>
        <AddItem addBasketItem={this.addToBasket.bind(this)} />
        {this.state.items.map(function (item, index) {
          return <div className={styles.basketItem} key={index}>{item.name} {item.price} per {item.unit}</div>;
        })}
        <div className={styles.spacer}></div>
        <div className={styles.dropDown}>
          <ChooseCurrency changeRate={this.setRate.bind(this)}/>
        </div>
        <div className={styles.spacer}></div>
        <div className={styles.total}>Total = {this.getTotal()}</div>

      </div>
    );
  }
}

Basket.defaultProps = {
  items: [],
};

function mapStateToProperties(state) {
  return {
    loaded: state.app.loaded
  };
}

export default connect(mapStateToProperties, dispatch => bindActionCreators(loadApp, dispatch))(Basket);
