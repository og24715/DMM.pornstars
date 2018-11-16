import React from 'react';
import {
  Avatar, Card, Icon,
} from 'antd';

import style from './style';

export default ({ item, isBlur }) => {
  const handleDelete = () => {
    chrome.storage.local.get('following', ({ following = [] }) => {
      const index = following.findIndex(i => i.id === item.id);

      following.splice(index, 1);

      chrome.storage.local.set({ following }, () => {
        console.log('Value is set to', following);
      });
    });
  };

  const Delete = () => (
    <Icon type="delete" onClick={handleDelete} />
  );

  return (
    <a
      rel="noopener noreferrer"
      target="_blank"
      href={`http://www.dmm.co.jp/digital/videoa/-/list/=/article=actress/id=${item.id}/`}
    >
      <Card
        style={{ marginBottom: '15px' }}
        bordered={false}
        hoverable
        actions={[<Delete />]}
        cover={(
          <div style={style.imageWrapper}>
            <img
              style={Object.assign({}, style.image, isBlur && style.imageBlur)}
              alt={item.name}
              src={item.coverArtUrl}
            />
          </div>
      )}
      >
        <Card.Meta
          avatar={<Avatar icon="user" / >}
          title={item.name}
          description={null}
        />
      </Card>
    </a>
  );
};
