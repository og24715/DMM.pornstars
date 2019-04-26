import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import styled from 'styled-components';

import { getPornstars } from '../utils/chrome';
import Navbar from './component/navbar';
import Card from './component/card';
import Cards from './component/cards';
import ViewMode from './component/viewmode';

const ApplicationWrapper = styled.div``;

const Main = styled.main`
  padding-left: 40px;
  padding-right: 40px;
`;

function App() {
  const [favouritePornstars, setFavoritePornstars] = useState([]);
  const [cardsCol, setCardsCol] = useState(3);

  useEffect(() => {
    getPornstars(({ following = [] }) => {
      setFavoritePornstars(following.reverse());
    });
  }, []);

  function handleToggleViewMode() {
    setCardsCol(cardsCol === 3 ? 4 : 3);
  }

  return (
    <ApplicationWrapper>
      <Navbar />

      <Main>
        <Toolbar>
          <Typography
            variant="h6"
            color="textSecondary"
            style={{ flexGrow: 1 }}
          >
            {favouritePornstars.length}
            名のお気に入り女優
          </Typography>

          <ViewMode
            col={cardsCol}
            onToggle={handleToggleViewMode}
          />
        </Toolbar>

        <Cards
          col={cardsCol}
          items={favouritePornstars}
          itemRenderer={Card}
        />
      </Main>
    </ApplicationWrapper>
  );
}

export default App;
