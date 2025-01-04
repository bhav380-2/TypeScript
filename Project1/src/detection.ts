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