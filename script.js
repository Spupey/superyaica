const cart = [];

document.querySelectorAll('.btn-buy').forEach(button => {
    button.addEventListener('click', (e) => {
        const eggCard = e.target.closest('.egg-card');
        const eggId = eggCard.dataset.id;
        const eggName = eggCard.querySelector('h3').textContent;
        const eggPrice = eggCard.querySelector('.price').textContent;

        cart.push({ id: eggId, name: eggName, price: eggPrice });
        updateCart();
    });
});

function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    cartCount.textContent = cart.length;
    cartItems.innerHTML = cart.map(item => 
        `<li>${item.name} - ${item.price}</li>`
    ).join('');

    // Подсчёт суммы (упрощённо)
    const total = cart.reduce((sum, item) => sum + parseInt(item.price.replace(/\D/g, '')), 0);
    cartTotal.textContent = `${total.toLocaleString()} ₽`;
}

// Открытие/закрытие корзины
document.getElementById('cart-btn').addEventListener('click', () => {
    document.getElementById('cart-modal').style.display = 'block';
});

document.querySelector('.btn-close').addEventListener('click', () => {
    document.getElementById('cart-modal').style.display = 'none';
});
