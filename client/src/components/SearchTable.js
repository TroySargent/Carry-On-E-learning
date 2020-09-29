import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import API from '../utils/API';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function SimpleTable(props) {
  const handleClick = e => {
    let index = e.target.getAttribute("data-id");
    let {title, authors, description, imageLinks: {smallThumbnail}, previewLink} = props.books[index].volumeInfo;
    API.saveItem(
      {title, 
      authors, 
      description, 
      image: smallThumbnail, 
      link: previewLink}
      );
  }

  const classes = useStyles();

  return (

    <TableContainer component={Paper}>
      <Table 
      className={classes.table} 
      aria-label="simple table"
      >
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
          props.books.map((book, index) => {
            return (
              <TableRow key={index} data-id={index}>
              <TableCell component="th" scope="row" align="center">{book.volumeInfo.title}</TableCell>
              <TableCell align="center">{book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "No author listed"}</TableCell>
              <TableCell align="center">{book.volumeInfo.description}</TableCell>
              <TableCell align="center"><img src={book.volumeInfo.imageLinks.smallThumbnail} alt=""/></TableCell>
              <TableCell align="center"><a target="blank_" href={book.volumeInfo.previewLink}>Preview</a></TableCell>
              <TableCell align="center"><button data-id={index} onClick={handleClick}>Save</button></TableCell>
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
