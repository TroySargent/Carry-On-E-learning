import React, {useState, useEffect} from 'react';
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

export default function SimpleTable() {
  const [state, setState] = useState({
    books: [],
    videos: []
  });

  useEffect(
    () => {
      async function fetchData() {
        const bookResponse = await API.getSavedBooks();
        const videoResponse = await API.getSavedVideos();
        setState({videos: videoResponse.videos, books: bookResponse.books });

      }
      fetchData()
    }
  ,[]);

  const handleBookDelete = e => {
    let id = e.target.getAttribute("data-id");
    API.deleteBook(id);
    window.location.reload(false);
  }

  const handleBookStatusToggle = e => {
    let id = e.target.getAttribute("data-id");
    let index = e.target.getAttribute("data-index");
    let newStatus = !state.books[index].completed;
    API.updateBook(id, {...state.books[index], completed: newStatus});
    window.location.reload();
  }

  const handleBookDateUpdate = e => {
    let id = e.target.getAttribute("data-id");
    let index = e.target.getAttribute("data-index");
    let newStatus = new Date().setDate(new Date(state.books[index].targetDate).getDate() + 7);
    API.updateBook(id, {...state.books[index], targetDate: newStatus});
    window.location.reload();
  }

  const handleVideoDelete = e => {
    let id = e.target.getAttribute("data-id");
    API.deleteVideo(id);
    window.location.reload(false);
  }

  const handleVideoDateUpdate = e => {
    let id = e.target.getAttribute("data-id");
    let index = e.target.getAttribute("data-index");
    let newStatus = new Date().setDate(new Date(state.videos[index].targetDate).getDate() +7);
    console.log(state.videos[index])
    console.log(newStatus)
    API.updateVideo(id, {...state.videos[index], targetDate: newStatus});
    window.location.reload();
  }

  const handleVideoStatusToggle = e => {
    let id = e.target.getAttribute("data-id");
    let index = e.target.getAttribute("data-index");
    let newStatus = !state.videos[index].completed;
    API.updateVideo(id, {...state.videos[index], completed: newStatus});
    window.location.reload();
  }

  const classes = useStyles();

  return (
    <>
    <h2>Saved Books</h2>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center"> Authors</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Image</TableCell>
            <TableCell align="center">Link</TableCell>
            <TableCell align="center">Deadline</TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {state.books.length > 0 ? 
          state.books.map((book, index) => {
            return (
              <TableRow key={book._id}
              style={{textDecoration: book.completed ? "line-through": ""}}
              >
              <TableCell component="th" scope="row" align="center">{book.title}</TableCell>
              <TableCell align="center">{book.authors ? book.authors.join(", ") : "No author listed"}</TableCell>
              <TableCell align="center">{book.description}</TableCell>
              <TableCell align="center"><img src={book.image} alt=""/></TableCell>
              <TableCell align="center"><a target="blank_" href={book.link}>Preview</a></TableCell>
              <TableCell align="center">{new Date(book.targetDate).toLocaleDateString()}</TableCell>
              <TableCell align="center"><button data-id={book._id} data-index={index} onClick={handleBookStatusToggle}>Toggle Status</button></TableCell>
              <TableCell align="center"><button data-id={book._id} data-index={index} onClick={handleBookDateUpdate}>Extend Deadline</button></TableCell>
              <TableCell align="center"><button data-id={book._id} onClick={handleBookDelete}>Delete</button></TableCell>
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
    <h2>Saved Videos</h2>
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
          <TableCell align="center">Deadline</TableCell>
          <TableCell align="center"></TableCell>
          <TableCell align="center"></TableCell>
          <TableCell align="center"></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {state.videos.length > 0 ? 
        state.videos.map((video, index) => {
          return (
            <TableRow key={index} 
            style={{textDecoration: video.completed ? "line-through": ""}}
            >
            <TableCell component="th" scope="row" align="center">{video.title}</TableCell>
            <TableCell align="center">{video.channelTitle}</TableCell>
            <TableCell align="center">{video.description}</TableCell>
            <TableCell align="center"><img src={video.url} alt=""/></TableCell>
            <TableCell align="center">{new Date(video.targetDate).toLocaleDateString()}</TableCell>
            <TableCell align="center"><button data-id={video._id} data-index={index} onClick={handleVideoStatusToggle}>Toggle Status</button></TableCell>
            <TableCell align="center"><button data-id={video._id} data-index={index} onClick={handleVideoDateUpdate}>Extend Deadline</button></TableCell>
            <TableCell align="center"><button data-id={video._id} onClick={handleVideoDelete}>Delete</button></TableCell>
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
    </>
  );
}
