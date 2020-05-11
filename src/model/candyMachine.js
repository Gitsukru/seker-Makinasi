class CandyMachine{
    constructor(dataObj){
        this.dataObj = dataObj
    }

    init(){
        productLitContainer = document.querySelector(".product-list-container");
        shoppingListContainer = document.querySelector(".shopping-list-box");
        totalAmountElement = document.querySelector(".total-amount");
        productLitContainer.innerHTML = this.dataObj.reduce((carry, product) => {
            return carry + productTemplate
            .replace(/__product_name__/g, product.name)
            .replace(/__product_price__/g, product.price)
            .replace(/__product_icon__/g, product.icon);
        }, '');
    this.eventsRun();
    }

    eventsRun(){
        document.querySelectorAll(".product-item").forEach(function (itemElement) {
            itemElement.addEventListener("click", function () {
                let data = this.dataset;
                changeToCart(data.name, parseFloat(data.price));
            });
        });

        shoppingListContainer.addEventListener('click', function (event) {
            const targetElement = event.target;
            if (targetElement.classList.contains('remove-btn')) {
                changeToCart('', '', targetElement.dataset.name)
            }
        });
    }
}

const changeToCart = function (name, price, removeName) {
    let action = new ProductChangeViewActivity(name, price, removeName);
    action.controller();
    action.totalAmount.totalAmountForProduct();
}

let runMachine = new CandyMachine(dataObj);
runMachine.init();