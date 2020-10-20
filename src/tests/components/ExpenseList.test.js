import {ExpenseList} from '../../components/EspenseList'
import {shallow} from 'enzyme';
import React from 'react';
import expenses from '../fixtures/expenses';

test('should render ExpenseList with expenses', ()=>{
    const wrapper = shallow(<ExpenseList expenses = {expenses}/>);
    expect(wrapper).toMatchSnapshot();
})
