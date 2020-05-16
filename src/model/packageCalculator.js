export class PackageCalculator {
    constructor(packageData, currentVolume) {
        this.packageData = packageData;
        this.currentVolume = currentVolume;
    }
    calc() {
        for (let i = 0; i < this.packageData.length; i++) {
            if (this.currentVolume < this.packageData[i].volume) {
                return {
                    name: this.packageData[i - 1].name,
                    price: this.packageData[i - 1].price,
                }
            }
        }
        return {
            name: this.packageData[this.packageData.length - 1].name,
            price: this.packageData[this.packageData.length - 1].price,
        }
    }
}