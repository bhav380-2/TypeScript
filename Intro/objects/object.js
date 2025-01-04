"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "hitesh",
    email: "hit@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "hi", isPaid: false, email: "hi@.com" };
// createUser({name:"hitesh",isPaid:false, email : "hi@.com"})
createUser(newUser); //no error , weird behaviour
function createCourse() {
    return { name: "Typescript", price: 100 };
}
