"use strict";
exports.__esModule = true;
var Car = /** @class */ (function () {
    function Car(labelledObj) {
        this.color = labelledObj.incomingColor;
        this.carType = labelledObj.incomingCarType;
        this.doors = labelledObj.incomingDoors;
        this.mpg = labelledObj.incomingMpg;
    }
    return Car;
}());
exports.Car = Car;
