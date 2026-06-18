const CART_KEY = "tmxCart";

export function getCart(){

return JSON.parse(
localStorage.getItem(CART_KEY)
) || [];

}

export function saveCart(cart){

localStorage.setItem(
CART_KEY,
JSON.stringify(cart)
);

updateCartCount();

}

export function addToCart(product){

const cart =
getCart();

cart.push(product);

saveCart(cart);

}

export function updateCartCount(){

const count =
document.querySelector("#cartCount");

if(count){

count.textContent =
getCart().length;

}

}