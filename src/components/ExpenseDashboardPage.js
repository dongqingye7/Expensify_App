import React from "react";
import ConnectedExpenseList from "./ExpenseList";
import ExpenseListFilters from './ExpenseListFilters'
const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <ConnectedExpenseList />
  </div>
);
// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
//   console.log(visibleExpenses);
// });
// const expenseOne = store.dispatch(
//   addExpense({ description: "Rent", amount: 1000, createdAt: 1000 })
// );
// const expenseTwo = store.dispatch(
//   addExpense({ description: "Food", amount: 300, createdAt: 20000 })
// );
// //store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));
// //store.dispatch(setTextFilter("rent"));
// // store.dispatch(setTextFilter());

//  store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(125));
// store.dispatch(setEndDate());

const demoSTate = {
  expenses: [
    {
      id: "sss",
      description: "rent",
      note: "payment",
      amount: "1000",
      createdAt: 0,
    },
  ],
  filters: {
    text: "rental",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined,
  },
};

export default ExpenseDashboardPage;
