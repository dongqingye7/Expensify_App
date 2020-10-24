import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { shallow } from "enzyme";
import React from "react";
import { filters, altFilters } from "../fixtures/filters";
import { DateRangePicker } from "react-dates";
import moment from 'moment';

let setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByAmount = jest.fn();
  sortByDate = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      setTextFilter={setTextFilter}
      sortByAmount={sortByAmount}
      sortByDate={sortByDate}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      filters = {filters}
    />
  );
});

test("should render ExpenseListFilters correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseListFilters correctly with alt data", () => {
  wrapper.setProps({
    filters: altFilters,
  });
  expect(wrapper).toMatchSnapshot();
});

test("should handle text change", () => {
  const value = "b";
  wrapper.find('input').simulate("change", {
    target: {
      value,
    },
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test("should handle sort by date", () => {
    const value = 'date';
    wrapper.setProps({
        filters: altFilters,
      });
    wrapper.find('select').simulate("change", {
      target: {
        value
      },
    });
    expect(sortByDate).toHaveBeenCalled();
  });

  test("should handle sort by amount", () => {
    const value = 'amount';
    wrapper.find("select").simulate("change", {
      target: {
        value
      },
    });
    expect(sortByAmount).toHaveBeenCalled();
  });

  test("should handle date changes", () => {
    const startDate = moment(0);
    const endDate = moment(1);
    wrapper.find(DateRangePicker).prop('onDatesChange')({ startDate, endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
  });

  test("should handle date foucus changes", () => {
    const calendarFocused = 'endDate';
    wrapper.find(DateRangePicker).prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
  });
