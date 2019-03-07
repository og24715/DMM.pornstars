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

const pornstarBaseUrl = 'http://www.dmm.co.jp/digital/videoa/-/list/=/article=actress/id=';
const wikipediaBaseUrl = 'https://ja.wikipedia.org/wiki/';
const avNameBaseUrl = 'https://seesaawiki.jp/av_neme/d/';

function createUnfollowingHandler(id) {
  return () => {
    chrome.storage.local.get('following', ({ following = [] }) => {
      const newFollowing = following.filter(i => i.id !== id);
      chrome.storage.local.set({ following: newFollowing }, () => {
      });
    });
  };
}

function FollowingCard({ item }) {
  const [anchorEl, setAnchorEl] = useState(null);

  function handleClickMoreVert(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleCloseMenuRequest() {
    setAnchorEl(null);
  }

  function handleClickDetailInWikipedia() {
    const url = `${wikipediaBaseUrl}${item.name}`;
    window.open(url, '_blank');
    setAnchorEl(null);
  }

  function handleClickDetailInAvName() {
    const escapedName = escape(Encoding.convert(item.name, 'EUCJP'));
    const url = `${avNameBaseUrl}${escapedName}`;
    window.open(url, '_blank');
    setAnchorEl(null);
  }

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
          style={{ height: 250 }}
        />
        <CardActions disableActionSpacing>
          <Button
            color="primary"
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
        <MenuItem onClick={handleClickDetailInWikipedia}>
          Wikipediaで見る
        </MenuItem>
        <MenuItem onClick={handleClickDetailInAvName}>
          このAV女優の名前教えてwikiで見る
        </MenuItem>
      </Menu>
    </>
  );
}

export default FollowingCard;
