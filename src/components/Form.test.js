import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Form from "./Form";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for form component.
 * @function setup
 * @params {object} props - Component props specifit to this setup
 * @params {any} state - Initial state
 * @return {ShallowWrapper}
 */

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<Form {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute for search.
 * @return {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

it("renders form", () => {
  const wrapper = setup();
  const formComponent = findByTestAttr(wrapper, "component-form");
  expect(formComponent.length).toBe(1);
});

it("renders input box", () => {
  const wrapper = setup();
  const inputComponent = findByTestAttr(wrapper, "component-input");
  expect(inputComponent.length).toBe(1);
});

it("initial state as `Annually`", () => {
  const wrapper = setup();
  const initialBottonValueState = wrapper.state("buttonValue");
  expect(initialBottonValueState).toBe("Annually");
});

it("renders dropdown button group", () => {
  const wrapper = setup();
  const buttonValue = findByTestAttr(wrapper, "component-button");
  expect(buttonValue.length).toBe(1);
});

it("renders dropdown buttons", () => {
  const wrapper = setup();
  const buttonValue = findByTestAttr(wrapper, "component-button");
  expect(buttonValue.text()).toBe("Annually");
});

it("changes value state on clicking buttons", () => {
  const wrapper = setup();

  const button = wrapper.find("[value='Weekly']");

  const mockedEvent = { target: { value: "Weekly" } };
  button.simulate("click", mockedEvent);

  const buttonValue = findByTestAttr(wrapper, "component-button");

  expect(wrapper.state("buttonValue")).toBe("Weekly");
  expect(buttonValue.text()).toBe("Weekly");
});
