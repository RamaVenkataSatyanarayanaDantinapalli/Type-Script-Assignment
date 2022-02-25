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
var a2 = new Address("Elite", "Ashok Nagar", 15, "Vijayawada", "Andhra Pradesh", "India", 522302);
a2.showDetails();
