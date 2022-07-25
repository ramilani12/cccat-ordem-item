import VolumeItem from "./VolumeItem";

export default class Item {

	constructor (readonly idItem: number, readonly description: string, readonly price: number, readonly volumeItem : VolumeItem = new VolumeItem(0,0,0,0)) {
	}

	getVolume(){
        return this.volumeItem.getVolume();
    }

    getDensity(){
        return this.volumeItem.getDensity();
    }
}