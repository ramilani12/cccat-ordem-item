export default class Coupon {

	constructor (readonly code: string, readonly percentage: number , readonly expireDate : Date = new Date()) {
	}

	getDiscount (total: number) {
		return (total * this.percentage)/100;
	}

	isExpired(date : Date) {
		return date.getTime() > this.expireDate.getTime()
	}
}