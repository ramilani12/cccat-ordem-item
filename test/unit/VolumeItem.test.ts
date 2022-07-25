import VolumeItem from "../../src/domain/entities/VolumeItem";

test("Deve Calcular o volume de Item igual a 0" , function () {
    const volumeItem = new VolumeItem(0,0,0,0)
    const totalVolume = volumeItem.getVolume();
    expect(totalVolume).toBe(0);
});

test("Deve Calcular o volume de uma camera" , function () {
    const volumeItem = new VolumeItem(20,15,10,1)
    const totalVolume = volumeItem.getVolume();
    expect(totalVolume).toBe(0.003);
});

test("Deve Calcular um volume de uma Geladeira" , function(){
    const camera = new VolumeItem(200,100,50,40);
    const totalVolume =  camera.getVolume();
    expect(totalVolume).toBe(1);
})

test("Deve calcular a densidade da Camera" , function(){
    const volumeItem = new VolumeItem(20,15,10,1)
    const weight = volumeItem.getDensity()
    expect(weight).toBe(333)
})

test("Deve Calcular a densidade de uma Geladeira" , function(){
    const camera = new VolumeItem(200,100,50,40);
    const density =  camera.getDensity()
    expect(density).toBe(40);
})

test("Não deve ter volume invalido" , function() {
    expect(() => new VolumeItem(-1 , -1 , -1 , -1)).toThrow(new Error("Error volume"))

})

