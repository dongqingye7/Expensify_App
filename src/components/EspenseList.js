import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItems'
import getVisibleExpenses from '../selectors/expenses'

const ExpenseList = (props)=> (
    <div>
        <h1>ExpenseList</h1>
        {props.expenses.map((expense) => {
            return <ExpenseListItem {...expense} key = {expense.id} />
        })}
    </div>)
  
const mapStateToProps = (state)=>{
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    }
}
const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);
export default ConnectedExpenseList;