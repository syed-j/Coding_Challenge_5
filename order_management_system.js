// array named inventory that contains product objects

const inventory = [
    { name: "Laptop", price: 1000, quantity: 10 },
    { name: "Smartphone", price: 500, quantity: 20 },
    { name: "Headphones", price: 100, quantity: 50 },
    { name: "Monitor", price: 300, quantity: 15 }
];

// Create an empty array named orders to store customer orders.
const orders = [];


// Function to place an order
function placeOrder(customerName, orderedItems) {
    let canPlaceOrder = true;
    orderedItems.forEach(item => {
      const product = inventory.find(p => p.name === item.name);
      if (product && product.quantity >= item.quantity) {
        product.quantity -= item.quantity;
      } else {
        canPlaceOrder = false;
        console.log(`Error: Insufficient stock for ${item.name}`);
      }
    });
  
    if (canPlaceOrder) {
      orders.push({
        customerName,
        items: orderedItems,
        status: "Pending"
      });
    }
  }
  