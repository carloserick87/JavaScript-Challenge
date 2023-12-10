// Variables statements
let i = 1;
let color = ['red','green','blue','yellow'];
const persona ={
    name: 'Maria',
    old: 27,
    career:'Diseñadora'};
let n = 1;
let _n = 100;


//Logic
// 1. Print number 1 to 5.
    for(i; i<=5;i++){    
        console.log(i);
    }

console.log("------------------");

// 2. Cycle through a list of colors.
    for(let lista  of color){
        console.log(lista);
    }

console.log("------------------");

// 3. Cycle through the properties of a person object.
    for(let propiedad in persona){
        console.log(propiedad,':',persona[propiedad]);
    }

console.log("------------------");

// 4. Find the number closest to the square of 100.
    while(n * n < _n){
        n++;
    }
    console.log(`The number closest to ${_n} whose square is less then ${_n} is:`,n);

console.log("------------------");

// 5.  Print even numbers up to 10, printing at least one.
for(let d =2; d<=10; d +=2){
    console.log(d);
}