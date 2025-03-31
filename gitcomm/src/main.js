import { getOrderedList, getUnorderedList, getShoppingList, addToShoppingList } from './list.js';

function displayLists() {
    const ulList = getUnorderedList();
    const olList = getOrderedList();
    const lista = getShoppingList();

    const ulElement = document.getElementById("unorderedList");
    const olElement = document.getElementById("orderedList");
    const listaElement = document.getElementById("listkiir");

    ulElement.innerHTML = "";
    olElement.innerHTML = "";
    listaElement.innerHTML = "";

    ulList.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ulElement.appendChild(li);
    });

    olList.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        olElement.appendChild(li);
    });

    lista.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        listaElement.appendChild(li);  
    });
}

function lista() {
    const inputElement = document.getElementById("shopping");
    const newItem = inputElement.value.trim();

    if (newItem) {
        addToShoppingList(newItem);  
        inputElement.value = "";
        displayLists();
    }
}

function init() {
    document.getElementById("add").addEventListener("click", lista);
    displayLists();
}

document.addEventListener("DOMContentLoaded", init);
