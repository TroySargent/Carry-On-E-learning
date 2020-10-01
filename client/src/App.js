import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Navbar from "./components/Navbar"
import Dashboard from "./pages/Dashboard"
import Login from './pages/login';

export default function App() {

  return (
    <Router>

        <Switch>
          <Route exact path="/">
        <Login/>
        </Route>
          <Route path="/dashboard">
            <Dashboard/>
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

