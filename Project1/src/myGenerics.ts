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