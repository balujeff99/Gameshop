import Home from './Home'
import Login from './Login'
import Products from './Products'
import CartPage from './CartPage'
import NotFound from './NotFound'
import Navigation from './Navigation'
import RegistrationPage from './RegistrationPage'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Navigation/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/RegistrationPage" element={<RegistrationPage/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/cart" element={<CartPage/>}/>
    <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
