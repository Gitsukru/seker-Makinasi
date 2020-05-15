
export class TotalVolume {
    constructor(selectedData){
        this.data = selectedData;
        this.result();
    }
    result(){
        let totalVolumeResult = this.data.reduce(function(cum, allTotalProductVolume){
            return cum + allTotalProductVolume.totalVolume;
        },0);
        return totalVolumeResult;
    }
}