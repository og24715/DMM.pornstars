import React from 'react';
import Grid from '@mui/material/Grid';
import type { Pornstar } from '../../../types';

interface CardsProps {
  items: Pornstar[];
  col: number;
  itemRenderer: React.ComponentType<{ item: Pornstar }>;
}

function Cards({ items, col, itemRenderer: ItemRenderer }: CardsProps) {
  return (
    // spacing={3} is 24px, the same gap the Material-UI v3 `spacing={24}` produced.
    <Grid container spacing={3}>
      {items.map((item) => (
        <Grid size={12 / col} key={item.name}>
          <ItemRenderer item={item} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Cards;
