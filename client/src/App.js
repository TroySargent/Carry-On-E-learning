import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Saved from "./pages/Saved";
import SearchBooks from "./pages/SearchBooks";
import SearchVideos from "./pages/SearchVideos";
import Navbar from "./components/Navbar"
import Dashboard from "./pages/Dashboard"
import Login from './pages/Login';

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
          <Route path="/books">
            <Navbar/>
            <SearchBooks/>
          </Route>
          <Route path="/videos">
            <Navbar/>
            <SearchVideos/>
          </Route>
          <Route path="/saved">
            <Navbar/>
            <Saved/>
          </Route>
        </Switch>

    </Router>
  );
}

