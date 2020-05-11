class ProductChangeViewActivity{
    constructor(name, price, removeName){
        this.name = name;
        this.price = price;
        this.removeName = removeName;
        this.product = new CurrentDataActivites(name, price, removeName);
        this.totalAmount = new UpdateBasket();
    }
    controller(){
        // remove product
        if (typeof (this.removeName) !== "undefined") {
            this.product.removeItem();
            return;
        }
        // new product
        if (selectedData.filter(item => item.name === this.name).length === 0) {
            this.product.newItem();
            return;
        }
        // update product
        this.product.updateItem();
    }

}