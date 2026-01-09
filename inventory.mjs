/*Implement inventory.mjs, exporting named functions: 
addItem that adds an item by name to the inventory array, 
removeItem that removes an item by name from the inventory array, 
listItems that logs all item names currently in the inventory.*/

const inventory = []; //Array for inventory

export const addInventory = (item) => {
    inventory.push(item)
    console.log(`Inventory Added: ${item}`);
};

export const removeInventory = (item) => {
    let removedItem = false;

    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i] === item) {
            removedItem = true;
            inventory.splice(i, 1);
            i--;
        }
    }
    if (removedItem) {
        console.log(`Inventory Removed: ${item}`);
    }
    else {
        console.log(`${item} does not exisit in inventory.`)
    }
};

export const listInventory = (item) => {
    console.log("Inventory List:");

    for (const item of inventory){
        console.log(`- ${item}`);
    }
};
addInventory("Jersey");
addInventory("Shorts");
removeInventory("Hat");
removeInventory("Jersey");
listInventory();