//Initialization variables for future uses
   let num1=1;
   let num2=2;

   let text1 = 'text 1';
   let text2 = 'text 2';
   
   const objOne = {Logic: 'AND'};
   const objTwo = {Logic: 'OR'};

//Logic

//First Line:
   let result1 = num1 < num2;
   console.log(`Is number ${num1} better than number ${num2}? ${result1}`);


//Second Line:
   let result2 = num1 > num2;
   console.log(`Is number ${num1} less than number ${num2}? ${result2}`);


//Third Line:
   let result3 = num1 == num2;
   console.log(`Is number ${num1} iquals to number ${num2}? ${result3}`);


//Fourth Line
   let result4 = text1 === text2;
   console.log(`Is ${text1} iquals to ${text2}? ${result4}`);

//Fifth Line:
   let result5 = (objOne.Logic == objTwo.Logic);
   console.log(`Are objects equals? ${result5}`);

   console.log(`AND logico: ${true && false}`);
   
   console.log(`OR logico: ${true || false}`);



//Math Operation

//Variable Statement
let _num1 = 10;
let _num2 =  3;

//Addition
let _result = _num1 + _num2;
console.log(`The plus ${_num1} + ${_num2}: ${_result}`);

//Substraction
let _result1 = _num1 - _num2;
console.log(`The minus ${_num1} - ${_num2}: ${_result1}`);

//Multiplication
let _result3 = _num1 * _num2;
console.log(`The times ${_num1} * ${_num2}: ${_result3}`);

//Divide
let _result4 = _num1 / _num2;
console.log(`The divide ${_num1} / ${_num2}: ${_result4}`);

//Percentage
let _result5 = _num1 % _num2;
console.log(`${_num1} module of ${_num2}: ${_result5}`);
