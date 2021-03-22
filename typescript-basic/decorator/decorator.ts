abstract class Car {

  public description: string;

  public getDescription(): string {
    return this.description;
  }

  public abstract cost(): number;
}

class ModelTs extends Car {
  
  public description = "Model S";

  public cost(): number { 
    return 73000
  }

}





class ModelIX extends Car {
  public description = "Model X";

  public cost(): number {
    return 770000
  }
}




/*Non-abstract class 'ModelIX' does not implement inherited abstract 
member 'const' from class 'Car'.ts(2515

  if you not add method in the usualclass
  without having method, causing error that non abstruct class.

https://stackoverflow.com/questions/49830175/typescript-abstract-class-without-implementation-without-errors


*/

abstract class CarOptions extends Car {
  decorated: Car;
  public abstract getDescription(): string;
  public abstract cost(): number;

}
class RearFacingSeats extends CarOptions {
  
  decoratedCar: Car;

  constructor(car: Car) {
    super();
    this.decoratedCar = car;
  }


  public getDescription(): string {
    return this.decoratedCar.getDescription() + ', Rear facing seats';
  }

  public cost(): number {
    return this.decoratedCar.cost() + 4000;
  }
}


let myTesla = new ModelIX();

myTesla = new RearFacingSeats(myTesla);

console.log(myTesla.cost());
console.log(myTesla.getDescription());
