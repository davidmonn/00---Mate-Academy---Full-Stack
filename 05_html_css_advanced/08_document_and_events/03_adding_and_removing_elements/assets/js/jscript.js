'use strict';

const app = document.querySelector('.todo-app');
const list = app.querySelector('.todo-app__list');
const form = app.querySelector('.todo-app__form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Adiciona item no comeco da lista
    list.insertAdjacentHTML('beforeend', `
        <li class="add-by-user">
            ${form.elements.todo.value}
            <button onclick="this.parentElement.remove()" class="btn-remove">x</button>
        </li>
        `);

    // Reseta os caracteres do input
    form.reset();
})

/*
form.addEventListener('submit', (event) => {
    // Cria elemento li
    const item = document.createElement('li');
    // Adiciona texto ao novo item
    item.textContent = form.elements.todo.value;

    // Remove item com dois click
    item.addEventListener('dblclick', () => {
        item.remove();
    });

    // Adiciona item no final da lista
    // list.append(item);

    // Adiciona item no comeco da lista
    list.append(item);

    // Reseta os caracteres do input
    form.reset();
})
*/