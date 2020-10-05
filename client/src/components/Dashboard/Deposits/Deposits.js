import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from "../Title/Title";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Overdue() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Overdue Tasks</Title>
      <Typography component="p" variant="h4">
        3
      </Typography>
      <div>
        <Link textDecoration="none" color="black" href="#" onClick={preventDefault}>
          View Overdue Tasks
        </Link>
      </div>
    </React.Fragment>
  );
}