
inherits = function(ctor, superCtor) {
  ctor.super_ = superCtor;
  ctor.prototype = Object.create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
};

var CarBrand =function(name){

	this.name=name;
};

CarBrand.prototype.carName = function(){

	console.log("This car is made by "+this.name);
};

CarBrand.prototype.carValue = function(){

	console.log("This car is made by "+this.name +" and is ver expensive");
};

CarBrand.prototype.carType = function(){

	console.log("This car is made by "+this.name);
};

var jaguar =new CarBrand("jaguar");
jaguar.carName();
jaguar.carValue();

var CarType = function(name, type){
	CarType.super_.call(this,name);
	this.type=type;
};

inherits(CarType,CarBrand);

CarType.prototype.showCarType= function(){

	console.log("This car name is " +this.name +" and brand is " +this.type);
};


CarType.prototype.carValue= function(){

	console.log("This car name is " +this.name +" and brand is " +this.type+"makes it  sup super duper expensive" );
};

var ferrari = new CarType("Ferrari" ,"Sport Car");
ferrari.showCarType();
ferrari.carValue();


