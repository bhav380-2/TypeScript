interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string,

    //_____defining methods___________
    // startTrial : ()=>string // way 1
    startTrial(): string // way 2
    getCoupon(couponName:string,value:number):number
}

const hitesh: User = {
    dbId: 22,
    email: "h@h.com",
    userId: 2211,
    startTrial: () => {
        return "trial started"
    },
    getCoupon: (name="defaultCoupon",off:10)=>{
        return 10
    }
}

hitesh.email = "h@hc.com"