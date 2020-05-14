
export class TotalVolume {
    result(data){
        let totalVolumeResult = data.reduce(function(cum, allTotalProductVolume){
            return cum + allTotalProductVolume.totalVolume;
            
        },0);
        return totalVolumeResult;
    }
}