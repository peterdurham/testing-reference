import React from "react";
import TodoList from "./todoList";
import { render, fireEvent, cleanup } from "@testing-library/react";

afterEach(cleanup);

test('renders a header with text "Todo List"', () => {
  const { getByText } = render(<TodoList />);
  const headerElement = getByText(/todo list/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders a text input with the label "Add Todo"', () => {
  const { getByLabelText } = render(<TodoList />);
  const input = getByLabelText(/Add Todo/i);
  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute("type", "text");
  expect(input).toHaveAttribute("id", "todo");
  expect(input.textContent).toBe("");
});

test('renders a button with the text "Submit"', () => {
  const { getByText } = render(<TodoList />);
  const button = getByText(/submit/i);
  expect(button).toBeInTheDocument();
  expect(button).toHaveAttribute("type", "submit");
});

test("input correctly records text", () => {
  const { getByLabelText } = render(<TodoList />);
  const input = getByLabelText("Add Todo");
  expect(input.value).toBe("");
  fireEvent.change(input, { target: { value: "Write code" } });
  expect(input.value).toBe("Write code");
});
