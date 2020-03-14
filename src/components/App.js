import React, { Component } from "react";
import Filters from "./Filters";
import ArticleList from "./ArticleList";
import UserForm from "./userForm";
import Counter from "./Counter";

class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <UserForm />
        <Filters />
        <ArticleList />
      </div>
    );
  }
}

export default App;
