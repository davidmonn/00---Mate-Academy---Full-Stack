import './App.scss';
import goods from './goods.json';

export const App = () => (
  <div className="App">

    <h1>Goods List</h1>

    <div className="GoodList">

      {goods.map(good => (
        <div
          key={good.id}
          className="GoodCard" style={{ color: good.color }}
        >
          {`${good.name} ${good.id}`}
        </div>
      ))}

    </div>

  </div>
);
