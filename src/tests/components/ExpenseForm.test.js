import ExpenseForm from "../../components/ExpenseForm";
import { shallow } from "enzyme";
import React from "react";
import expenses from "../fixtures/expenses";

test("should render ExpenseForm", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseForm with expense data", () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render error for invaild from submission", () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {},
  });

  expect(wrapper.state("error").length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test("should set description on input change", () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = "new description";
  wrapper.find("input").at(0).simulate("change", {
    target: { value },
  });
  expect(wrapper.state("description")).toBe(value);
  expect(wrapper).toMatchSnapshot();
});

test("should set note on textarea change", () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = "new note";
  wrapper.find("textarea").simulate("change", {
    target: { value },
  });
  expect(wrapper.state("note")).toBe(value);
  expect(wrapper).toMatchSnapshot();
});

test("should set amount if valid input", () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = '12.50';
    wrapper.find("input").at(1).simulate("change", {
      target: { value },
    });
    expect(wrapper.state("amount")).toBe(value);
    expect(wrapper).toMatchSnapshot();
  });

  test("should not set amount if invalid input", () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = '33.333';
    wrapper.find("input").at(1).simulate("change", {
      target: { value },
    });
    expect(wrapper.state("amount")).toBe('');
    expect(wrapper).toMatchSnapshot();
  });

