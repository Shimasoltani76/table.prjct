import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function MyForm() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Name" />
      <TextField id="filled-basic" label="Family"  />
      <TextField id="outlined-basic" label="Age"  />
      <TextField id="outlined-basic" label="City"  />
      <TextField id="outlined-basic" label="Region"  />
    </form>
  );
}
