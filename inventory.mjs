/*Implement inventory.mjs, exporting named functions: 
addItem that adds an item by name to the inventory array, 
removeItem that removes an item by name from the inventory array, 
listItems that logs all item names currently in the inventory.*/

const inventory = []; //Array for inventory

export const addInventory = (item) => { // function to add inventory
    inventory.push(item)  //push item to iventory array
    console.log(`Inventory Added: ${item}`); //display that inventory was successfully added.
};

export const removeInventory = (item) => { //function to remove inventory
    let removedItem = false; //variable to determine if item is removed

    for (let i = 0; i < inventory.length; i++) { //loop through array
        if (inventory[i] === item) { //if item exist in inventory
            removedItem = true; 
            inventory.splice(i, 1); //remove from array
            i--; //remove one from array
        }
    }
    if (removedItem) {
        console.log(`Inventory Removed: ${item}`);
    }
    else {
        console.log(`${item} does not exisit in inventory.`)
    }
};

export const listInventory = (item) => { //function to display listed inventory
    console.log("Inventory List:");

    for (const item of inventory){ //loops through array and display each item in inventory
        console.log(`- ${item}`);
    }
};
addInventory("Jersey");
addInventory("Shorts");
removeInventory("Hat");
removeInventory("Jersey");
listInventory();