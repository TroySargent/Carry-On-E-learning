import React from 'react';
import SavedTable from '../components/SavedTable';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


export default function Saved() {



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
      >
      </SavedTable>
    </Container>
    </>
  );
}