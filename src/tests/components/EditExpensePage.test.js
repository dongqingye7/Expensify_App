import { EditExpensePage } from "../../components/EditExpensePage";
import { shallow } from "enzyme";
import React from "react";
import expenses from "../fixtures/expenses";

let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      startEditExpense={startEditExpense}
      startRemoveExpense={startRemoveExpense}
      history={history}
      expense={expenses[0]}
    />
  );
});

test("should render EditExpensePage correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle editExpense", () => {
  const updates = {
    ...expenses[0],
    amount: 1997,
  };
  wrapper.find("ExpenseForm").prop("onSubmit")(updates);
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(startEditExpense).toHaveBeenLastCalledWith(updates.id, updates);
});

test("should handle removeExpense", () => {
  const id = expenses[0].id;
  wrapper.find("button").prop("onClick")();
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(startRemoveExpense).toHaveBeenLastCalledWith({ id });
});
