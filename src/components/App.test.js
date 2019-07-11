import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";
import { findByTestAttr } from "../utils/testUtils";
Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @param {object} state  - Initial state for setup
 * @return {ShallowWrapper}
 */
const setup = (props = {}) => {
  const wrapper = shallow(<App {...props} />);
  return wrapper;
};

test("renders without crashing", () => {
  const wrapper = setup();
  const homeComponent = findByTestAttr(wrapper, "component-home");
  expect(homeComponent.length).toBe(1);
});
