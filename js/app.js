"use strict";
exports.__esModule = true;
var Vehicle = require("./car");
document.getElementById("makeACar").onclick = function () { makeACar(); };
function makeACar() {
    var doors = document.getElementById("doors").value;
    var mpg = document.getElementById("mpg").value;
    var cartype = document.getElementById("cartype").value;
    var color = document.getElementById("color").value;
    var carObject = {
        incomingDoors: doors,
        incomingMpg: mpg,
        incomingCarType: cartype,
        incomingColor: color
    };
    var myCar = new Vehicle.Car(carObject);
    // console.log(this.myCar)
    console.log(myCar);
}
