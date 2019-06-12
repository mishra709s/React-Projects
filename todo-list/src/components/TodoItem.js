import React, { Component } from "react";
import "./TodoItem.css";

export default class TodoItem extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2 border-secondary rounded">
        <h6>{title}</h6>
        <div className="todo-icon">
          <span className="mx-2 text-success">
            <i className="fas fa-pen test-class" onClick={handleEdit} />
          </span>
          <span className="mx-2 text-danger">
            <i className="fas fa-trash test-class" onClick={handleDelete} />
          </span>
        </div>
      </li>
    );
  }
}
