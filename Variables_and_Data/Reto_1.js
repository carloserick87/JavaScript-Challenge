//Variables statements
let user = 'Carlos Erick';
let message = 'Hello World!';
let array = [1,2,3,4,5];
array.push(6);
let text1 = 'La lluvia en Sevilla es una maravilla';

//

console.log(`${message} I am ${user}`);
console.log(`My name is Capitaletter ${user.toUpperCase()}`);
console.log(`My name is Lowercase ${user.toLowerCase()}`);
console.log(`This message ${message} has ${message.length} characters`);
console.log(`The Third number array with the values'1,2,3,4,5' is: ${array[2]}`);
console.log(`The number that follows in order is added to the end of the array and is ${array[5]}`);
let busqueda = text1.match(/\s\w{6}\s/gi);
console.log(`We found pattern \'${busqueda}\' in the text 'La lluvia en Sevilla es una maravilla', so the result is: ${busqueda}`);
