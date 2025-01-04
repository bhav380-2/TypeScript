// enum SeatChoice{
//     AISLE = 10,
//     MIDDLE,
//     WINDOW, // WINDOW= 22,
//     FOURTH
// }


//use const before declaring good practice
const enum SeatChoice{
    AISLE = "aisle",
    MIDDLE = 3,
    WINDOW, // WINDOW= 22,
    FOURTH
}

const hcSeat = SeatChoice.AISLE