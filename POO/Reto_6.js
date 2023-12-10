
// 1. Create a parent Vehicle class.
class Vehicle{
    constructor(wheels){
        this.wheels = wheels;
    }
    general_details(){
        return `This vehicle has ${this.wheels} wheels`;
    }
};


//2. Create a subclass
class Automovil extends Vehicle{
    constructor(wheels,passengerCapacity){
        super(wheels);
        this.passengerCapacity =passengerCapacity;
    }
    details_custom(){
        return `This vehicle has ${this.wheels} wheels.It Can transport ${this.passengerCapacity} passenger`;
    }
}

//3. Statement of bicycle and car constants

class bicycle extends Vehicle{
    constructor(wheels,type){
        super(wheels);
        this.type = type;
    }
    bicycle_details(){
    return `It is a vehicle has ${this.wheels} wheels. This is a type ${this.type} bike`;
}
};

//4. Statement of constants bicycle and car
const transport = new Automovil(4,5);
const transport_u = new bicycle (2, 'Montaña');


//5. Methods printing area
console.log(transport.details_custom());
console.log(transport_u.bicycle_details());
