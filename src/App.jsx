import { Routes, Route } from '@solidjs/router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <div class="min-h-screen flex flex-col">
      <Navbar />
      <div class="flex-grow">
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/product/:id" component={ProductDetail} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;