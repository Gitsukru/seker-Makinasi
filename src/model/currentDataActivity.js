class CurrentDataActivites{
    constructor(name, price, removeName){
        this.name = name;
        this.price = price;
        this.removeName = removeName;
    }
    
    newObj(){
        let newObject = {name:this.name, price:this.price, totalPrice: this.price, quantity: 1};
        return newObject;
    }

    removeItem(){
        selectedData.splice(selectedData.findIndex(v => v.name === this.removeName), 1);
    }

    newItem(){
        selectedData.push(this.newObj());
    }

    updateItem(){
        const foundProduct = selectedData.filter(item => item.name === this.newObj().name)[0];
        foundProduct.quantity += 1;
        foundProduct.totalPrice += this.price;
    }
}
