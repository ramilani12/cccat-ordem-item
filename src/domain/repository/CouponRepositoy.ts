import Coupon from "../entities/Coupon";

export default interface CouponRepository{
    getCoupon(idCoupon : string) : Promise<Coupon>
}