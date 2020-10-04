import React from 'react';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

export default function Navbar() {
    return(
        <div>
        <Link to="/dashboard" style={{ textDecoration: 'none' }}>
        <Button>
          <span>Dashboard</span>
        </Button>
        </Link>
        <Link to="/books" style={{ textDecoration: 'none' }}>
        <Button>
          <span>Search Books</span>
        </Button>
        </Link>
        <Link to="/videos" style={{ textDecoration: 'none' }}>
        <Button>
          <span>Search Videos</span>
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