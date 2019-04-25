import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Encoding from 'encoding-japanese';

import {
  pornstarBaseUrl,
  wikipediaBaseUrl,
  avNameBaseUrl,
} from '../../../Constants';

function FollowingCard({ item }) {
  const [anchorEl, setAnchorEl] = useState(null);

  function handleClickMoreVert(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleCloseMenuRequest() {
    setAnchorEl(null);
  }

  const escapedName = escape(Encoding.convert(item.name, 'EUCJP'));

  return (
    <>
      <Card>
        <CardHeader
          avatar={(
            <Avatar aria-label={item.name}>
              {item.name.slice(0, 1)}
            </Avatar>
          )}
          action={(
            <IconButton onClick={handleClickMoreVert}>
              <MoreVertIcon />
            </IconButton>
          )}
          title={item.name}
        />
        <CardMedia
          image={item.coverArtUrl}
          title={item.name}
          style={{ paddingBottom: '67%' }}
        />
        <CardActions disableActionSpacing>
          <Button
            color="primary"
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            href={`${pornstarBaseUrl}${item.id}`}
          >
            出演作品を見る
          </Button>
        </CardActions>
      </Card>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={handleCloseMenuRequest}
      >
        <MenuItem
          component="a"
          href={`${wikipediaBaseUrl}${item.name}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Wikipediaで見る
        </MenuItem>
        <MenuItem
          component="a"
          href={`${avNameBaseUrl}${escapedName}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          このAV女優の名前教えてwikiで見る
        </MenuItem>
      </Menu>
    </>
  );
}

export default FollowingCard;
