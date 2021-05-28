import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Product from '../Product/Product';
import products from '../../product-data';
import { Box } from '@material-ui/core';
import { useStateValue } from '../../context/StateProvider';
import AddProduct from '../AddProduct/AddProduct';
import { db } from '../../firebase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));

export default function Products() {
  const classes = useStyles();
  const [{ user }] = useStateValue();
  const [products, setProducts] = useState([]);

  const addOrEditProduct = async (dataProduct) => {
    await db.collection('products').doc().set(dataProduct);
    console.log('New product add');
  };

  const getProducts = () => {
    db.collection('products').onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProducts(docs);
    });
  };
  console.log(products);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={classes.root}>
      {user && (
        <Box>
          <AddProduct addOrEditProduct={addOrEditProduct} />
        </Box>
      )}
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
