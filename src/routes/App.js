import Home from '../pages/Home/Home';
import Checkout from '../pages/Checkout/Checkout';
import Navbar from '../components/Navbar/Navbar';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route component={Checkout} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
