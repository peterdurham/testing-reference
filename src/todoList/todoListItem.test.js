import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoListItem from "./TodoListItem";

test("TodoListItem should render passed props as content body and respond to callback props", () => {
  const markTodoDone = jest.fn();
  const removeItem = jest.fn();

  const item = { index: 3, value: "Fill Gas", done: false };
  let itemIndex = 5;
  const { getByTestId } = render(
    <TodoListItem
      item={item}
      index={itemIndex}
      markTodoDone={markTodoDone}
      removeItem={removeItem}
    />
  );

  expect(getByTestId("todoItem3").textContent).toBe("Fill Gas");

  fireEvent.click(getByTestId("markAsCompleted"));
  expect(markTodoDone).toBeCalledWith(itemIndex);
  expect(markTodoDone).toHaveBeenCalledTimes(1);

  fireEvent.click(getByTestId("markAsDeleted"));
  expect(removeItem).toBeCalledWith(itemIndex);
  expect(removeItem).toHaveBeenCalledTimes(1);
});
