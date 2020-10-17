import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";

import { addExpense, removeExpense, editExpense } from "./actions/expenses";
import getVisibleExpenses from "./selectors/expenses";
import {
  setTextFilter,
  setStartDate,
  setEndDate,
  sortByDate,
  sortByAmount,
} from "./actions/filters";

import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

store.dispatch(
  addExpense({ description: "water bill", amount: 100, createdAt: 20000 })
);
store.dispatch(
  addExpense({ description: "gas bill", amount: 30, createdAt: 90000 })
);
store.dispatch(
  addExpense({ description: "rent", amount: 1030, createdAt: 1880000 })
);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
