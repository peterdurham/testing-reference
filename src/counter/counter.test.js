import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Counter from "./counter";

test("Counter properly increments and decrements", () => {
  const { getByText } = render(<Counter />);
  const counter = getByText("0");
  const incrementButton = getByText("More");
  const decrementButton = getByText("Less");

  fireEvent.click(incrementButton);
  expect(counter.textContent).toEqual("1");

  fireEvent.click(decrementButton);
  expect(counter.textContent).toEqual("0");
});
