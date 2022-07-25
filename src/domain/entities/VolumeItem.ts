export default class VolumeItem {
    constructor(readonly length : number , readonly width : number , readonly height : number , readonly weight : number){
        if (length < 0 || width < 0 || height < 0 || weight < 0) throw new Error("Error volume")
    }

    getVolume(){
        return (this.length * this.width * this.height) / 1000000;
    }

    getDensity(){
        if (this.getVolume() === 0) return 0;
        return Math.round((this.weight / this.getVolume()));
    }
}