import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

const pornstarBaseUrl = 'http://www.dmm.co.jp/digital/videoa/-/list/=/article=actress/id=';

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
  return (
    <Card>
      <CardHeader
        avatar={(
          <Avatar aria-label={item.name}>
            {item.name.slice(0, 1)}
          </Avatar>
        )}
        title={item.name}
      />
      <CardMedia
        image={item.coverArtUrl}
        title={item.name}
        style={{ height: 200 }}
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
  );
}

export default FollowingCard;
