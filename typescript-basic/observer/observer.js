// ------------------------------------------------------
var WeatherStation = /** @class */ (function () {
    function WeatherStation() {
        this.observers = [];
    }
    WeatherStation.prototype.registerObserver = function (o) {
        this.observers.push(o);
    };
    WeatherStation.prototype.removeObserver = function (o) {
        var index = this.observers.indexOf(o);
        this.observers.splice(index, 1);
    };
    WeatherStation.prototype.notifyObservers = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this.temperature);
        }
    };
    WeatherStation.prototype.setTemperature = function (temp) {
        console.log('WeatherStation: new temperature measurement: ' + temp);
        this.temperature = temp;
        this.notifyObservers();
    };
    return WeatherStation;
}());
// ------------------------------------------------------
var TemperatureDisplay = /** @class */ (function () {
    function TemperatureDisplay(weatherStation) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }
    TemperatureDisplay.prototype.update = function (temperature) {
        console.log('TemperatureDisplay: I need to update my display');
    };
    return TemperatureDisplay;
}());
var Fan = /** @class */ (function () {
    function Fan(weatherStation) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }
    Fan.prototype.update = function (temperature) {
        if (temperature > 25) {
            console.log('Fan: Its hot here, turning myself on...');
        }
        else {
            console.log('Fan: Its nice and cool, turning myself off...');
        }
    };
    return Fan;
}());
var weatherStation = new WeatherStation();
var tempDisplay = new TemperatureDisplay(weatherStation);
var fan = new Fan(weatherStation);
weatherStation.setTemperature(20);
weatherStation.setTemperature(30);
// interface Subject {
//   registerObserver(o: Observer);
//   removeObserver(o: Observer);
//   notifyObserver();
// }
// interface Observer {
//   update(temperature : number);
// }
// class WeatherStation implements Subject {
//     private temperature : number;
//     private observers: Observer[] = [];
//     setTemprature(temp: number) {
//       console.log('weatherStation: new temprature:' + temp );
//       this.temperature = temp;
//       this.notifyObserver();
//     }
//     registerObserver(o: Observer) {
//       this.observers.push(o);
//     }
//     removeObserver(o: Observer) {
//       let index = this.observers.indexOf(o);
//       this.observers.slice(index, 1);
//     }
//     notifyObserver() {
//       for (let observer of this.observers) {
//       observer.update(this.temperature);
//     }
//   }
// }
// class TemperatureDisplay implements Observer {
//   private subject: Subject;
//   constructor(weatherStation: Subject) {
//       this.subject = weatherStation;
//       weatherStation.registerObserver(this);
//   }
//   update(temperature: number) {
//       console.log('TemperatureDisplay: I need to update my display');
//   }
// }
// class Fan implements Observer {
//   private subject: Subject;
//   constructor(weatherStation: Subject) {
//     this.subject = weatherStation;
//     weatherStation.registerObserver(this);
//   }
//   public update(temperature: number)  {
//     if(temperature >25) {
//       console.log('Fan: it hot here');
//     }else {
//       console.log('nice and cool')
//     }
//   }
// }
// let weatherStation = new WeatherStation();
// let tempDisplay = new temperatureDisplay(weatherStation);
// let fan = new Fan(weatherStation);
// weatherStation.setTemperature(20);
// weatherStation.setTemperature(30);
