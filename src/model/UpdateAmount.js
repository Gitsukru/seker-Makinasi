import {selectedData} from "../variables";

let packagePriceBox = document.querySelector(".package-price");
let payTotalBox = document.querySelector(".pay-total");
let packageImgBox = document.querySelector(".package-img-box");

const packageTemplate = ` 
    <div class="d-flex flex-column text-center p-4">
        <img class="package-img mb-2" src="/img/__PACKAGEIMG__-package.svg">
        <small>__PACKAGENAME__</small>
    </div>`;


export class UpdateAmount {
    constructor(currentPackageData){
        this.currentPackageData = currentPackageData;
    }
    total() {
        const productTotalPay = selectedData.reduce((cum, item) => {
            cum += item.totalPrice;
            return cum;
        }, 0);
        packagePriceBox.innerHTML = this.currentPackageData.price;
        payTotalBox.innerHTML = productTotalPay + this.currentPackageData.price;
        let packageView = packageTemplate.replace(/__PACKAGEIMG__/, this.currentPackageData.name)
        .replace(/__PACKAGENAME__/, this.currentPackageData.name) ;
        packageImgBox.innerHTML = packageView;
        if(selectedData.length == 0){
            packagePriceBox.innerHTML = 0; 
            payTotalBox.innerHTML = 0;
            packageImgBox.innerHTML = "";
        }
    }
}