import {ExpensesSummary} from '../../components/ExpensesSummary'
import {shallow} from 'enzyme';
import React from 'react';
import expenses from '../fixtures/expenses';

test('should render ExpensesSummary with one expense', ()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount = {1} expensesTotal = {123}/>);
    expect(wrapper).toMatchSnapshot();
})

test('should render ExpensesSummary with multiple expense', ()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount = {12} expensesTotal = {12333}/>);
    expect(wrapper).toMatchSnapshot();
})
