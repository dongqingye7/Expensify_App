import { EditExpensePage } from "../../components/EditExpensePage";
import { shallow } from "enzyme";
import React from "react";
import expenses from "../fixtures/expenses";

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      editExpense={editExpense}
      removeExpense={removeExpense}
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
  expect(editExpense).toHaveBeenLastCalledWith(updates.id, updates);
});

test("should handle removeExpense", () => {
  const id = expenses[0].id;
  wrapper.find("button").prop("onClick")();
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(removeExpense).toHaveBeenLastCalledWith({ id });
});
