import Home from '../pages/Home/Home';
import Checkout from '../pages/Checkout/Checkout';
import Navbar from '../components/Navbar/Navbar';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';
import { useEffect } from 'react';
import { auth } from '../firebase';
import { actions } from '../reducers/reducer';
import { useStateValue } from '../context/StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: actions.SET_USER,
          user: authUser,
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/checkout' component={Checkout} />
          <Route path='/' component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
