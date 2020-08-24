import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoForm from "./todoForm";

test("TodoForm should add new item and call onAddItem callback prop", () => {
  const addItem = jest.fn();
  const { getByTestId } = render(<TodoForm onAddItem={addItem} />);

  let newItem = "Get Milk";
  fireEvent.change(getByTestId("newItemField"), { target: { value: newItem } });
  getByTestId("addBtn").click();

  expect(addItem).toBeCalledWith({ newItemValue: newItem });
  expect(addItem).toHaveBeenCalledTimes(1);
});
