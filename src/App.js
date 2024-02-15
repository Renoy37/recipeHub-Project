import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Discover from "./components/Discover";
import Home from "./components/Home";
import PostPage from "./components/PostPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/Discover">
            <Discover />
          </Route>
          <Route path="/PostPage">
            <PostPage />
          </Route>
        </Switch>
        <Footer className="ftr" />
      </div>
    </Router>
  );
}

export default App;
