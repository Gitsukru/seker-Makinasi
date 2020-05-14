import {ProductChangeViewActivity} from "./model/productChangeProductActivity";
import {TotalVolume} from "./model/total-volume";
export let selectedData = [];
export const changeToCart = function (name, price, pVolume, removeName) {
    let action = new ProductChangeViewActivity(name, price, pVolume, removeName);
    action.controller();
    action.totalAmount.totalAmountForProduct();
    let volume = new TotalVolume();
    let totalVolume = volume.result(selectedData);
    console.log(totalVolume);
    
}
export let currentPackageData = {
    name:"Small",
    price: 0.20
}
