import React from 'react';
import Grid from '@material-ui/core/Grid';

function Cards({
  items,
  col,
  itemRenderer: ItemRenderer,
}) {
  return (
    <Grid
      container
      spacing={24}
    >
      {items.map(item => (
        <Grid
          item
          xs={12 / col}
          key={item.name}
        >
          <ItemRenderer item={item} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Cards;
