import {ActivityController} from "./model/ActivityController";
import {TotalVolume} from "./model/TotalVolume";
import {UpdateAmount} from "./model/UpdateAmount";
import {PackageCalculator} from "./model/PackageCalculator";
import {UpdateBasket} from "./model/UpdateBasket";

export let shoppingListContainerBtn = document.querySelector(".shopping-list-box");
export let productListContainer = document.querySelector(".product-list-container");
export const productTemplate = `<button type="button" class="fruit-item product-item btn btn-outline-dark d-flex flex-column align-items-center justify-content-between mb-3 col mx-3" 
data-name="__product_name__"  data-price="__product_price__" data-volume="__product_volume__">
        <div class="d-flex flex-column align-items-center">
          <img class="mr-2" src="__product_icon__" width="100" height="100" alt="Apple"/>
          <span>__product_name__</span>
        </div>
        <strong>__product_price__ TL</strong>
    </button>`;


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

    let action = new ActivityController(name, price, pVolume, removeName);
    action.controller();

    let volume = new TotalVolume(selectedData);
    let currentVolume = volume.result();

    let packageCalc = new PackageCalculator();
    currentPackageData = packageCalc.calc(packageData, currentVolume);

    let amount = new UpdateAmount();
    amount.total();

    
    let basket = new UpdateBasket();
    basket.update();
    console.log(currentVolume);
}