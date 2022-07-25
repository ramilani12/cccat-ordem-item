import GetCoupon from "../../../application/GetCoupon";
import Connection from "../../database/Connection";
import Http from "../../http/Http";
import CouponRepositoryDatabase from "../../repository/database/CouponRepositoryDatabase";

export default class GetCouponController{
    constructor(readonly http : Http , readonly connection : Connection){
        http.on("get" , "/coupon/:codeCoupon" , function(params : any) {
            const couponRepository = new CouponRepositoryDatabase(connection);
            const getCoupon = new GetCoupon(couponRepository);
            const output = getCoupon.execute({codeCoupon : params.codeCoupon });
            return output;
        })
    }
}