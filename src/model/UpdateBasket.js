import {
    selectedData
} from "../variables";


export class UpdateBasket {
    update() {
        let totalAmountElement = document.querySelector(".total-amount");
        let shoppingListContainer = document.querySelector(".shopping-list-box");
        const cartTemplate = `<li class="list-item px-1 mb-1 d-flex align-items-center justify-content-between p-3 bg-white rounded shadow-sm">
        <button class="remove-btn" data-name="__item_name__"></button>
        <div class="flex-1">__item_name__</div>
        <div class="d-flex flex-1 justify-content-end align-items-center text-center">
            <span class="mr-3">__item_quantity__</span>
            <span class="col-form-label mr-1">adet</span>
        </div>
        <div class="flex-1 text-right">__item_totalPrice__ TL</div>
        </li>`;

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
    }
}