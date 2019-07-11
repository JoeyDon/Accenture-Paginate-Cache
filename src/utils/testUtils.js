import rootReducer from "../reducers";
import { createStore } from "redux";

export const storeFactory = initialState => {
  return createStore(rootReducer, initialState);
};
/**
 * Return ShallowWrapper containing node(s) with the given data-test value
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
 * @param {string} val  - Value of data-test attr for search
 * @return {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};
