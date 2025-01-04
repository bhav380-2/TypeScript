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

type User = {
    name:string;
    email:string;
    isActive:boolean
}

function createUser(user:User):User{
    return {name:"hi",email:"123.com",isActive:true}
}

createUser({name:"",email:"",isActive:true})

export {}