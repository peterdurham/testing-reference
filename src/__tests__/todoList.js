import React from "react";
import TodoList from "../todoList/todoList";
import TodoInput from "../todoList/todoInput";
import TodoOutput from "../todoList/todoOutput";
import { render, fireEvent, cleanup } from "@testing-library/react";

afterEach(cleanup);

test("<TodoList /> renders with correct title", () => {
  const { getByText } = render(<TodoList />);
  const headerElement = getByText(/Todo List/i);
  expect(headerElement).toBeInTheDocument();
});

test('<TodoInput /> form renders a text input with the label "Add Todo"', () => {
  const { getByLabelText } = render(<TodoInput />);
  const input = getByLabelText(/Add Todo/i);
  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute("type", "text");
  expect(input).toHaveAttribute("id", "todo");
  expect(input.textContent).toBe("");
});

test("<TodoInput /> form input properly records text", () => {
  const { getByLabelText, getByTestId } = render(<TodoInput />);
  const input = getByLabelText("todo-input");
  expect(input.value).toBe("");
  fireEvent.change(input, { target: { value: "Write code" } });
  expect(input.value).toBe("Write code");
});

test('<TodoInput /> form renders a button with the text "Submit"', () => {
  const { getByText } = render(<TodoInput />);
  const button = getByText(/Submit/i);
  expect(button).toBeInTheDocument();
  expect(button).toHaveAttribute("type", "submit");
});
