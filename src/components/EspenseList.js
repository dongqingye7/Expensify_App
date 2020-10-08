import React from 'react';
import {connect} from 'react-redux'

const ExpenseList = (props)=> (
    <div>
        <h1>ExpenseList</h1>
        {props.expenses.length}
    </div>)
  
const mapStateToPtopos = (state)=>{
    return {
        expenses: state.expenses,
        filters: state.filters
    }
}
const ConnectedExpenseList = connect(mapStateToPtopos)(ExpenseList);
export default ConnectedExpenseList;