import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { ShoppingCart } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../context/StateProvider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: '7rem',
  },
  appBar: {
    backgroundColor: 'blue',
    boxShadow: 'none',
  },
  grow: {
    flexGrow: 1,
  },
  button: {
    marginLeft: theme.spacing(2),
  },
  image: {
    marginRight: '10px',
    height: '1rem',
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className={classes.root}>
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <Link to='/'>
            <IconButton
              edge='start'
              className={classes.menuButton}
              color='inherit'
              aria-label='menu'
            >
              <img
                classNameass={classes.image}
                alt='El LAB Coworking'
                data-no-retina=''
                nitro-lazy-src='https://cdn-bfpba.nitrocdn.com/buFZBcLMvowUSlkErMuWGqAMqVsjzlcb/assets/static/optimized/rev-7ed4afe/wp-content/uploads/2017/08/el-lab-logo-waco-blanco.png'
                nitro-lazy-empty=''
                id='MjMyOjI0Ng==-1'
                src='https://cdn-bfpba.nitrocdn.com/buFZBcLMvowUSlkErMuWGqAMqVsjzlcb/assets/static/optimized/rev-7ed4afe/wp-content/uploads/2017/08/el-lab-logo-waco-blanco.png'
              ></img>
            </IconButton>
          </Link>
          <div className={classes.grow}></div>
          <Typography variant='h5' component='p'>
            Hola Invitado
          </Typography>
          <div className={classes.button}>
            <Button variant='outlined'>
              <strong>Sing In</strong>
            </Button>
            <Link to='checkout'>
              <IconButton aria-label='show cart items' color='inherit'>
                <Badge badgeContent={cart?.length} color='secondary'>
                  <ShoppingCart fontSize='large' color='primary' />
                </Badge>
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
