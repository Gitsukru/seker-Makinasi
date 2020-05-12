import {ProductChangeViewActivity} from "./model/productChangeProductActivity";

export let selectedData = [];
export const changeToCart = function (name, price, removeName) {
    let action = new ProductChangeViewActivity(name, price, removeName);
    action.controller();
    action.totalAmount.totalAmountForProduct();
}