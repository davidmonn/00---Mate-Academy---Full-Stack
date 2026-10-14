import { createRoot } from 'react-dom/client';
// Iremos passar o nome da variavel que esta sendo importada dentro da chaves
// E dentro das aspas adicionamos o caminhho
import { App } from './App';
// Essa forma nao é muito usada, ja que tb nao temos nem autopreencher
// import Valor from './App';

// Seletor por id
const element = document.querySelector("#root")

createRoot(element).render(

  <App />
    
);