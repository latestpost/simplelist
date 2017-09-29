import React from 'react';
import { shallow, render } from 'enzyme';
import { Basket } from '../basket';

describe('<Basket />', () => {
  it('renders <Basket /> container', () => {
    shallow(<Basket />);
  });

  it('should contain a list of items', () => {
    const items = [
      { name: 'Peas', price: 95, unit: 'bag' },
      { name: 'Eggs', price: 210, unit: 'dozen' },
      { name: 'Milk', price: 130, unit: 'bottle' },
      { name: 'Beans', price: 73, unit: 'can' }
    ];
    const wrapper = shallow(<Basket />);
    wrapper.setState({ items: items });
    expect(wrapper.find('.item').length).toBe(4);
  });

  it('should calculate a total price of items', () => {
    const items = [
      { name: 'Peas', price: 95, unit: 'bag' },
      { name: 'Eggs', price: 210, unit: 'dozen' },
      { name: 'Milk', price: 130, unit: 'bottle' },
      { name: 'Beans', price: 73, unit: 'can' }
    ];
    const wrapper = shallow(<Basket items={items} />);
    wrapper.setState({ items: items });
    wrapper.instance().updateBasket();
    expect(wrapper.state().total).toEqual(508);

    const items2 = [
      { name: 'Peas', price: 95, unit: 'bag' },
      { name: 'Eggs', price: 210, unit: 'dozen' },
      { name: 'Milk', price: 130, unit: 'bottle' }
    ];
    const wrapper2 = shallow(<Basket />);
    wrapper2.setState({ items: items2 });
    wrapper2.instance().updateBasket();
    expect(wrapper2.state().total).toEqual(435);
  });

  it('should calculate a total price of items in a different rate', () => {
    const items = [
      { name: 'Peas', price: 95, unit: 'bag' },
      { name: 'Eggs', price: 210, unit: 'dozen' },
      { name: 'Milk', price: 130, unit: 'bottle' },
      { name: 'Beans', price: 73, unit: 'can' }
    ];
    const rate = { name: 'USD', amount: 1.5 };
    const wrapper = shallow(<Basket rate={rate} />);
    wrapper.setState({ items: items });
    wrapper.instance().setRate(rate.amount);
    wrapper.instance().updateBasket();
    expect(wrapper.state().total).toEqual(508 * rate.amount);
  });

  it('should add an item into the basket', () => {
    const items = [
      { name: 'Peas', price: 95, unit: 'bag' },
      { name: 'Eggs', price: 210, unit: 'dozen' },
      { name: 'Milk', price: 130, unit: 'bottle' },
      { name: 'Beans', price: 73, unit: 'can' }
    ];
    const singleItem = { name: 'Peas', price: 95, unit: 'bag' };
    const wrapper = shallow(<Basket />);
    wrapper.setState({ items: items });
    wrapper.instance().addToBasket(singleItem);
    expect(wrapper.find('.item').length).toBe(5);
  });
});
