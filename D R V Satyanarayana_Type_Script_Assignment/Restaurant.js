"use strict";
exports.__esModule = true;
var Restaurant = /** @class */ (function () {
    // constructors
    function Restaurant(restaurantId, restaurantName, managerName, contactNumber) {
        this.restaurantId = restaurantId;
        this.restaurantName = restaurantName;
        this.managerName = managerName;
        this.contactNumber = contactNumber;
    }
    // business methods
    /* addPolicy(policyName:string):void
     {
             // get balance from server using spring rest endpoint
          let a : boolean = this.balance<=5000;
          let b : boolean = ((this.balance>5000 && this.balance<10000)&&this.policy.length>=2)?true:false;
             
          if( a || b)
          {
              console.log("Balance should be greater than 10,000 to apply for policy , else contact to customer care 1800-000-1500");
          }
          else
          {
              this.policy.push(policyName);
              console.log("Policy "+policyName+"Added, total policies count is :-  "+this.policy.length);
          }
         
     }*/
    Restaurant.prototype.showDetails = function () {
        console.log("--------------------------------------------------------------------------");
        console.log("Restaurant ID :" + this.restaurantId);
        console.log("Restaurant Name :" + this.restaurantName);
        console.log("Manager Name :" + this.managerName);
        console.log("Contact Number  :" + this.contactNumber);
        /*this.policy.forEach(p=>{
            console.log(p);
        })*/
    };
    return Restaurant;
}()); //end of class
// ----------------------------------------------------------------------
var Address = /** @class */ (function () {
    // constructors
    function Address(buildingName, area, streetNo, city, state, country, pincode) {
        this.buildingName = buildingName;
        this.area = area;
        this.streetNo = streetNo;
        this.city = city;
        this.state = state;
        this.country = country;
        this.pincode = pincode;
    }
    // business methods
    /* addPolicy(policyName:string):void
     {
             // get balance from server using spring rest endpoint
          let a : boolean = this.balance<=5000;
          let b : boolean = ((this.balance>5000 && this.balance<10000)&&this.policy.length>=2)?true:false;
             
          if( a || b)
          {
              console.log("Balance should be greater than 10,000 to apply for policy , else contact to customer care 1800-000-1500");
          }
          else
          {
              this.policy.push(policyName);
              console.log("Policy "+policyName+"Added, total policies count is :-  "+this.policy.length);
          }
         
     }*/
    Address.prototype.showDetails = function () {
        console.log("  Building Name :" + this.buildingName);
        console.log("  Area :" + this.area);
        console.log("  streetNo :" + this.streetNo);
        console.log("  City :" + this.city);
        console.log("  State :" + this.state);
        console.log("  Country :" + this.country);
        console.log("  Pincode :" + this.pincode);
        /*this.policy.forEach(p=>{
            console.log(p);
        })*/
    };
    return Address;
}()); //end of class
// ----------------------------------------------------------------------
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
// object creation
var a1 = new Restaurant(501, "Hotel Elite", "Satya", 9876540321);
a1.showDetails();
var a2 = new Address("Elite", "Ashok Nagar", 15, "Vijayawada", "Andhra Pradesh", "India", 522302);
console.log("Restaurant Address :");
a2.showDetails();
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
