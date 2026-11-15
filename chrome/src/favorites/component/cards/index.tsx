import React from 'react';
import Grid from '@material-ui/core/Grid';
import type { Pornstar } from '../../../types';

interface CardsProps {
  items: Pornstar[];
  col: number;
  itemRenderer: React.ComponentType<{ item: Pornstar }>;
}

function Cards({ items, col, itemRenderer: ItemRenderer }: CardsProps) {
  return (
    <Grid container spacing={24}>
      {items.map((item) => (
        <Grid item xs={(12 / col) as 3 | 4} key={item.name}>
          <ItemRenderer item={item} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Cards;
