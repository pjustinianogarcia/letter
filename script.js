//navbar
const bar = document.getElementById('bar')
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

// email

function sendMail() {
    let params = {
        to_email: document.getElementById("email").value,
    }
    const serviceID = "service_kr1afjy";
    const templateID = "template_wo8yez9";
    
    emailjs
    .send(serviceID,templateID,params)
    .then((res) => {
            document.getElementById("email").value = "";
            console.log(res);
            alert("your email has been sent");
        })
    .catch((err) => console.log(err)); 
}


//add to cart

// Initialize the cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to update cart in localStorage
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Function to add item to the cart
function addToCart(event) {
    event.preventDefault(); 

    const button = event.target.closest(".add-to-cart");
    if (!button) return;

    const product = {
        id: button.dataset.id,
        name: button.dataset.name,
        price: parseFloat(button.dataset.price),
        quantity: 1
    };

    // Check if the product is already in the cart
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1; 
    } else {
        cart.push(product); 
    }

    saveCart();
    alert(`${product.name} has been added to the cart!`);
}

// Add event listeners to cart icons
document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", addToCart);
});


// cart
1

// Function to calculate and display the cart totals
function displayCartTotals() {
    const cartSubtotalElem = document.getElementById("cart-subtotal");
    const cartTotalElem = document.getElementById("cart-total");

    let subtotal = 0;
    cart.forEach(item => {
        subtotal += item.price * item.quantity;
    });

    const shipping = 1.00; 
    const total = subtotal + shipping;

        cartSubtotalElem.innerText = `$${subtotal.toFixed(2)}`;
        cartTotalElem.innerHTML = `<strong>$${total.toFixed(2)}</strong>`;
}

// Load the cart from localStorage and display totals
function loadCart() {
    cart = JSON.parse(localStorage.getItem("cart")) || [];
    displayCartTotals();
}

document.addEventListener("DOMContentLoaded", loadCart);

function renderCartItems() {
    const cartItemsContainer = document.getElementById("cart-items"); 
    cartItemsContainer.innerHTML = "";

    cart.forEach(item => {
        const itemHTML = `
            <div class="cart-item">
                <p>${item.name} x ${item.quantity}</p>
                <p>$${(item.price * item.quantity).toFixed(2)}</p>
            </div>
        `;
        cartItemsContainer.innerHTML += itemHTML;
    });
}


// Function to display cart items
function displayCartItems() {
    const cartItemsElem = document.getElementById("cart-items");
    cartItemsElem.innerHTML = ""; 

    // Check if the cart has items
    if (cart.length === 0) {
        cartItemsElem.innerHTML = `
            <tr>
                <td colspan="6">Your cart is empty.</td>
            </tr>`;
        return;
    }

    // Loop through cart and create table rows for each item
    cart.forEach((item, index) => {
        const itemSubtotal = (item.price * item.quantity).toFixed(2);
        cartItemsElem.innerHTML += `
            <tr>
                <td>
                    <i class="far fa-times-circle" onclick="removeFromCart(${index})"></i>
                </td>
                <td>
                    <img src="./img/old-letters-27361.png" alt="${item.name}">
                </td>
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td>
                    <input type="number" value="${item.quantity}" min="1" onchange="updateCartQuantity(${index}, this.value)">
                </td>
                <td>$${itemSubtotal}</td>
            </tr>`;
    });
}

// Remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1); 
    localStorage.setItem("cart", JSON.stringify(cart)); 
    displayCartItems(); 
    displayCartTotals(); 
}

// Update item quantity in the cart
function updateCartQuantity(index, newQuantity) {
    if (newQuantity <= 0) return; 
    cart[index].quantity = parseInt(newQuantity); 
    localStorage.setItem("cart", JSON.stringify(cart)); 
    displayCartItems(); 
    displayCartTotals(); 
}

// Call the function on page load
document.addEventListener("DOMContentLoaded", () => {
    displayCartItems(); 
});


document.addEventListener("DOMContentLoaded", () => {
    const couponInput = document.getElementById("coupon-input");
    const applyCouponBtn = document.getElementById("apply-coupon");
    const cartSubtotalElem = document.getElementById("cart-subtotal");
    const cartTotalElem = document.getElementById("cart-total");
    

    let subtotal = 0; 
    const shippingCost = 1.0; 
    let discount = 0; 

    // Function to calculate and display totals
    function calculateTotals() {
        const discountedSubtotal = subtotal - discount;
        const total = discountedSubtotal + shippingCost;

        // Update DOM elements
        cartSubtotalElem.innerText = `$${subtotal.toFixed(2)}`;
        cartTotalElem.innerHTML = `<strong>$${total.toFixed(2)}</strong>`;
    }

    // Apply coupon logic
    applyCouponBtn.addEventListener("click", () => {
        const couponCode = couponInput.value.trim();

        if (couponCode === "DISCOUNT10") {
            discount = subtotal * 0.10; 
            alert("Coupon applied! You saved 10%.");
        } else {
            discount = 0; 
            alert("Invalid coupon code.");
        }

        calculateTotals(); 
    });

    // Load cart and subtotal
    loadCart();
    subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    calculateTotals(); 
});
