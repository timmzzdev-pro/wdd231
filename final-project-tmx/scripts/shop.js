import { getProducts } from "./products.js";
import { addToCart } from "./cart.js";

/* NAVIGATION */

const menuBtn =
document.querySelector("#menuBtn");

const navMenu =
document.querySelector("#navMenu");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

navMenu.classList.toggle("open");

});

}

/* ELEMENTS */

const productsContainer =
document.querySelector("#productsContainer");

const searchInput =
document.querySelector("#searchInput");

const categoryFilter =
document.querySelector("#categoryFilter");

const currencySelector =
document.querySelector("#currencySelector");

const modal =
document.querySelector("#productModal");

const modalBody =
document.querySelector("#modalBody");

const closeModal =
document.querySelector("#closeModal");

/* DATA */

let products = [];

/* CURRENCY */

const rates = {

USD:1,
NGN:1600,
GBP:0.79,
EUR:0.92

};

const symbols = {

USD:"$",
NGN:"₦",
GBP:"£",
EUR:"€"

};

/* LOAD SAVED CURRENCY */

const savedCurrency =
localStorage.getItem("currency")
|| "USD";

currencySelector.value =
savedCurrency;

/* INITIALIZE */

async function init(){

products =
await getProducts();

displayProducts(products);

}

init();

/* DISPLAY PRODUCTS */

function displayProducts(items){

const currency =
currencySelector.value;

productsContainer.innerHTML = "";

items.forEach(product=>{

const convertedPrice =
(product.price * rates[currency])
.toFixed(2);

productsContainer.innerHTML += `

<div class="product-card">

<img
src="${product.image}"
alt="${product.name}"
loading="lazy">

<div class="product-info">

<h3>${product.name}</h3>

<p>${product.category}</p>

<p class="price">

${symbols[currency]}
${convertedPrice}

</p>

<button
class="btn details-btn"
data-id="${product.id}">

View Details

</button>

</div>

</div>

`;

});

attachModalEvents();

}

/* SEARCH */

searchInput.addEventListener(
"input",
filterProducts
);

/* FILTER */

categoryFilter.addEventListener(
"change",
filterProducts
);

/* CURRENCY */

currencySelector.addEventListener(
"change",
()=>{

localStorage.setItem(
"currency",
currencySelector.value
);

filterProducts();

}
);

/* FILTER FUNCTION */

function filterProducts(){

const searchTerm =
searchInput.value.toLowerCase();

const category =
categoryFilter.value;

let filtered =
products.filter(product=>{

const matchesSearch =

product.name
.toLowerCase()
.includes(searchTerm);

const matchesCategory =

category === "all" ||

product.category === category;

return matchesSearch
&& matchesCategory;

});

displayProducts(filtered);

}

/* MODAL */

function attachModalEvents(){

const buttons =
document.querySelectorAll(".details-btn");

buttons.forEach(button=>{

button.addEventListener(
"click",
()=>{

const id =
Number(button.dataset.id);

const product =
products.find(
item => item.id === id
);

showModal(product);

});

});

}

function showModal(product){

const currency =
currencySelector.value;

const convertedPrice =
(product.price * rates[currency])
.toFixed(2);

modalBody.innerHTML = `

<img
src="${product.image}"
alt="${product.name}"
loading="lazy">

<h2>${product.name}</h2>

<p>
<strong>Category:</strong>
${product.category}
</p>

<p>
<strong>Description:</strong>
${product.description}
</p>

<p class="price">

${symbols[currency]}
${convertedPrice}

</p>

<button
id="addCartBtn"
class="btn">

Add To Cart

</button>

`;

modal.classList.add("show");

const addCartBtn =
document.querySelector("#addCartBtn");

addCartBtn.addEventListener(
"click",
()=>{

addToCart(product);

alert(
`${product.name}
added to cart.`
);

}
);

}

/* CLOSE MODAL */

closeModal.addEventListener(
"click",
()=>{

modal.classList.remove("show");

}
);

window.addEventListener(
"click",
(event)=>{

if(event.target === modal){

modal.classList.remove("show");

}

}
);