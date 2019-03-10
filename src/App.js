import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/home.jsx";
import Join from "./components/Join/join.jsx";
import About from "./components/About/about";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" component={Home} />
          <Route path="/join" component={Join} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
