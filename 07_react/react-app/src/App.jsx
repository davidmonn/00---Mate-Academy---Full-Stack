import { Product } from './components/Product/Product';
import './App.scss';

export const App = () => (
  <div className="App">
    <h1>My Shop</h1>

    <Product
      title="Peperoni Pizza"
      price={100}
    />

    <Product
      title="Chocklate"
      price={30}
    />

    <Product
      title="Water"
      price={0}
    />

  </div>
);
