import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { AddShoppingCart, Delete } from '@material-ui/icons';
import accounting from 'accounting';
import { actions } from '../../reducers/reducer';
import { useStateValue } from '../../context/StateProvider';
import EditProduct from '../EditProduct/EditProduct';
import { db } from '../../firebase';
import { toast } from 'react-toastify';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  action: {
    marginTop: '1rem',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default function Product({
  product: { id, name, price, description, stock, addOrEditProduct, products },
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const [{ user }, dispatch] = useStateValue();

  const [currentId, setCurrentId] = useState('');

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const onDeleteProduct = async (id) => {
    window.confirm('Are you sure yo want to delete this product?') &&
      (await db.collection('products').doc(id).delete());
    toast('Product deleted', {
      type: 'error',
      autoClose: 2000,
    });
  };

  const EditAProduct = async (dataProduct) => {
    await db.collection('products').doc(currentId).update(dataProduct);
    toast('Product Updated successfully', {
      type: 'info',
      autoClose: 2000,
    });
    setCurrentId('');
  };

  const addToCart = () => {
    dispatch({
      type: actions.ADD_TO_CART,
      payload: {
        id,
        name,
        price,
        description,
        stock,
      },
    });
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label='recipe' className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <Typography
            className={classes.action}
            varian='h5'
            color='textSecondary'
          >
            {accounting.formatMoney(price)}
          </Typography>
        }
        title={name}
        subheader={name}
      />
      <CardMedia
        className={classes.media}
        image='https://s2.r29static.com/bin/entry/ebd/0,675,2000,1050/x,80/1929471/image.jpg'
        title='Nike shoes'
      />
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          <h5>Stock: {stock}</h5>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to cart' onClick={addToCart}>
          <AddShoppingCart fontSize='large' />
        </IconButton>
        {/* <IconButton aria-label='share'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>&#11088;</p>
            ))}
        </IconButton> */}
        {user && (
          // <IconButton>
          //   <EditIcon fontSize='large' />
          // </IconButton>
          <>
            <IconButton onClick={() => setCurrentId(id)}>
              <EditProduct {...{ EditAProduct, currentId, products }} />
            </IconButton>
            <IconButton onClick={() => onDeleteProduct(id)}>
              <Delete fontSize='large' />
            </IconButton>
          </>
        )}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography paragraph>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
