var x = 33;
var y = 'Wow';
var z = true;
var a = [3, 56, "Damn"];
console.log('The value of my variable x is: ' + x);
console.log('The value of my variable y is: ' + y);
console.log('The value of my variable z is: ' + z);
console.log('The value of my variable a is: ' + a);
console.log('The type of my variable x is: Number');   
console.log('The type of my variable x is: ' + typeof(x));
console.log('The type of my variable y is: String');
console.log('The type of my variable y is: ' + typeof(y));
console.log('The type of my variable z is: Boolean');
console.log('The type of my variable z is: ' + typeof(z));
console.log('The type of my variable a is: Object');
console.log('The type of my variable a is: ' + typeof(a));
var typeX = typeof(x);
var typeY = typeof(y);
var typeZ = typeof(z);
var typeA = typeof(a);
if ((typeX === typeY) || (typeX === typeZ) || (typeX === typeA)) {
    console.log("Variable x has the same type");
} else if ((typeY === typeZ) || (typeY === typeA)) {
        console.log("Varibale y has the same type");
} else if (typeZ === typeA) {
    console.log("VAriable Z has the same type");
} else {
    console.log("They are not the same type");
}
