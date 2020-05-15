import {changeToCart, shoppingListContainerBtn, productListContainer, productTemplate} from "../variables";

export class CandyMachine{
    constructor(dataObj){
        this.dataObj = dataObj
        this.init();
        this.eventsRun();
    }

    init(){
        productListContainer.innerHTML = this.dataObj.reduce((carry, product) => {
            return carry + productTemplate
            .replace(/__product_name__/g, product.name)
            .replace(/__product_price__/g, product.price)
            .replace(/__product_icon__/g, product.icon)
            .replace(/__product_volume__/g, product.volume)
        }, '');
    }

    eventsRun(){
        document.querySelectorAll(".product-item").forEach(function (itemElement) {
            itemElement.addEventListener("click", function () {
                let data = this.dataset;
                changeToCart(data.name, parseFloat(data.price), parseFloat(data.volume));
            });
        });

        shoppingListContainerBtn.addEventListener('click', function (event) {
            const targetElement = event.target;
            if (targetElement.classList.contains('remove-btn')) {
                changeToCart('', '', '', targetElement.dataset.name)
            }
        });
    }
}
