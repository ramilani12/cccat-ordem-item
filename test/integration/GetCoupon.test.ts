import GetCoupon from "../../src/application/GetCoupon";
import PgPromiseAdapter from "../../src/infra/database/PgPromiseAdapter";
import CouponRepositoryDatabase from "../../src/infra/repository/database/CouponRepositoryDatabase";

test("Deve validar se um cupom existe" , async function(){
    const connection = new PgPromiseAdapter();
    const couponRepository = new CouponRepositoryDatabase(connection)
    const getCoupon = new GetCoupon(couponRepository)
    const couponTest = "VALE20"
    const output = await getCoupon.execute({codeCoupon : couponTest})
    expect(output.coupon).toBe(couponTest);
    await connection.close();
})