var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.getDescription = function () {
        return this.description;
    };
    return Car;
}());
var ModelTs = /** @class */ (function (_super) {
    __extends(ModelTs, _super);
    function ModelTs() {
        // public const(): number {
        //   throw new Error("Method not implemented.");
        // }
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "Model S";
        return _this;
        // public cost(): number {
        //   throw new Error("Method not implemented.");
        // }  
    }
    ModelTs.prototype.cost = function () {
        return 73000;
    };
    return ModelTs;
}(Car));
var ModelIX = /** @class */ (function (_super) {
    __extends(ModelIX, _super);
    function ModelIX() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "Model X";
        return _this;
        // public const(): number {
        //   throw new Error("Method not implemented.");
        // }
    }
    ModelIX.prototype.cost = function () {
        return 770000;
    };
    return ModelIX;
}(Car));
/*Non-abstract class 'ModelIX' does not implement inherited abstract
member 'const' from class 'Car'.ts(2515

  if you not add method in the usualclass
  without having method, causing error that non abstruct class.

https://stackoverflow.com/questions/49830175/typescript-abstract-class-without-implementation-without-errors



class ModelIX extends Car {
  // public const(): number {
  //   throw new Error("Method not implemented.");
  // }
  public description = "Model X";

  public cost(): number {
    return 770000
  }
}

*/
var CarOptions = /** @class */ (function (_super) {
    __extends(CarOptions, _super);
    function CarOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CarOptions;
}(Car));
var EnhancedAutoPilot = /** @class */ (function (_super) {
    __extends(EnhancedAutoPilot, _super);
    function EnhancedAutoPilot(car) {
        var _this = _super.call(this) || this;
        _this.decoratedCar = car;
        return _this;
    }
    EnhancedAutoPilot.prototype["const"] = function () {
        throw new Error("Method not implemented.");
    };
    EnhancedAutoPilot.prototype.getDescription = function () {
        return this.decoratedCar.getDescription() + ', Enhanced AutoPilot';
    };
    EnhancedAutoPilot.prototype.cost = function () {
        return this.decoratedCar.cost() + 5000;
    };
    return EnhancedAutoPilot;
}(CarOptions));
var RearFacingSeats = /** @class */ (function (_super) {
    __extends(RearFacingSeats, _super);
    function RearFacingSeats(car) {
        var _this = _super.call(this) || this;
        _this.decoratedCar = car;
        return _this;
    }
    RearFacingSeats.prototype.getDescription = function () {
        return this.decoratedCar.getDescription() + ', Rear facing seats';
    };
    RearFacingSeats.prototype.cost = function () {
        return this.decoratedCar.cost() + 4000;
    };
    return RearFacingSeats;
}(CarOptions));
var myTesla = new ModelIX();
myTesla = new RearFacingSeats(myTesla);
console.log(myTesla.cost());
console.log(myTesla.getDescription());
