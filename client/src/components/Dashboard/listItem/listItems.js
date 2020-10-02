import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import InputIcon from '@material-ui/icons/Input';
import SearchIcon from '@material-ui/icons/Search';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import YoutubeSearchedForIcon from '@material-ui/icons/YoutubeSearchedFor';
import LockIcon from '@material-ui/icons/Lock';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import Link from '@material-ui/core/Link';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <InputIcon />
      </ListItemIcon>
      <ListItemText primary="Input Tasks" />
    </ListItem>
    <ListItem button >
      <ListItemIcon>
        <SearchIcon />
      </ListItemIcon>
      <ListItemText primary="Search Books"  />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <YoutubeSearchedForIcon />
      </ListItemIcon>
      <ListItemText primary="Search Videos" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FormatListNumberedIcon />
      </ListItemIcon>
      <ListItemText primary="View All Tasks" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LockIcon />
      </ListItemIcon>
      <ListItemText primary="Log Out" />
      <Link href="http://localhost:3000/"></Link>
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved Resources</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <BookmarksIcon />
      </ListItemIcon>
      <ListItemText primary="Saved Books" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BookmarksIcon />
      </ListItemIcon>
      <ListItemText primary="Saved Videos" />
    </ListItem>
  </div>
);