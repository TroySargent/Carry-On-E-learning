import React, {useState, useEffect} from 'react';
import SavedTable from '../components/SavedTable';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import API from '../utils/API';

export default function App() {
  const [state, setState] = useState({
    books: [],
    videos: []
  });

  useEffect(
    () => {
      async function fetchData() {
        const bookResponse = await API.getSavedBooks();
        const videoResponse = await API.getSavedVideos();
        console.log(videoResponse)
        setState({videos: videoResponse.videos, books: bookResponse.books });

      }
      fetchData()
    }
  ,[]);


  return (
    <>
    <AppBar position="static" style={{"background-color":"orange"}}>
        <Toolbar style={{"margin":"0 auto", }}>
          <Typography variant="h6" noWrap>
            Saved
          </Typography>
        </Toolbar>
      </AppBar>
    <Container>
      <SavedTable
      books={state.books}
      videos={state.videos}
      >
      </SavedTable>
    </Container>
    </>
  );
}