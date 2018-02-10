import * as Vehicle from "./car"

(<HTMLInputElement>document.getElementById("makeACar")).onclick = function() {makeACar()};

function makeACar(){
    let doors = (<HTMLInputElement>document.getElementById("doors")).value;
    let mpg = (<HTMLInputElement>document.getElementById("mpg")).value;
    let cartype = (<HTMLInputElement>document.getElementById("cartype")).value;
    let color = (<HTMLInputElement>document.getElementById("color")).value; 

    let carObject = {
        incomingDoors: doors,
        incomingMpg: mpg,
        incomingCarType: cartype,
        incomingColor: color
    }

    let myCar = new Vehicle.Car(carObject)
    // console.log(this.myCar)
    console.log(myCar)
}
