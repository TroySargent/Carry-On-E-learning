import React, {useState, useEffect} from 'react';
import SavedTable from '../components/SavedTable';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import API from '../utils/API';

export default function App() {
  const [bookState, setBookState] = useState({
    books: [],
  });

  useEffect(
    () => {
      async function fetchData() {
        const response = await API.getSaved();
        setBookState({ books: response });
      }
      fetchData()
    }
  ,[]);


  return (
    <>
    <AppBar position="static">
        <Toolbar style={{"margin":"0 auto"}}>
          <Typography variant="h6" noWrap>
            Saved
          </Typography>
        </Toolbar>
      </AppBar>
    <Container>
      <SavedTable
      books={bookState.books}>
      </SavedTable>
    </Container>
    </>
  );
}