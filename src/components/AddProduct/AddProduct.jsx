import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Box, Button, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  button: {
    marginBottom: '2rem',
  },
  textField: {
    margin: '5px',
  },
}));

export default function AddProduct({ addOrEditProduct }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const initialStateValues = {
    name: '',
    description: '',
    stock: '',
    price: '',
  };

  const [values, setValues] = useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrEditProduct(values);
    setValues({ ...initialStateValues });
    handleClose();
  };
  return (
    <div>
      <Button
        variant='contained'
        color='primary'
        // type='button'
        className={classes.button}
        onClick={handleOpen}
      >
        Agregar Producto
      </Button>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id='transition-modal-title'>Add Product</h2>
            <form onSubmit={handleSubmit}>
              <Box mt={2}>
                <TextField
                  className={classes.textField}
                  required
                  id='outlined-name'
                  label='Name'
                  name='name'
                  variant='outlined'
                  onChange={handleInputChange}
                  value={values?.name}
                />
                <TextField
                  className={classes.textField}
                  required
                  id='outlined-description'
                  label='Description'
                  name='description'
                  variant='outlined'
                  onChange={handleInputChange}
                  value={values?.description}
                />
              </Box>
              <Box mt={2} pt={2} display='flex'>
                <TextField
                  type='number'
                  className={classes.textField}
                  required
                  id='outlined-stock'
                  label='Stock'
                  name='stock'
                  variant='outlined'
                  onChange={handleInputChange}
                  value={values?.stock}
                />
                <TextField
                  type='number'
                  className={classes.textField}
                  required
                  id='outlined-price'
                  label='Price'
                  name='price'
                  variant='outlined'
                  onChange={handleInputChange}
                  value={values?.price}
                />
              </Box>
              <Box display='flex' justifyContent='center'>
                <Button type='submit' variant='outlined' color='primary'>
                  Add Product
                </Button>
              </Box>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
