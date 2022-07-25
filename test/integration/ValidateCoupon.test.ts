import ValidateCoupon from "../../src/application/ValidateCoupon";
import PgPromiseAdapter from "../../src/infra/database/PgPromiseAdapter";
import CouponRepositoryDatabase from "../../src/infra/repository/database/CouponRepositoryDatabase";

test("Deve validar se um cumpo existe" , async function(){
    const connection = new PgPromiseAdapter();
    const couponRepository = new CouponRepositoryDatabase(connection)
    const validadeCoupon = new ValidateCoupon(couponRepository)
    const couponTest = "VALE20"
    const output = await validadeCoupon.execute({codeCoupon : couponTest})
    expect(output.coupon).toBe(couponTest);
    await connection.close();
})