import {ProductChangeViewActivity} from "./model/productChangeProductActivity";
import {TotalVolume} from "./model/total-volume";
import {UpdateAmount} from "./model/UpdateAmount";
import {PackageCalculator} from "./model/packageCalculator";
import {UpdateBasket} from "./model/UpdateBasket";
export let selectedData = [];
export let currentPackageData = null;

let packageData = [{
    name: "Small",
    price: 0.20,
    volume: 0
},
{
    name: "Medium",
    price: 0.35,
    volume: 400
},
{
    name: "Large",
    price: 0.70,
    volume: 750
}
]


export const changeToCart = function (name, price, pVolume, removeName) {

    let action = new ProductChangeViewActivity(name, price, pVolume, removeName);
    action.controller();

    let volume = new TotalVolume(selectedData);
    let currentVolume = volume.result();

    let packageCalc = new PackageCalculator();
    currentPackageData = packageCalc.calc(packageData, currentVolume);

    let amount = new UpdateAmount();
    amount.total();

    
    let basket = new UpdateBasket();
    basket.update();
    console.log(packageCalc.calc(packageData, currentVolume));
    
}