"use strict";
let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
  // TODO: fill the array with 10 candies of various
  // price ranges
];

// Which candies costs less than $4.00?
let inexpensiveProducts = products.filter((product) => product.price <= 4);
console.log("Candies less than $4.00: ", inexpensiveProducts);

// Which candies has "M&M" its name?
let mmProducts = products.filter((product) => product.product.includes("M&M"));
console.log("Candies that have 'M&M in its name: ", mmProducts);

// Do we carry "Swedish Fish"?
let product = products.find((product) => product.product.includes("Swedish Fish"));
console.log(product);
if (product) {
  console.log(`Yes we carry ${product.product}`);
}
