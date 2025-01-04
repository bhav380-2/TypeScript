var score = 33;
score = "55";
score = 1;
var hitesh = { name: "hitesh", id: 334 };
hitesh = { username: "hc", id: 334 };
// function getDbId(id: number | string){
//     console.log(`DB id is : ${id}`)
// }
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
getDbId(3);
getDbId("333");
//______array______________
// either all string or all numbers
var data1 = [1, 2, 3, 4, 5];
// mix of datatypes
var data = [1, 2, 3, "4", true];
// _________use case scenario__________
var seatAllotment;
seatAllotment = "aisle";
// seatAllotment = "crew"
