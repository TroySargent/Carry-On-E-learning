import React from 'react';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

export default function Navbar() {
    return(
        <div>
        <Link to="/search" style={{ textDecoration: 'none' }}>
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
    )
}