// console.log("Hello typescript is here")
// console.log("Typescript is amazing")


class User{

    email : string
    name: string
    readonly city : string = "Jaipur"
    constructor(email:string,name:string){
        this.email = email;
        this.name = name
    }
}


const hitesh = new User("h@h.com","hitesh")

console.log(hitesh.city)
// hitesh.city = 2
// hitesh.city = "ntl"