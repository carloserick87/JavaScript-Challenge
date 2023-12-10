// Variables statement
const names = 'Carlos';
const emial = 'carlos@gmail.com';
const message = 'Hi!, How are you?';



//Logic
const validateForm = (names,emial,message) => {
   return names && emial && message;
};


function sendForm(Success, Error) {
    if (names && emial && message) {
    Success();
    } else {
    Error();
    }
    }
    
    sendForm(
    () => console.log('Form sent successfully!'),
    () => console.log('Please complete all fields')
    );

//console.log(names,emial,message);