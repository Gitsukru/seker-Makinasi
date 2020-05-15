import {CurrentDataActivity} from "./CurrentDataActivity";
import {selectedData} from "../variables";

export class ActivityController{
    constructor(name, price, volume, removeName){
        this.name = name;
        this.price = price;
        this.removeName = removeName;
        this.product = new CurrentDataActivity(name, price, volume, removeName);
       
    }
    controller(){
        // remove product
        if (typeof (this.removeName) !== "undefined") {
            this.product.removeItem();
            return;
        }
        // new product
        if (selectedData.filter(item => item.name === this.name).length === 0) {
            this.product.newItem();
            return;
        }
        // update product
        this.product.updateItem();
    }
}