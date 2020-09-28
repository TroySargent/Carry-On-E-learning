import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Button from '@material-ui/core/Button';

export default function App() {

  return (
    <Router>
      <div>
          <Link to="/" style={{ textDecoration: 'none' }}>
          <Button>
            <span>Search</span>
          </Button>
          </Link>
          <Link to="/saved" style={{ textDecoration: 'none' }}>
          <Button>
            <span>Saved</span>
          </Button>
          </Link>
      </div>

        <Switch>
          <Route exact path="/">
            <Search/>
          </Route>
          <Route exact path="/saved">
            <Saved/>
          </Route>
        </Switch>

    </Router>
  );
}

