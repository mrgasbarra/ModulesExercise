/*Implement storeManager.mjs that imports the functions from inventory.mjs to demonstrate adding a few items, 
removing an item, and then listing the remaining items in the inventory.*/

import { addInventory, removeInventory, listInventory } from "./inventory.mjs";

addInventory("Jersey");
addInventory("Hat");
addInventory("Shorts");
addInventory("Beanie");
removeInventory("Hat");
removeInventory("Basketball");
listInventory();