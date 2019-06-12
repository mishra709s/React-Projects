import React, { Component } from "react";
// import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";

class App extends Component {
  state = {
    items: [],
    /* uuid creates an unique id */
    id: uuid(),
    item: "",
    editItem: false
  };
  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };
  handleSubmit = e => {
    /* preventing default refresh */
    e.preventDefault();
    /* capture the passed data */

    if (this.state.item !== "") {
      const newItem = {
        id: this.state.id,
        title: this.state.item
      };

      /* keeps the updated as well as the existing items in the array */
      const updatedItems = [...this.state.items, newItem];

      /* change the values within the state */
      this.setState({
        items: updatedItems,
        item: "",
        id: uuid(),
        editItem: false
      });
    }
  };
  clearList = () => {
    this.setState({
      items: []
    });
  };
  handleDelete = id => {
    /* Pass the callback function that is applied to each and every items in the array. */
    /* item represents each and every item in the array. */
    /* Only return the item, if the item id doesn't match the id that we are passing */
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems
    });
  };
  handleEdit = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);
    console.log(selectedItem);

    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      editItem: true,
      id: id
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
