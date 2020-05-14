import {selectedData, currentPackageData} from "../variables";

let packagePriceBox = document.querySelector(".package-price");
let payTotalBox = document.querySelector(".pay-total");
let packageImgBox = document.querySelector(".package-img-box");
let totalAmountElement = document.querySelector(".total-amount");
let shoppingListContainer = document.querySelector(".shopping-list-box");
const cartTemplate = `<li class="list-item px-1 mb-1 d-flex align-items-center justify-content-between p-3 bg-white rounded shadow-sm">
        <button class="remove-btn" data-name="__item_name__"></button>
        <div class="flex-1">__item_name__</div>
        <div class="d-flex flex-1 align-items-center text-center">
            <span class="mr-3">__item_quantity__</span>
            <span class="col-form-label mr-1">adet</span>
        </div>
        <div class="flex-1 text-right">__item_totalPrice__ TL</div>
    </li>`;


const packageTemplate = ` 
    <img class="package-img mb-2" src="/img/__PACKAGENAME__-package.svg">
    <small>paket</small>`;



export class UpdateBasket {
    totalAmountForProduct() {
        const selectedShoppingItems = selectedData.reduce((carry, item) => {
            carry.html += cartTemplate
                .replace(/__item_totalPrice__/g, item.totalPrice)
                .replace(/__item_quantity__/g, item.quantity)
                .replace(/__item_name__/g, item.name);
            carry.totalPrice += item.totalPrice
            return carry;

        }, {
            html: '',
            totalPrice: 0
        });

        shoppingListContainer.innerHTML = selectedShoppingItems.html;
        totalAmountElement.innerHTML = selectedShoppingItems.totalPrice;
        packagePriceBox.innerHTML = currentPackageData.price;
        payTotalBox.innerHTML = selectedShoppingItems.totalPrice + currentPackageData.price;
        let packageView = packageTemplate.replace(/__PACKAGENAME__/, currentPackageData.name);
        
        packageImgBox.innerHTML = packageView;
    }
}