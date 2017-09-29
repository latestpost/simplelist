import React from 'react';
import { shallow } from 'enzyme';
import AddItem from '../addItem';

describe('<AddItem />', () => {
  it('renders <AddItem /> container', () => {
    const wrapper = shallow(<AddItem />);
  });
  it('contains a dropdown field', () => {
    const products = [
      { name: 'Peas – 95p per bag' },
      { name: 'Eggs – £2.10 per dozen' },
      { name: 'Milk – £1.30 per bottle' },
      { name: 'Beans – 73p per can' }
    ];
    const wrapper = shallow(<AddItem />);
    expect(wrapper.find('select').length).toBe(1);
    expect(wrapper.find('option').length).toBe(4);  
  });
  it('contains a button', () => {
    const wrapper = shallow(<AddItem />);
    expect(wrapper.find('button').length).toBe(1);
  });
});
