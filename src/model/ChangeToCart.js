import {ActivityController} from "./ActivityController";
import {TotalVolume} from "./TotalVolume";
import {UpdateAmount} from "./UpdateAmount";
import {PackageCalculator} from "./PackageCalculator";
import {UpdateBasket} from "./UpdateBasket";
import {selectedData, packageData} from "../variables";

export class ChangeToCart{
    constructor(name, price, pVolume, removeName){
        this.name = name;
        this.price = price;
        this.pVolume = pVolume;
        this.removeName = removeName;
    }
    runner(){

    let action = new ActivityController(this.name, this.price, this.pVolume, this.removeName);
    action.controller();

    let basket = new UpdateBasket();
    basket.update();

    let volume = new TotalVolume(selectedData);
    let currentVolume = volume.result();

    let packageCalc = new PackageCalculator(packageData, currentVolume);

    let amount = new UpdateAmount(packageCalc.calc());
    amount.total();

    
   
    console.log(currentVolume);
    }
}