"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
identityTwo(45);
function identity(val) {
    return val;
}
identity({ brand: "new", type: 1 });
// ______________________________________________________________
function getSearchProducts(products) {
    // do some db operations
    const myIndex = 3;
    return products[myIndex];
}
const getSearchProducts2 = (products) => {
    // do some database operations
    const myIndex = 3;
    return products[myIndex];
};
// ______________________________________________________________
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
