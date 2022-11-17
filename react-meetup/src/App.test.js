/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/no-debugging-utils */
import { shallow, mount } from "enzyme";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import {BrowserRouter } from 'react-router-dom'
import App from "./App";
import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";

/**
 * Factory funcion to create a ShallowWrapper for the App component
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => shallow(<App />);
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test]='${val}'`);

test("renders App without crashing", () => {
  const wrapper = setup();
  //console.log(wrapper.debug());
  expect(wrapper.exists()).toBe(true);
});

test("renders the navigation component", () => {
  const wrapper = setup();
  expect(wrapper.find(MainNavigation).length).toBe(1);
});

test("renders the Layout component", () => {
  const wrapper = setup();
  expect(wrapper.find(Layout).length).toBe(1);
});

// test("scrolling makes the header appear or dissapear", async () => {
//   render(<App />, { wrapper: BrowserRouter });
//   const header = screen.getByTestId("navigation-header");
//   const container = screen.getByTestId("app");
//   fireEvent.scroll(container, { target: { scrollY: 150 } });
//   expect(header).toBeFalsy();
// });