import { ChangeToCart } from "./ChangeToCart";

export class CandyMachine{
    constructor(productData){
        this.productData = productData
        this.init();
        this.eventsRun();
    }

    init(){
        const productTemplate = `
        <button type="button" class="fruit-item product-item btn btn-outline-dark d-flex flex-column align-items-center justify-content-between mb-3 col mx-3" 
                data-name="__product_name__"  data-price="__product_price__" data-volume="__product_volume__">
        <div class="d-flex flex-column align-items-center">
                <img class="mr-2" src="__product_icon__" width="100" height="100" alt="Apple"/>
                <span>__product_name__</span>
        </div>
                <strong>__product_price__ TL</strong>
        </button>`;

        let productListContainer = document.querySelector(".product-list-container");
        productListContainer.innerHTML = this.productData.reduce((carry, product) => {
            return carry + productTemplate
            .replace(/__product_name__/g, product.name)
            .replace(/__product_price__/g, product.price)
            .replace(/__product_icon__/g, product.icon)
            .replace(/__product_volume__/g, product.volume)
        }, '');
    }

    eventsRun(){
        let productItem = document.querySelectorAll(".product-item");
        productItem.forEach(function (itemElement) {
            itemElement.addEventListener("click", function () {
                let data = this.dataset;
                let changeCart = new ChangeToCart(data.name, parseFloat(data.price), parseFloat(data.volume));
                changeCart.runner();
            });
        });
        let shoppingListContainerBtn = document.querySelector(".shopping-list-box");
        shoppingListContainerBtn.addEventListener('click', function (event) {
            const targetElement = event.target;
            if (targetElement.classList.contains('remove-btn')) {
                let changeCart = new ChangeToCart('', '', '', targetElement.dataset.name);
                changeCart.runner();
            }
        });
    }
}
