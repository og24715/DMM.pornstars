import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
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
  const [cardCol, setCardCol] = useState(3);

  useEffect(() => {
    chrome.storage.local.get('following', ({ following = [] }) => {
      // const types = [...new Set(following.map(item => item.type))];
      setFollowingPornstars(following.reverse());
    });
  });

  function handleClickToggleViewMode() {
    setCardCol(cardCol === 3 ? 4 : 3);
  }

  return (
    <ApplicationWrapper>
      <Navbar />

      <Main>
        <Toolbar>
          <Typography variant="h6" component="h2" style={{ flexGrow: 1 }}>
            {followingPornstars.length}
            名のお気に入り女優
          </Typography>

          <IconButton onClick={handleClickToggleViewMode}>
            {cardCol === 4 ? (
              <ViewModuleIcon />
            ) : (
              <ViewComfyIcon />
            )}
          </IconButton>
        </Toolbar>

        <Grid container spacing="16">
          {followingPornstars.map(pornstar => (
            <Grid item xs={12 / cardCol} key={pornstar.name}>
              <Card item={pornstar}/>
            </Grid>
          ))}
        </Grid>
      </Main>
    </ApplicationWrapper>
  );
};

export default App;
