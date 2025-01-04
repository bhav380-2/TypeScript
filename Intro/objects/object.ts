// const User = {
//     name : "hitesh",
//     email : "hit@gmail.com",
//     isActive : true
// }

// function createUser({name: string,isPaid:boolean}){

// }

// let newUser = {name:"hi", isPaid:false,email:"hi@.com"};


// // createUser({name:"hitesh",isPaid:false, email : "hi@.com"})
// createUser(newUser) //no error , weird behaviour

// function createCourse():{name:string,price:number}{
//     return {name:"Typescript",price:100}
// }



//type alias

// type User = {
//     name:string;
//     email:string;
//     isActive:boolean
// }

// function createUser(user:User):User{
//     return {name:"hi",email:"123.com",isActive:true}
// }

// createUser({name:"",email:"",isActive:true})

type User = {
    readonly _id:string
    name : string,
    email : string,
    isActive : boolean,
    credcardDetails?: number
}

// function createUser(u:User){

// }

type cardNumber = {
    cardnumber : string
}

type cardDate = {
    cardDate : string

}

type  cardDetails = cardNumber & cardDate & {
    cvv : number
}

let myUser : User = {
    _id : "1245",
    name: "H",
    email : "h@h.com",
    isActive : false
}
myUser.email = "hnew@gmail.com"
// myUser._id = "HI"

export {}