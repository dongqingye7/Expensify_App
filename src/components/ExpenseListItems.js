import React from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to = {`/edit/${id}`}>
    <h3>{description}</h3>
    </Link>
    <p>
      {numeral(amount/100).format('$0,0.00')} - {moment(createdAt).format('MMMM Do, YYYY')}
    </p>

  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters),
  };
};
export default connect()(ExpenseListItem);
