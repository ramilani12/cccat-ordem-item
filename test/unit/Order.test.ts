import Coupon from "../../src/domain/entities/Coupon";
import Item from "../../src/domain/entities/Item";
import Order from "../../src/domain/entities/Order";
import VolumeItem from "../../src/domain/entities/VolumeItem";

test("Deve criar um pedido vazio", function () {
	const order = new Order("886.634.854-68");
	const total = order.getTotal();
	expect(total).toBe(0);
});

test("Não deve criar um pedido com CPF inválido", function () {
	expect(() => new Order("111.111.111-11")).toThrow(new Error("Cpf Inválido"));
});

test("Deve criar um pedido com 3 itens", function () {
	const order = new Order("886.634.854-68");
	order.addItem(new Item(1, "Guitarra", 1000), 1);
	order.addItem(new Item(2, "Amplificador", 5000), 1);
	order.addItem(new Item(3, "Cabo", 30), 3);
	const total = order.getTotal();
	expect(total).toBe(6090);
});

test("Deve criar um pedido com 3 itens com cupom de desconto", function () {
	const order = new Order("886.634.854-68");
	order.addItem(new Item(1, "Guitarra", 1000), 1);
	order.addItem(new Item(2, "Amplificador", 5000), 1);
	order.addItem(new Item(3, "Cabo", 30), 3);
	order.addCoupon(new Coupon("VALE20", 20 , new Date()));
	const total = order.getTotal();
	expect(total).toBe(4872);
});


test("Deve criar um pedido com cupom expirado" , function() {
	const order = new Order("886.634.854-68" , new Date("2023-03-01T10:00:00"));
	order.addItem(new Item(1, "Guitarra", 1000), 1);
	order.addItem(new Item(2, "Amplificador", 5000), 1);
	order.addItem(new Item(3, "Cabo", 30), 3);
	order.addCoupon(new Coupon("VALE20", 20 , new Date("2022-05-01T10:00:00")));
	const total = order.getTotal();
	expect(total).toBe(6090);
})

test("Não deve criar pedidos com itens negativos" , function () {
	const order = new Order("886.634.854-68");
	order.addItem(new Item(1, "Guitarra", 1000), -1);
	const isNotValidLength = order.totalItems()
	expect(isNotValidLength).toBe(0);
});

test("Não deve adicionar mesmo item no mesmo pedido" , function(){
	const order = new Order("886.634.854-68");
	order.addItem(new Item(1, "Guitarra", 1000), 1);
	order.addItem(new Item(1, "Guitarra", 1000), 1);
	const totalItems = order.totalItems();
	expect(totalItems).toBe(1)
})

test("Deve criar um pedido com 3 itens e calcular o frete", function () {
	const order = new Order("886.634.854-68");
	order.addItem(new Item(1, "Guitarra", 1000,new VolumeItem(100,30,10,3)),1);
	order.addItem(new Item(2, "Amplificador", 5000 , new VolumeItem(50,50,50,20)), 1);
	order.addItem(new Item(3, "Cabo", 30 , new VolumeItem(10,10,10,1)), 3);
	const total = order.getTotal();
	expect(total).toBe(6350);
});

test("Deve gerar um codigo do pedido", function () {
	const order = new Order("886.634.854-68" , new Date("2022-06-15T10:00:00"));
	order.addItem(new Item(1, "Guitarra", 1000,new VolumeItem(100,30,10,3)),1);
	order.addItem(new Item(2, "Amplificador", 5000 , new VolumeItem(50,50,50,20)), 1);
	order.addItem(new Item(3, "Cabo", 30 , new VolumeItem(10,10,10,1)), 3);
	const idPedido = order.getCodeOrder()
	expect(idPedido).toEqual("202200000001")
});

test("Deve gerar um codigo do pedido final 2", function () {
	const order = new Order("886.634.854-68" , new Date("2022-06-15T10:00:00") , 2);
	order.addItem(new Item(1, "Guitarra", 1000,new VolumeItem(100,30,10,3)),1);
	order.addItem(new Item(2, "Amplificador", 5000 , new VolumeItem(50,50,50,20)), 1);
	order.addItem(new Item(3, "Cabo", 30 , new VolumeItem(10,10,10,1)), 3);
	const idPedido = order.getCodeOrder()
	expect(idPedido).toEqual("202200000002")
});