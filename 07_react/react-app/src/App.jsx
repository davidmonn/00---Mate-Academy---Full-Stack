import { Product } from './components/Product/Product';

export const App = () => (
  <div className="App">
    <h1>My Shop</h1>

    <Product
      title="Peperoni Pizza"
      price={100}
    />

    <Product
      title="Chocklate"
      price={0}
    />

    <Product
      title="Water"
      price={[0, 1, 2, 3]}
    />

  </div>
);
