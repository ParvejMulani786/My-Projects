
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Cart } from './pages/cart/cart';
import { Shop } from './pages/shop/shop';
import { ShopContextProvider } from './context/shop-context';

function App() {
  return(
    <div className="App">
      <ShopContextProvider> {/* wrap all code inside this component so all components can access state,functions */}
      <Router>
        <Navbar /> {/* To display navbar content above each route componemt*/}
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
