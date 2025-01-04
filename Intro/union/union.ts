let score:number | string = 33;


score = "55"
score = 1

type User = {
    name : string,
    id : number
}

type Admin = {
    username : string,
    id : number
}

let hitesh : User | Admin = {name : "hitesh",id:334}
hitesh = {username: "hc",id:334}


// function getDbId(id: number | string){
//     console.log(`DB id is : ${id}`)
// }

function getDbId(id: number | string){
    if(typeof id ==="string"){
        id.toLowerCase()
    }
}

getDbId(3)
getDbId("333")



//______array______________
// either all string or all numbers
const data1 : string[] | number[] = [1,2,3,4,5]
// mix of datatypes
const data : (string | number | boolean)[] = [1,2,3,"4",true]


// _________use case scenario__________
let seatAllotment : "aisle" | "middle" | "window"
seatAllotment = "aisle"
// seatAllotment = "crew"