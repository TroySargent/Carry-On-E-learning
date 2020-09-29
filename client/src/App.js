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
          <Route path="/">
          <div className="g-signin2" data-onsuccess="onSignIn"></div>
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

