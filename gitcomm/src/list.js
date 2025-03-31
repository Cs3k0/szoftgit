export function getUnorderedList() {
    return [
        "Alma",
        "Körte",
        "Banán",
        "Szőlő",
        "Narancs"
    ];
}

export function getOrderedList() {
    return [
        "Első elem",
        "Második elem",
        "Harmadik elem",
        "Negyedik elem",
        "Ötödik elem"
    ];
}

let shoppingList = []; 

export function getShoppingList() {
    return shoppingList; 
}

export function addToShoppingList(item) {
    shoppingList.push(item); 
}
