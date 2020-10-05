import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Title from "../Title/Title";
import Saved from "../../SavedTable"



function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function SavedResources() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Tasks</Title> 
      <Saved></Saved>
    </React.Fragment>
  );
}