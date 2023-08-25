
const totalAmountElement = document.getElementById('total-amount');
const resetButton = document.getElementById('reset-button');
const selectedItemsList = document.getElementById('selected-items-list');
const calculate35Button = document.getElementById('calculate-35-button');
const calculate50Button = document.getElementById('calculate-50-button');
const menuItems = document.querySelectorAll('.menu-item');


let totalAmount = 0;
const selectedItems = {};

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        const itemName = item.textContent;
        const price = parseFloat(item.getAttribute('data-price'));

        if (selectedItems[itemName]) {
            selectedItems[itemName].quantity++;
        } else {
            selectedItems[itemName] = { price: price, quantity: 1 };
        }

        totalAmount += price;
        totalAmountElement.textContent = totalAmount.toFixed(2);
        updateSelectedItemsList();
    });
});

resetButton.addEventListener('click', () => {
    menuItems.forEach(item => {
        item.classList.remove('selected');
    });
    totalAmount = 0;
    totalAmountElement.textContent = totalAmount.toFixed(2);
    for (const item in selectedItems) {
        delete selectedItems[item];
    }
    updateSelectedItemsList();
});

function updateSelectedItemsList() {
    selectedItemsList.innerHTML = '';
    for (const item in selectedItems) {
        const listItem = document.createElement('li');
        listItem.textContent = `${selectedItems[item].quantity}x ${item} - $${(selectedItems[item].price * selectedItems[item].quantity).toFixed(2)}`;
        selectedItemsList.appendChild(listItem);
    }
}

calculate35Button.addEventListener('click', () => {
    const thirtyFivePercent = totalAmount * 0.65;
    alert(`35% da soma total é: $${thirtyFivePercent.toFixed(2)}`);
});

calculate50Button.addEventListener('click', () => {
    const fiftyPercent = totalAmount * 0.50;
    alert(`50% da soma total é: $${fiftyPercent.toFixed(2)}`);
});




