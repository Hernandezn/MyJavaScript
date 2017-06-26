/* quick demonstration of basic javascript syntax */


/*
variables
*/
var number = 3.2; // var can be numbers
var text = "Hello, World! " + number; // var strings concatenate simply


/*
function declaration, if-else, println, logical === & !== operators
*/
var prt = function(input){
	if(input===number){
		println("It's number!");
	}
	else{ // when input !== number
		println(input);
	}
}; // function declarations get semicolons just like other vars

prt(number); // calling prt function


/*
object declaration, function-within-object declaration, return value
*/
var obj = { // object is a block with some property as a field
	age: 19, // COMMAS, not semicolons
	eyes: "black",
	likes: ["programming", "being programmed"],
	exists: true,
	birthplace: { // fields can be other objects
		city: "Moutain View",
		state: "California"
	}
};

number = obj.age; // accessing age field
obj.age = 20; // changing age field

obj.prototype.objFun = function(){ // function of an object
	println("This is the objFun function of the obj type being called.");

	return 5; // return value
};

number = obj.objFun(); // calling objFun


/*
Object class
*/
var Example = function(age, x, y){ // capitalized name, constructor args
	this.age = age;
	this.x = x;
	this.y = y;
}
var ex1 = new Example(10, 100, 100);
var ex2 = new Example(11, 150, 100);

/*
inheritance
*/
var SubObj = function(input, x, y){ // an instance of obj
	Example.call(this, input, x, y); // calling obj constructor
};
SubObj.prototype = Object.create(obj.prototype); // setting inheritance


/*
arrays, loops, and shortcut operators
*/
var ar = [1, 2, 3, 4, 5]; // array variable
var i = 0;
while(i<ar.length){
	ar[i].push(ar[i+ar.length-1]+1); // push(value) appends vals to the end
} // while loop iteration equivalent to Java

for(var x = 0; x < ar.length; x++){
	ar[x] -= 1;
} // same for for loops

print(ar); // will print out contents: "0,1,2,3,4,5,6,7,8,9"
