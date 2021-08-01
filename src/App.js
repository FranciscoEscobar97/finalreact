
import './App.css';
import Products from './components/Products'
import NavBar from './components/NavBar'
import CartView from './components/CartView'
import CartProduct from './components/CartProduct'
import {Switch,BrowserRouter as Router,Route} from 'react-router-dom'



function App() {
  return (
    
    <Router>
    <div className="App">
      <NavBar/>
      <Switch>
      <Route path="/cartview">
        <CartView/>
      </Route>
        <Route path="/">
          <Products/>
        </Route>
      </Switch>
      
    </div>
    </Router>
   
  );
}

export default App;
