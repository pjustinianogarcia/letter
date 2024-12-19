# Letter Ecommerce Website

A simple e-commerce website that allows users to browse products, add them to the cart, and checkout. The website also includes a responsive navigation bar, email functionality, and a cart with discount features.

## Features

- **Responsive Navbar:** The website features a dynamic navigation bar that expands and collapses when clicked, offering a smooth user experience on different screen sizes.
- **Email Functionality:** Users can send emails directly from the website using EmailJS.
- **Cart Management:** Users can add items to the cart, view cart details, and update quantities. The cart is saved in `localStorage` to persist data across page reloads.
- **Discount Coupon:** A coupon code (`DISCOUNT10`) provides a 10% discount when applied.
- **Item Removal:** Users can remove items from their cart and view updated totals.
- **Dynamic Cart Update:** The cart automatically updates with each change in item quantity or removal.

## Technologies Used

- **JavaScript** for core functionality
- **HTML/CSS** for layout and design
- **EmailJS** for email functionality
- **LocalStorage** for persistent cart storage

## Setup Instructions

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/letter-ecommerce-website.git


## How it Works
### Navbar
The navigation bar can be toggled by clicking on the menu icon (bar) or the close icon (close). When clicked, the navbar either appears or disappears based on the event triggered.

### Email Functionality
When users enter their email address and click "Send", an email is sent via EmailJS to the provided email. The email is sent through a service and template specified in the code.

### Cart Functionality
The cart is stored in localStorage, allowing the cart to persist even after the page is reloaded. Products can be added to the cart by clicking on the "Add to Cart" button.

- ** Add to Cart: When an item is added, it is either incremented in quantity if it already exists in the cart or added as a new item.
- ** Update Cart Quantity: Users can change the quantity of an item in the cart, and the cart totals will be recalculated.
- ** Remove Item: Items can be removed from the cart, and the cart is updated accordingly.
###Cart Totals
The cart subtotal, shipping, and total amounts are calculated and displayed dynamically based on the items in the cart.

### Coupon Discount
A coupon code DISCOUNT10 provides a 10% discount. When the user clicks the "Apply Coupon" button, the discount is applied if the code is valid.

### Mobile Responsiveness
The website features a responsive design that adapts to different screen sizes. The navigation bar is optimized for mobile devices and is collapsible for a better user experience.

## How to Contribute
- ** Fork the repository. **
- ** Create a feature branch (git checkout -b feature-name). **
- ** Commit your changes (git commit -am 'Add feature'). **
- ** Push to the branch (git push origin feature-name). **
- ** Create a new Pull Request. **
