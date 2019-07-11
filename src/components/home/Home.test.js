import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Home from "./Home";
import { findByTestAttr, storeFactory } from "../../utils/testUtils";
Enzyme.configure({ adapter: new EnzymeAdapter() });
/**
 * @function setup
 * @param {object} initialState - Component initialState specific to this setup
 * @return {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Home store={store} />).dive();
  return wrapper;
};

setup();

test("Create Store", () => {});
// test("Initial page index", () => {
//   const wrapper = setup({ paginationReducer: 1 });
//   console.log(wrapper);
//   expect(wrapper.props("currentPage")).to.equal(1);
// });
