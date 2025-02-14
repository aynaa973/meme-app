let inventory = [
    { name: "Fire Sword", type: "sword", price: 50, quantity: 5, description: "Slashs with fire." },
    { name: "Magic Chain mail", type: "clothes", price: 200, quantity: 2, description: "Protects you." },
    { name: "Chug Splash", type: "potion", price: 20, quantity: 8, description: "Restores Health." },
    { name: "Angel tears", type: "ingredient", price: 100, quantity: 3, description: "magic ingredient." },
];

function listItems() {
    let inventor = document.getElementById("inventory");
    inventor.innerHTML = "<h2>Inventory</h2>";
    inventory.forEach(item => { inventor.innerHTML += `
            <p>${item.name} ${item.type} | $${item.price} | Stock: ${item.quantity} | ${item.description}</p>
        `;
    });
}

function addItem() {
    let name = document.getElementById("itemName").value;
    let type = document.getElementById("itemType").value;
    let price = parseInt(document.getElementById("itemPrice").value);
    let quantity = parseInt(document.getElementById("itemQuantity").value);
    let description = document.getElementById("itemDescription").value;
    let newItem = { name, type, price, quantity, description };
    inventory.push(newItem);
    listItems();
}

function removeItem() {
    let itemName = document.getElementById("rmvitem").value;
    inventory = inventory.filter(item => item.name.toLowerCase() !== itemName.toLowerCase());
    listItems();
}

function searchItems() {
    let query = document.getElementById("searchQuery").value;
    let inventor = document.getElementById("inventory");
    inventor.innerHTML = "<h2>Search Results</h2>" +
        inventory
            .filter(item => item.name.includes(query) || item.type.includes(query))
            .map(item => `<p>${item.name} ${item.type} | $${item.price} | Stock: ${item.quantity} | ${item.description}</p>`)
            .join('');
}


function getItem(itemName) {
    return inventory.find(item => item.name.toLowerCase() === itemName.toLowerCase()) || null;
}

function calculateTotalValue() {
    let total = inventory.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById("totalVal").innerText = `Total Inventory Value: $${total}`;
}
