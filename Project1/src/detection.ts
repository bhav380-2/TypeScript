function detectTypes(val: number | string){
    if(typeof val === "string"){  //typeof type gurad
        return val.toLowerCase();
    }
    return val + 3;
}

function provideId(id:string | null){
    if(!id){
        console.log("Please provide ID");
        return;
    }

    id.toLowerCase();
}

// ___________________in________________
interface User{
    name : string,
    email : string
}

interface Admin{
    name:string,
    email:string,
    isAdmin:boolean
}

function isAdminAccount(account:User|Admin){
    if("isAdmin" in account){
        return account.isAdmin
    }
}


// _____________instanceOf_____________________

function logValue(x: Date | string){
    if(x instanceof Date){
        console.log(x.toUTCString());
    }else{
        console.log(x.toUpperCase());
    }
}




















