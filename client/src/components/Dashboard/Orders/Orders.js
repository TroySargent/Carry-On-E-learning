import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Title from "../Title/Title";
import Saved from "../../SavedTable"

// function createData(id, startDate, tasks, overview, dueDate) {
//   return { id, startDate, tasks, overview, dueDate };
// }

// const rows = [
//   createData(0, '1 Jan, 2021', 'Task 1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula risus risus.', '30 Jan, 2021'),
//   createData(1, '15 Mar, 2021', 'Task 2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula risus risus.', '20 May, 2021'),
//   createData(2, '25 May, 2021', 'Task 3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula risus risus.', '1 July, 2021'),
//   createData(3, '5 Aug, 2021', 'Task 4', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula risus risus.', '1 Dec, 2021'),
//   createData(4, '30 Nov, 2021', 'Task 5', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula risus risus.', '15 Dec, 2021'),
// ];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Tasks</Title> 
      <Saved></Saved>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See all tasks
        </Link>
      </div>
    </React.Fragment>
  );
}