import Coupon from "../../../domain/entities/Coupon";
import CouponRepository from "../../../domain/repository/CouponRepositoy";

export default class CouponRepositoryMemory implements CouponRepository{
    
    coupons : Coupon[];

    constructor(){
        this.coupons = [
            new Coupon("VALE20" , 20 , new Date("2022-03-01T10:00:00"))
        ]
    }
    
    async getCoupon(idCoupon: string): Promise<Coupon> {
        const coupon = this.coupons.find(coupon => coupon.code === idCoupon)
        if (!coupon) throw new Error("Coupon not found")
        return coupon
    }

}