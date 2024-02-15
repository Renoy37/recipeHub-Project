import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Discover from './components/Discover';
import Home from './components/Home';
import PostPage from './PostPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/discover" component={Discover} />
          <Route path="/post" component={PostPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
