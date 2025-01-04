interface User { // in external file
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string,

    //_____defining methods___________
    // startTrial : ()=>string // way 1
    startTrial(): string // way 2
    getCoupon(couponName:string,value:number):number
}


interface User{  // reopening interface :: adding more value
    githubToken : string
}


// Inheritance using interface
interface Admin extends User{
    role : "admin" | "ta" | "learner"

}


const hitesh: Admin = {
    dbId: 22,
    email: "h@h.com",
    role:"admin",
    userId: 2211,
    githubToken: "github",
    startTrial: () => {
        return "trial started"
    },
    getCoupon: (name="defaultCoupon",off=10)=>{
        return 10
    }
}

hitesh.email = "h@hc.com"