import Item from "../../../domain/entities/Item";
import ItemRepository from "../../../domain/repository/ItemRepository";
import Connection from "../../database/Connection";
import VolumeItem from "../../../domain/entities/VolumeItem";
// Interface Adapter
export default class ItemRepositoryDatabase implements ItemRepository {
	// DIP - Dependency Inversion Principle
	constructor (readonly connection: Connection) {
	}

	async getItem(idItem: number): Promise<Item> {
		const [itemData] = await this.connection.query("select * from ccca.item where id_item = $1", [idItem]);
		const item = new Item(itemData.id_item, itemData.description, parseFloat(itemData.price), new VolumeItem(itemData.length, itemData.width, itemData.height, itemData.weight));
		return item;
	}
}