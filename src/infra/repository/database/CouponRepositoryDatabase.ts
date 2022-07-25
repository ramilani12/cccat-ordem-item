import Coupon from "../../../domain/entities/Coupon";
import CouponRepository from "../../../domain/repository/CouponRepositoy";
import Connection from "../../database/Connection";

export default class CouponRepositoryDatabase implements CouponRepository{
    
    // DIP - Dependency Inversion Principle
	constructor (readonly connection: Connection) {
	}
    
    
    async getCoupon(idCoupon: string): Promise<Coupon> {
        const [itemCoupon] = await this.connection.query("select * from ccca.coupon where code  = $1", [idCoupon]);
        const coupon = new Coupon(itemCoupon.code , itemCoupon.percentage , itemCoupon.expire_date);
        return coupon;
    }

}