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
    let {title, channelTitle, description, thumbnails: {default: {url}}} = props.videos[index].snippet;
    API.saveVideo(
      {title, 
      channelTitle, 
      description, 
      url}
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
            <TableCell align="center">Channel</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Thumbnail</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
         <TableBody>
        {props.videos.length > 0 ? 
          props.videos.map(({snippet}, index) => {
            return (
              <TableRow key={index} data-id={index}>
              <TableCell component="th" scope="row" align="center">{snippet.title}</TableCell>
              <TableCell align="center">{snippet.channelTitle}</TableCell>
              <TableCell align="center">{snippet.description}</TableCell>
              <TableCell align="center"><img src={snippet.thumbnails.default.url} alt=""/></TableCell>
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
