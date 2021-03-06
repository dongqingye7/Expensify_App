import {LoginPage }from "../../components/LoginPage";
import { shallow } from "enzyme";
import React from "react";


test("should render Login Page", () => {
  const wrapper = shallow(<LoginPage startLogin={()=>{}}/>);
  expect(wrapper).toMatchSnapshot();
});

test("should call startLogin on buttin click", () => {
  const startLogin = jest.fn();
  const wrapper = shallow(<LoginPage startLogin={startLogin} />);
  wrapper.find("button").simulate("click");
  expect(startLogin).toHaveBeenCalled();
});
