import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    const isValidArray = Array.isArray(items) && items.length > 0;

    return isValidArray ? (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">todo list</h3>
        {items.map(item => {
          return (
            <TodoItem
              key={item.id}
              title={item.title}
              /* React won't let this as we can't do this in the current state transition */
              /* handleDelete={handleDelete(item.id)} */
              /* Here the arrow function returns the reference, and the reference contains the item id.(implicite return) */
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            />
          );
        })}
        <button
          type="button"
          className="btn btn-danger btn-block text-capitalize mt-5"
          onClick={clearList}
        >
          clear list
        </button>
      </ul>
    ) : null;
  }
}
