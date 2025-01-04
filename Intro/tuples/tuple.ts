// const user : (string | number)[] = [1,"hc"]

let tUser : [string,number,boolean]

tUser = ["hc",123,true]

let rgb: [number,number,number] = [255,123,122]

type User = [number,string]
const newUser : User = [112,"ex@google.com"]

newUser[1] = "hc.com"
newUser.push(1)

// console.log(newUser.length,newUser[0],newUser[1],newUser)

export {}