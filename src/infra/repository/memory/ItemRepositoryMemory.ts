import Item from "../../../domain/entities/Item";
import VolumeItem from "../../../domain/entities/VolumeItem";
import ItemRepository from "../../../domain/repository/ItemRepository";

export default class ItemRepositoryMemory implements ItemRepository {
	items: Item[];

	constructor () {
		this.items = [
			new Item(1, "Guitarra", 1000, new VolumeItem(100, 30, 10, 3)),
			new Item(2, "Amplificador", 5000, new VolumeItem(50, 50, 50, 20)),
			new Item(3, "Cabo", 30, new VolumeItem(10, 10, 10, 1))
		];
	}

	async getItem(idItem: number): Promise<Item> {
		const item = this.items.find(item => item.idItem === idItem);
		if (!item) throw new Error("Item not found");
		return item;
	}
}