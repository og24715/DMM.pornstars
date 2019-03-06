import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import FilterListIcon from '@material-ui/icons/FilterList';
import styled from 'styled-components';

import Navbar from './component/navbar';
import Card from './component/card';

const ApplicationWrapper = styled.div``;

const Main = styled.main`
  padding-left: 40px;
  padding-right: 40px;
`;

const App = () => {
  const [followingPornstars, setFollowingPornstars] = useState([]);
  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    chrome.storage.local.get('following', ({ following = [] }) => {
      // const types = [...new Set(following.map(item => item.type))];
      setFollowingPornstars(following.reverse());
    });
  });

  return (
    <ApplicationWrapper>
      <Navbar />


      <Main>
        <Toolbar>
          <Typography variant="h6" component="h2" style={{ flexGrow: 1 }}>
            {followingPornstars.length}
            名のお気に入り女優
          </Typography>

        </Toolbar>

        <Grid container spacing="8">
          {followingPornstars.map(pornstar => (
            <Grid item xs="3" key={pornstar.name}>
              <Card item={pornstar}/>
            </Grid>
          ))}
        </Grid>
      </Main>
    </ApplicationWrapper>
  );
};

export default App;
