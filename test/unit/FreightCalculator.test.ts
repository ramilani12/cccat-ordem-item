import FreightCalculator from "../../src/domain/entities/FreightCalculator";
import Item from "../../src/domain/entities/Item";
import VolumeItem from "../../src/domain/entities/VolumeItem";

test("Deve calcular o frete" , function(){
   const item = new Item(1, "Guitarra", 1000,new VolumeItem(100,30,10,3));
   const freight = FreightCalculator.calculate(item)
   expect(freight).toBe(30)
})


test("Deve calcular o frete com preço minimo - 10" , function(){
    const item = new Item(1, "Guitarra", 1000,new VolumeItem(10,10,10,0.9));
    const freight = FreightCalculator.calculate(item)
    expect(freight).toBe(10)
 })