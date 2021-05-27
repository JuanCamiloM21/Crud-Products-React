import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Product from '../Product/Product';
import products from '../../product-data';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));

export default function Products() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {products.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Product key={item.id} product={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
