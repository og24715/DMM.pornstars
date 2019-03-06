import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const Nabbar = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" component="h1" color="inherit">
        DMM.pornstars
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Nabbar;
