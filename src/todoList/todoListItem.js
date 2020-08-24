import React from "react";

class TodoListItem extends React.Component {
  onClickClose = () => {
    const { index, removeItem } = this.props;
    removeItem(index);
  };

  onClickDone = () => {
    const { index, markTodoDone } = this.props;
    markTodoDone(index);
  };

  render() {
    const { item } = this.props;
    const todoClass = item.done ? "done" : "undone";
    return (
      <div data-testid={`todoItem${item.index}`}>
        <div className={todoClass}>
          <span
            data-testid="markAsCompleted"
            className="glyphicon glyphicon-ok icon"
            aria-hidden="true"
            onClick={this.onClickDone}
          />
          {item.value}
          <span
            data-testid="markAsDeleted"
            className="glyphicon glyphicon-remove-sign close"
            aria-hidden="true"
            onClick={this.onClickClose}
          />
        </div>
      </div>
    );
  }
}

export default TodoListItem;
