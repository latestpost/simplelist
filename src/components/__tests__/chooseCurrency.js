import React from 'react';
import { shallow } from 'enzyme';
import ChooseCurrency from '../chooseCurrency';

describe('<ChooseCurrency />', () => {
  it('renders <ChooseCurrency /> container', () => {
    const wrapper = shallow(<ChooseCurrency />);
  });
  it('contains a dropdown field', () => {
    const currencies = [
      { name: 'USD', rate: 1.23 },
      { name: 'GBP', rate: 1.5 }
    ];
    const wrapper = shallow(<ChooseCurrency />);
    expect(wrapper.find('select').length).toBe(1);
    expect(wrapper.find('option').length).toBe(2);  
  });
});
