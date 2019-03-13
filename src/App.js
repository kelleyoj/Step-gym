import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/home.jsx";
import Join from "./components/Join/join.jsx";
import About from "./components/About/about";
import Classes from "./components/Classes/classes";
import Trainer from "./components/Trainers/trainer";
import Store from "./components/Store/store";
import Item from "./components/Item/item";
import Cart from "./components/Cart/cart";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" component={Home} />
          <Route path="/join" component={Join} />
          <Route path="/about" component={About} />
          <Route path="/classes" component={Classes} />
          <Route path="/trainer" component={Trainer} />
          <Route path="/store" component={Store} />
          <Route path="/test" component={Item} />
          <Route path="/cart" component={Cart} />
        </div>
      </Router>
    );
  }
}

export default App;
