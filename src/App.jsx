import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {CartProvider} from './context/CartContext';
import Header from './components/Header';
import CartScreen from './screens/CartScreen';
import ProductsScreen from './screens/ProductsScreen';

function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <Header/>
          <Routes>
            <Route path='/'     element={< ProductsScreen />} />
            <Route path='/cart' element={< CartScreen />} />
          </Routes>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
