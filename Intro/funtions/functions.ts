function addTwo(num:number) : number{
    return num + 2;
    // return "hi"
}




function getUpper(val:String){
    return val.toUpperCase();
}

function signUpUser(name:string, email:string, isPaid:boolean){


}

let loginUser = (name:string,email:string,isPaid:boolean = false) => {}



const getHello = (s:string):string =>{
    return ""
}

const heors = ["thor","spiderman","ironman"]
// const heors = [1,2,3]
heors.map((hero):string=>{
    return `hero is ${hero}`
})

getUpper("hi")
addTwo(3)

signUpUser("hi","hitesh@lco.dev",false)
loginUser("hi","hi@gmail.com")



function consoleError(errMsg:string):void{
    console.log(errMsg);
}




//never used when function throws an exception or terminates exceution of the program
function handleError(errMsg:string):never{
    // console.log(errMsg);
    throw new Error(errMsg)
}






























export {}