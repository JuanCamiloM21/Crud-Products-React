import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import accounting from 'accounting';
import { IconButton } from '@material-ui/core';
import { useStateValue } from '../../context/StateProvider';
import { actions } from '../../reducers/reducer';

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
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'center',
  },
  cartRating: {
    display: 'flex',
  },
}));

export default function CheckoutCard({
  product: { id, name, productType, image, price, rating, description },
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [{ cart }, dispatch] = useStateValue();

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  const deleteToCart = () =>
    dispatch({
      type: actions.DELETE_TO_CART,
      id,
    });

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
      <CardActions disableSpacing className={classes.cardActions}>
        {/* <div className={classes.cartRating}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>&#11088;</p>
            ))}
        </div> */}
        <IconButton>
          <DeleteIcon fontSize='large' onClick={deleteToCart} />
        </IconButton>
      </CardActions>
    </Card>
  );
}
