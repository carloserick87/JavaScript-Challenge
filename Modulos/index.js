 //Import
 import {emailCheck} from './Reto_7.js';

//Statement of variable
let userEmail = 'prueba@gmail.com';


    if(emailCheck(userEmail)){
        console.log(`${userEmail} is a valid email address.`);
    }
    else{
        console.log(`${userEmail} is not a valid email address.`);
    }
   

