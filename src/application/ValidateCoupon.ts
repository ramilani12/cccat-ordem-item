import Coupon from "../domain/entities/Coupon";
import CouponRepository from "../domain/repository/CouponRepositoy";

export default class ValidateCoupon {
    constructor(readonly couponRepository : CouponRepository){
    }

    async execute(input : Input){
        const couponDb : Coupon = await this.couponRepository.getCoupon(input.codeCoupon);
        const coupon = couponDb.code;
        return {
            coupon
        };
    }

}

type Input = {
	codeCoupon : string
}

type Output = {
	coupon : string
}