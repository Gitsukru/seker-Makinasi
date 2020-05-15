import {selectedData, currentPackageData} from "../variables";

let packagePriceBox = document.querySelector(".package-price");
let payTotalBox = document.querySelector(".pay-total");
let packageImgBox = document.querySelector(".package-img-box");

const packageTemplate = ` 
<img class="package-img mb-2" src="/img/__PACKAGEIMG__-package.svg">
<small>__PACKAGENAME__</small>`;


export class UpdateAmount {
    total() {
        const productTotalPay = selectedData.reduce((cum, item) => {
            cum += item.totalPrice;
            return cum;
        }, 0);
        packagePriceBox.innerHTML = currentPackageData.price;
        payTotalBox.innerHTML = productTotalPay + currentPackageData.price;
        let packageView = packageTemplate.replace(/__PACKAGEIMG__/, currentPackageData.name)
        .replace(/__PACKAGENAME__/, currentPackageData.name) ;
        packageImgBox.innerHTML = packageView;
    }
}