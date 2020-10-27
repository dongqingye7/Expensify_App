import React, { Component } from "react";
import { connect } from "react-redux";
import selectExpensesTotal from "../selectors/expenses-total";
import getVisibleExpenses from "../selectors/expenses";
import numeral from "numeral";

export class ExpensesSummary extends Component {
  render() {
    const expenseWord = this.props.expenseCount === 1 ? "expense" : "expenses";
    const fomatedExpensesTotal = numeral(this.props.expensesTotal / 100).format("$0,0.00");
    return (
      <div>
        <h1>
          Number of {expenseWord} below: {this.props.expenseCount}
        </h1>
        <h1>Total amount: {fomatedExpensesTotal}</h1>
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
