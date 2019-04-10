/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. implicit binding - the object standing before the dot is what the keyword will be bound to
* 2. explicit binding - you can force a function call to use of an object with the 'this' binding without using a property function on an object
* 3. new binding - allows you to create a new object referenced by 'this' and returned at the end of the code.
* 4. window/global - binds 'this' to the console
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
var MyObject = function (){
    this.name = 'MyObjectName';
    this.myProperty = 'property';
  };
 
  MyObject.prototype.doStuff = function (action) {
    console.log(this.name + ' is ' + action + '!');
  }
 
  var obj = new MyObject();
 
  obj.doStuff('awesome');
// Principle 3

// code example for New Binding
function Car(make, model) {
    this.make = make;
    this.model = model;
  };
  var myCar = new Car('Ford', 'Escape');
console.log(myCar);
// Principle 4

// code example for Explicit Binding
var runner = { name: 'AJ', myFavoriteActivity: 'drawing' };
MyObject.prototype.doStuff.call(runner, runner.myFavoriteActivity);

