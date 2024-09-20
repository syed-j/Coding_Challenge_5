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
  
//function that accepts an order object and calculates the total price of the order by summing the prices of all ordered items.

function calculateOrderTotal(order) {
    return order.items.reduce((total, item) => {
      const product = inventory.find(p => p.name === item.name);
      return total + product.price * item.quantity;
    }, 0);
  }

  //function that finds the order with the matching customerName 
function completeOrder(customerName) {
    const orderIndex = orders.findIndex(o => o.customerName === customerName);
    if (orderIndex !== -1) {
      orders[orderIndex].status = "Completed";
    } else {
      console.log(`Error: Order for ${customerName} not found`);
    }
  }

// Create checkPendingOrders function
function checkPendingOrders() {
    console.log("Pending Orders:");
    orders.forEach(order => {
      if (order.status === "Pending") {
        console.log(`Customer: ${order.customerName}, Items: ${order.items.map(item => 
            `${item.name} (${item.quantity})`).join(", ")}, Total: $${calculateOrderTotal(order)}`);
      }
    });
  }
