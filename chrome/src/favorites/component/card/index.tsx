import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Encoding from 'encoding-japanese';

import {
  pornstarBaseUrl,
  wikipediaBaseUrl,
  avNameBaseUrl,
} from '../../../Constants';
import type { Pornstar } from '../../../types';

interface FollowingCardProps {
  item: Pornstar;
}

function FollowingCard({ item }: FollowingCardProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  function handleClickMoreVert(event: React.MouseEvent<HTMLElement>): void {
    setAnchorEl(event.currentTarget);
  }

  function handleCloseMenuRequest(): void {
    setAnchorEl(null);
  }

  const escapedName = escape(Encoding.convert(item.name, 'EUCJP'));

  return (
    <>
      <Card>
        <CardHeader
          avatar={
            <Avatar aria-label={item.name}>{item.name.slice(0, 1)}</Avatar>
          }
          action={
            <IconButton onClick={handleClickMoreVert}>
              <MoreVertIcon />
            </IconButton>
          }
          title={item.name}
        />
        <CardMedia
          image={item.coverArtUrl}
          title={item.name}
          style={{ paddingBottom: '67%' }}
        />
        <CardActions>
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
