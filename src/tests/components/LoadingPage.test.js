import LoadingPage from '../../components/LoadingPage';
import { shallow } from "enzyme";
import React from "react";

test("should render LoadingPage correctly", () => {
    const wrapper = shallow(<LoadingPage />);
    expect(wrapper).toMatchSnapshot();
  });