class UpdateBasket{
    totalAmountForProduct(){
        const selectedShoppingItems = selectedData.reduce((carry, item) => {
            carry.html += cartTemplate
                .replace(/__item_totalPrice__/g, item.totalPrice)
                .replace(/__item_quantity__/g, item.quantity)
                .replace(/__item_name__/g, item.name);
            carry.totalPrice += item.totalPrice
            return carry;
            
        }, {html: '', totalPrice: 0});

        shoppingListContainer.innerHTML = selectedShoppingItems.html;
        totalAmountElement.innerHTML = selectedShoppingItems.totalPrice;
    }
}