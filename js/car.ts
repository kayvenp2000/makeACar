export interface newCar{
    incomingCarType: string,
    incomingDoors: any,
    incomingMpg: any,
    incomingColor: string,
}
 
 export class Car {
    color: string;
    carType: string;
    doors: any;
    mpg: any;
 
    constructor(labelledObj: newCar) {
       this.color = labelledObj.incomingColor;
       this.carType = labelledObj.incomingCarType;
       this.doors = labelledObj.incomingDoors;
       this.mpg = labelledObj.incomingMpg
    }
 }
