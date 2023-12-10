//variables statment

let _old = 26;
let _option = 2;
let _number = 12;

//Logic

//First Line:

if(_old < 10){
    console.log('You are Child.');
}

else if(_old > 17){
    console.log('You are a Teenager.');
}

else if(_old < 25){
    console.log('You are an Old Person.');
}

//Second Line:

switch (_option){
     
    case 1 :
        console.log('The action is create.');
    break;

    case 2 :
        console.log('The action is to place.');
    break;

    case 3:
        console.log(`The action is update.`);
    break;
    default:
        console.log('Select a action.');
    break;

}

//Third Line
let result = (_number % 2 === 0) ? 'Es Par' : 'Es Impar';
console.log(result);