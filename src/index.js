import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './routes/App';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './context/StateProvider';
import reducer, { initialState } from './reducers/reducer';
import './firebase';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#f44336',
    },
    cart: {
      main: '#ffffff',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
