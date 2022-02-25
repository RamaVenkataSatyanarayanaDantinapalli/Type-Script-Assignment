var Item = /** @class */ (function () {
    // constructors
    function Item(itemId, itemName, /*address:Address,itemList:Item[],*/ itemCategory, itemCost) {
        this.itemId = itemId;
        this.itemName = itemName;
        //this.address=address;
        //this.itemList=itemList;
        this.itemCategory = itemCategory;
        this.itemCost = itemCost;
    }
    // business methods
    Item.prototype.addItems = function (itemId, itemName, itemCategory, itemCost) {
        // get balance from server using spring rest endpoint
        var a = itemCost <= 50;
        if (a) {
            console.log("------------------------------------------------------");
            console.log("Item Price should be greater than 50/-");
            console.log("------------------------------------------------------");
        }
        else {
            a3 = new Item(itemId, itemName, itemCategory, itemCost);
            a3.showDetails();
        }
    };
    Item.prototype.showDetails = function () {
        console.log("  Item ID :" + this.itemId);
        console.log("  Item Name :" + this.itemName);
        console.log("  Item Category :" + this.itemCategory);
        console.log("  Item Cost :" + this.itemCost);
    };
    return Item;
}()); //end of class
//Object Creation
console.log("Items In Restaurant :");
var a3 = new Item(401, "Pizza", "Non-Veg", 200);
a3.showDetails();
console.log();
a3.addItems(402, "Pizza", "Veg", 200);
console.log();
a3.addItems(403, "Burger", "Non-Veg", 150);
console.log();
a3.addItems(404, "Burger", "Veg", 130);
console.log();
a3.addItems(405, "French Fries", "Veg", 100);
a3.addItems(405, "Fried Rice", "Non-Veg", 40);
