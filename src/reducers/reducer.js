export const initialState = {
  cart: [],
  user: null,
};

export const actions = {
  ADD_TO_CART: 'ADD_TO_CART',
  DELETE_TO_CART: 'DELETE_TO_CART',
  SET_USER: 'SET_USER',
  EMPTY_CART: 'EMPTY_CART',
};

export const getTotalCart = (cart) => {
  return cart?.reduce((amount, item) => item.price + amount, 0);
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case 'DELETE_TO_CART':
      const index = state.cart.findIndex((item) => item.id === action.id);
      let newCart = [...state.cart];
      if (index > 0) {
        newCart.splice(index, 1);
      } else {
        console.log('Cant remove product');
      }
      return {
        ...state,
        cart: newCart,
      };
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'EMPTY_CART':
      return {
        ...state,
        cart: action.cart,
      };
    default:
      return state;
  }
};

export default reducer;
