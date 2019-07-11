import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Pagination from "./Pagination";

import { findByTestAttr } from "../../utils/testUtils";
/**
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @param {object} state  - Initial state for setup
 * @return {ShallowWrapper}
 */
export const setup = (props = {}) => {
  const wrapper = shallow(<Pagination {...props} />);
  // state && wrapper.setState(state);
  return wrapper;
};

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without crashing", () => {
  const wrapper = setup();
  const paginationComponent = findByTestAttr(wrapper, "component-pagination");
  expect(paginationComponent.length).toBe(1);
});

test("renders next button", () => {
  const wrapper = setup({ currentPage: 1, lastpageIndex: 20 });
  const nextButton = findByTestAttr(wrapper, "next-button");
  expect(nextButton.length).toBe(1);
});

test("hides back button", () => {
  const wrapper = setup({ currentPage: 1, lastpageIndex: 20 });
  const backButton = findByTestAttr(wrapper, "back-button");
  expect(backButton.length).toBe(0);
});

test("renders page display", () => {
  const wrapper = setup();
  const pageDisplay = findByTestAttr(wrapper, "page-display");
  expect(pageDisplay.length).toBe(1);
});

test("page starts at 1", () => {
  const wrapper = setup({ currentPage: 1 });
  const currentPageIndex = findByTestAttr(wrapper, "currentPageIndex-display");
  expect(currentPageIndex.text()).toContain(1);
});
