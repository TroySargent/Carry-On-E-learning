import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function SimpleTable(props) {
  const handleClick = e => {
    console.log(e.target.getAttribute("data-id"))
  }

  const classes = useStyles();

  return (

    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center"> Authors</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Image</TableCell>
            <TableCell align="center">Link</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {props.books.length > 0 ? 
          props.books.map((book) => {
            return (
              <TableRow key={book._id}>
              <TableCell component="th" scope="row" align="center">{book.title}</TableCell>
              <TableCell align="center">{book.authors ? book.authors.join(", ") : "No author listed"}</TableCell>
              <TableCell align="center">{book.description}</TableCell>
              <TableCell align="center"><img src={book.image} alt=""/></TableCell>
              <TableCell align="center"><a target="blank_" href={book.link}>Preview</a></TableCell>
              <TableCell align="center"><button data-id={book._id} onClick={handleClick}>Delete</button></TableCell>
              </TableRow>
              )
            }) :  <TableRow>
            <TableCell component="th" scope="row"></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            </TableRow>
            
          }
        </TableBody>
      </Table>
    </TableContainer>

  );
}
