let isLoggedIn = true;  // Simulate user login status
let cart = [];

if (isLoggedIn) {
    console.log("Welcome! You can add items to your cart.");
} else {
    console.log("Please log in to add items to your cart.");
}

let products = ["Laptop", "Phone", "Tablet", "Headphones"];
let prices = [1000, 500, 300, 100];

console.log("Available Products:");
for (let i = 0; i < products.length; i++) {
    console.log(`${i + 1}. ${products[i]} - $${prices[i]}`);
}

if (isLoggedIn) {
    let addMore = true;

    while (addMore) {
        let productIndex = parseInt(prompt("Enter the number of the product you want to add to your cart (1-4):")) - 1;

        if (productIndex >= 0 && productIndex < products.length) {
            cart.push({ product: products[productIndex], price: prices[productIndex] });
            console.log(`${products[productIndex]} added to your cart.`);
        } else {
            console.log("Invalid product number.");
        }

        addMore = prompt("Do you want to add more products? (yes/no)") === "yes";
    }
}

let totalCost = 0;

for (let item of cart) {
    totalCost += item.price;
}

console.log(`Total cost of items in your cart: $${totalCost}`);
