import { useState } from 'react';
import cn from 'classnames';
import './App.scss';
import goodsFromServer from './goods.json';
import { GoodList } from './components/GoodList/GoodList';

const SORT_FIELD_ID = 'id';
const SORT_FIELD_NAME = 'name';
const SORT_FIELD_COLOR = 'color';

function getPreparedGoods(goods, { sortField, query }) {
  let preparedGoods = [...goods];

  if (query) {
    preparedGoods = preparedGoods.filter(good => good.name.includes(query));
  }


  if (sortField) {
    preparedGoods.sort((good1, good2) => {
      switch (sortField) {
        case SORT_FIELD_ID:
          return good1[sortField] - good2[sortField];

        case  SORT_FIELD_NAME:
        case  SORT_FIELD_COLOR:
          return good1[sortField].localeCompare(good2[sortField]);
        

        default:
          return 0;
      }
    });
  }

  return preparedGoods;
}

export const App = () => {
  const [sortField, setSortField] = useState('');
  // Criamos essa variavel para receber nossa funcao com os argumentos desejados
  const visibleGoods = getPreparedGoods(goodsFromServer, { sortField, query: '' });

  return (
    <div className="App">

      <header>
        <button onClick={() => setSortField('')} >Reset</button>

        <div>
          Sort by:
          <button
            onClick={() => setSortField(SORT_FIELD_ID)}
            className={cn({ active: sortField === SORT_FIELD_ID } )} 
          >
            id
          </button>
          <button
            onClick={() => setSortField(SORT_FIELD_NAME)}
            className={cn({ active: sortField === SORT_FIELD_NAME } )} 
          >
            name
          </button>
          <button
            onClick={() => setSortField(SORT_FIELD_COLOR)}
            className={cn({ active: sortField === SORT_FIELD_COLOR } )} 
          >
            color
          </button>
        </div>
      </header>

      <GoodList goods={visibleGoods} />

    </div>
  )
};
