import { getOrderedList, getUnorderedList } from './list.js'

function displayLists() {
    const ulList = getUnorderedList();
    const olList = getOrderedList();

    const ulElement = document.getElementById("unorderedList");
    const olElement = document.getElementById("orderedList");


    ulElement.innerHTML = "";
    olElement.innerHTML = "";


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
}
function init() {
  displayLists();
}


document.addEventListener("DOMContentLoaded", init)