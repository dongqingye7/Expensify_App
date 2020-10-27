const selectExpensesTotal = (expenses) => {
  if (expenses.length === 0) {
    return 0;
  } else {
    const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    return total;
  }
};

export default selectExpensesTotal;
