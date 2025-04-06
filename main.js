// NAVBAR
const navbarCenter = document.querySelector('.navbar__center');
const menu = document.querySelector('#hamburger-menu');

menu.onclick = () => {
    navbarCenter.classList.toggle('active');
};

document.addEventListener('click', function(e) {
    if(!menu.contains(e.target) && !navbarCenter.contains(e.target)) {
        navbarCenter.classList.remove('active');
    }
});

// SEARCH FORM
const searchForm = document.querySelector('.search-form');
const searchBtn = document.querySelector('#search-button');

searchBtn.onclick = () => {
    searchForm.classList.toggle('active');
};

document.addEventListener('click', function(e) {
    if(!searchBtn.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
});

// SHOPPING CART
const cartBtn = document.querySelector('#shopping-cart-btn');
const sideBar = document.querySelector('.cart-sidebar');
const closeCart = document.querySelector('#close-cart');

cartBtn.onclick = () => {
    sideBar.classList.toggle('active');
};

closeCart.onclick = () => {
    sideBar.classList.remove('active');
};

document.addEventListener('click', function(e) {
    if(!sideBar.contains(e.target) && !cartBtn.contains(e.target) && !closeCart.contains(e.target)) {
        sideBar.classList.remove('active');
    }
});



// ALPINE.JS
document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items: [
            {id: 1, name: 'Robusta', img: 'coffee1.webp', price: 15000},
            {id: 2, name: 'Espresso', img: 'coffee1.webp', price: 25000},
            {id: 3, name: 'Excelsa', img: 'coffee1.webp', price: 10000},
        ]
    }));

Alpine.store('cart', {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
        const cartItem = this.items.find((item) => item.id === newItem.id);
        
        if (!cartItem) {
            this.items.push({...newItem, quantity: 1, total: newItem.price});
            this.quantity++;
            this.total += newItem.price;
        }else {
            this.items = this.items.map((item) => {

                if(item.id !== newItem.id) {
                    return item;
                }else {
                    item.quantity++;
                    item.total = item.price * item.quantity;
                    this.quantity++;
                    this.total += item.price;
                    return item;
                }
            })
        }
    },
    remove(id) {
        const cartItem = this.items.find((item) => item.id === id);

        if(cartItem.quantity > 1) {
            this.items = this.items.map((item) => {
                if(item.id !== id) {
                    return item;
                }else {
                    item.quantity--;
                    item.total = item.price * item.quantity;
                    this.quantity--;
                    this.total -= item.price;
                    return item;
                }
            })
        }
    },
});

});

// CONVERT TO IDR
const idr = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0,
    }).format(number);
};