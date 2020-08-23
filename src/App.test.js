import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders Testing reference title", () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Testing reference/i);
  expect(titleElement).toBeInTheDocument();
});
