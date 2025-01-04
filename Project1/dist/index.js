"use strict";
// console.log("Hello typescript is here")
// console.log("Typescript is amazing")
// class User{
//     public email : string
//     private name: string
//     // #name : string // this is also private -> js syntax
//     readonly city : string = "Jaipur"
//     constructor(email:string,name:string){
//         this.email = email;
//         this.name = name;
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Jaipur";
    }
    deleteToken() {
        console.log("deleted token");
    }
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const hitesh = new User("h@h.com", "hitesh");
// hitesh.deleteToken()
console.log(hitesh.city);
// hitesh.city = 2
// hitesh.city = "ntl"
