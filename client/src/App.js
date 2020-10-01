import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Navbar from "./components/Navbar"

export default function App() {

  return (
    <Router>

        <Switch>
          <Route exact path="/">
          <div className="section"><a href="/auth/google" className="btn red darken-1">
        <i className="fab fa-google left"></i>Login With Google</a></div>
          <div className="section"><a href="/auth/logout" className="btn red darken-1">
        <i className="fab fa-google left"></i>Logout</a></div>
          </Route>
          <Route path="/search">
            <Navbar/>
            <Search/>
          </Route>
          <Route path="/saved">
            <Navbar/>
            <Saved/>
          </Route>
        </Switch>

    </Router>
  );
}

