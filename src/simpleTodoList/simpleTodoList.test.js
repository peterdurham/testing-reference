import React from "react";
import SimpleTodoList from "./simpleTodoList";
import { render, fireEvent, cleanup } from "@testing-library/react";

afterEach(cleanup);

test('renders a header with text "Todo List"', () => {
  const { getByText } = render(<SimpleTodoList />);
  const headerElement = getByText(/simple todo list/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders a text input with the label "Add Todo"', () => {
  const { getByLabelText } = render(<SimpleTodoList />);
  const input = getByLabelText(/Add Todo/i);
  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute("type", "text");
  expect(input).toHaveAttribute("id", "todo");
  expect(input.textContent).toBe("");
});

test('renders a button with the text "Submit"', () => {
  const { getByText } = render(<SimpleTodoList />);
  const button = getByText(/submit/i);
  expect(button).toBeInTheDocument();
  expect(button).toHaveAttribute("type", "submit");
});

test("input correctly records text", () => {
  const { getByLabelText, getByText, getByTestId } = render(<SimpleTodoList />);
  const input = getByLabelText("Add Todo");
  const button = getByText(/submit/i);
  const output = getByTestId("todo-output");
  const todoText = "Write code";

  expect(input.value).toBe("");
  input.value = todoText;
  fireEvent.change(input);
  expect(input.value).toBe("Write code");
  expect(output.children.length).toBe(0);

  fireEvent.click(button);
  expect(output.children.length).toBe(1);
  expect(input.value).toBe("");
});
