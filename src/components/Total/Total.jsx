import { Button, makeStyles } from '@material-ui/core';
import accounting from 'accounting';
import React from 'react';
import { useStateValue } from '../../context/StateProvider';
import { getTotalCart } from '../../reducers/reducer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '20hv',
  },
  button: {
    marginTop: '2rem',
  },
}));

const Total = () => {
  const classes = useStyles();
  const [{ cart }] = useStateValue();

  return (
    <div className={classes.root}>
      <h5>Total items: {cart?.length}</h5>
      <h5>{accounting.formatMoney(getTotalCart(cart))}</h5>
      <Button className={classes.button} variant='contained' color='secondary'>
        Check out
      </Button>
    </div>
  );
};

export default Total;
