import Home from '../pages/Home/Home';
import Checkout from '../pages/Checkout/Checkout';
import Navbar from '../components/Navbar/Navbar';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';

function App() {
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
