import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from "../Title/Title";

function createData(id, startDate, tasks, overview, dueDate) {
  return { id, startDate, tasks, overview, dueDate };
}

const rows = [
  createData(0, '1 Jan, 2021', 'Task 1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula risus risus.', '30 Jan, 2021'),
  createData(1, '15 Mar, 2021', 'Task 2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula risus risus.', '20 May, 2021'),
  createData(2, '25 May, 2021', 'Task 3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula risus risus.', '1 July, 2021'),
  createData(3, '5 Aug, 2021', 'Task 4', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula risus risus.', '1 Dec, 2021'),
  createData(4, '30 Nov, 2021', 'Task 5', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula risus risus.', '15 Dec, 2021'),
];

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
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Start Date</TableCell>
            <TableCell>Task</TableCell>
            <TableCell>Overview</TableCell>
            {/* <TableCell>Due Date</TableCell> */}
            <TableCell align="right">Due Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.startDate}</TableCell>
              <TableCell>{row.tasks}</TableCell>
              <TableCell>{row.overview}</TableCell>
              {/* <TableCell>{row.paymentMethod}</TableCell> */}
              <TableCell align="right">{row.dueDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See all tasks
        </Link>
      </div>
    </React.Fragment>
  );
}