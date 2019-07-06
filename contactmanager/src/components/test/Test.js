import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: ""
  };

  /* 2nd Popular. Will fire off after the component mounts.
  Here we make http calls to the API from the backend, fetching data from within the component, and putting it into the component state. */
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }

  /* (DEPRICATED - can use in react 17 but have to use an UNSAFE_ flag to be able to use it.) It runs before componentDidMount(). */
  /* componentWillMount() {
    console.log("componentWillMount...");
  } */

  /* This runs only when the component updates(changing the state or something like that). 
  
  Take to the context.js and put it before render() and save.
  
  Goto list of contacts and delete.*/
  /* componentDidUpdate() {
    console.log("componentDidUpdate...");
  } */

  /* (DEPRICATED - can use in react 17 but have to use an UNSAFE_ flag to be able to use it.) This runs before componentDidUpdate(). 
  New method rewriten is - getSnapshotBeforeUpdate()
  */
  /* componentWillUpdate() {
    console.log("componentWillUpdate...");
  } */

  /* When your component receives new properties,then this will run. This is usually used with redux.
  
  When you have a state in redux, like application level state, you can take it into a single component and map it as props, so you can turn the piece of state into a component prop and then that's when it runs and then you can the new props that's comming in(here nextProps)and do the modifications as required.
  
  New method rewriten is - getDerivedStateFromProps()
  */
  /* componentWillReceiveProps(nextProps, nextState) {
    console.log("componentWillReceiveProps...");
  } */

  /* static getDerivedStateFromProps(nextProps, prevState) {
    // return null;
    return {
      test: "something"
    };
  } */

  /* getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
  } */
  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}
export default Test;
