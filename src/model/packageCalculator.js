
export class PackageCalculator {
    calc(packageData, currentVolume){
        for (let i = 0; i < packageData.length; i++) {
            if(currentVolume < packageData[i].volume){
                return {
                    name: packageData[i-1].name,
                    price: packageData[i-1].price,
                }
            }
        }
        return {
            name: packageData[packageData.length -1].name,
            price: packageData[packageData.length -1].price,
        }
    }
}