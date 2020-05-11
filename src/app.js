let productLitContainer = null;
let shoppingListContainer = null;
let totalAmountElement = null;
let selectedData = [];

const productTemplate = `<button type="button" class="fruit-item product-item btn btn-outline-dark d-flex flex-column align-items-center justify-content-between mb-3 col mx-3" data-name="__product_name__"  data-price="__product_price__">
        <div class="d-flex flex-column align-items-center">
          <img class="mr-2" src="__product_icon__" width="100" height="100" alt="Apple"/>
          <span>__product_name__</span>
        </div>
        <strong>__product_price__ TL</strong>
    </button>`;

const cartTemplate = `<li class="list-item px-1 mb-1 d-flex align-items-center justify-content-between p-3 bg-white rounded shadow-sm">
        <button class="remove-btn" data-name="__item_name__"></button>
        <div class="flex-1">__item_name__</div>
        <div class="d-flex flex-1 align-items-center text-center">
            <span class="mr-3">__item_quantity__</span>
            <span class="col-form-label mr-1">Kg</span>
        </div>
        <div class="flex-1 text-right">__item_totalPrice__ TL</div>
    </li>`;

    let dataObj = [
        {
            name: "lokum",
            icon: "./img/lokum.png",
            price: 1.5,
            volume:8
        },
        {
            name: "akide",
            icon: "./img/akide.png",
            price: 5,
            volume: 26
        },
        {
            name: "jelibon",
            icon: "./img/jelibon.png",
            price: 2.75,
            volume: 45
        },
        {
            name: "burgulu lolipop",
            icon: "./img/b-lolipop.svg",
            price: 2.5,
            volume: 20
        },
        {
            name: "yuvarlak lolipop",
            icon: "./img/y-lollipop.png",
            price: 3,
            volume: 50
        }
    ]
    