import React, { Component } from "react";
import { connect } from "react-redux";
import selectExpensesTotal from "../selectors/expenses-total";
import getVisibleExpenses from "../selectors/expenses";
import numeral from "numeral";
import {Link} from 'react-router-dom'

export class ExpensesSummary extends Component {
  render() {
    const expenseWord = this.props.expenseCount === 1 ? "expense" : "expenses";
    const fomatedExpensesTotal = numeral(this.props.expensesTotal / 100).format(
      "$0,0.00"
    );
    return (
      <div className="page-header">
        <div className="content-container">
          <h2 className = "page-header__title">
            Viewing <span>{this.props.expenseCount}</span> {expenseWord} totalling{" "}
            <span>{fomatedExpensesTotal}</span>
          </h2>
          <div className = "page-header__actions">
            <Link className= "button" to='/create'>Add Expense</Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const expenses = getVisibleExpenses(state.expenses, state.filters);
  return {
    expenseCount: expenses.length,
    expensesTotal: selectExpensesTotal(expenses),
  };
};

const ConnectedExpensesSummary = connect(mapStateToProps)(ExpensesSummary);
export default ConnectedExpensesSummary;
