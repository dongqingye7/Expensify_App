import ExpenseForm from "../../components/ExpenseForm";
import { shallow } from "enzyme";
import React from "react";
import expenses from "../fixtures/expenses";
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

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


  test('should call onSubmit prop for valid form submission', ()=>{
    const onSubmitSpy = jest.fn();
    //render expense form
    const wrapper = shallow(<ExpenseForm expense = {expenses[0]} onSubmit = {onSubmitSpy}/>);
    wrapper.find("form").simulate("submit", {
        preventDefault: () => {},
      });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    })
  });

  test("should set new date on date change", () => {
    const wrapper = shallow(<ExpenseForm />);
    const momentInstance = moment();
    wrapper.find(SingleDatePicker).prop('onDateChange')(momentInstance);
    expect(wrapper.state("createdAt")).toEqual(momentInstance);
  });

  test("should set new date on date change", () => {
    const wrapper = shallow(<ExpenseForm />);
    const focused = true;
    wrapper.find(SingleDatePicker).prop('onFocusChange')({focused});
    expect(wrapper.state("calendarFocused")).toEqual(focused);
  });