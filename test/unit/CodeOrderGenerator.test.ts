import CodeOrderGenerator from "../../src/domain/entities/CodeOrderGenerator"

test("Deve retornar um codigo do Pedido", function (){
    const code = CodeOrderGenerator.generate(new Date("2022-06-17T10:00:00") , 1)
    expect(code).toBe("202200000001")
})