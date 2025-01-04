const score : Array<number> = []
const names : Array<string> = []


function identityOne(val:boolean | number):boolean|number{
    return val
}

function identityTwo<Type>(val:Type):Type{
    return val;
}

identityTwo(45)

function identity<T>(val:T):T{
    return val;
}

interface Bottle{
    brand:string,
    type:number
}

identity<Bottle>({brand:"new",type:1})

// ______________________________________________________________

function getSearchProducts<T>(products:T[]):T{
    // do some db operations
    const myIndex = 3;
    return products[myIndex]
}


const getSearchProducts2 = <T,>(products:T[]):T=>{
    // do some database operations
    const myIndex = 3
    return products[myIndex]

}

interface Database{
    connection: string,
    username: string,
    password: string
}

// ______________________________________________________________

function anotherFunction<T,U extends Database>(valOne:T,valTwo:U):object{
    return {
        valOne,
        valTwo
    }
}

// anotherFunction(3,{})/
interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject : string,
}

class Sellable<T>{
    public cart : T[] = []
    addToCart(product: T){
        this.cart.push(product)
    }
}