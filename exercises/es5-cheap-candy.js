"use strict";
let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    // TODO: fill the array with 10 candies of various
    // price ranges
   ];
   
   // Which candies costs less than $4.00?
   let inexpensiveProducts = products.filter( (product) => product.price <= 4);
   console.log("Candies less than $4.00: ", inexpensiveProducts);



   // Which candies has "M&M" its name?
