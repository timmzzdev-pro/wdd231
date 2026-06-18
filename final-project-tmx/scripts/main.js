import { getProducts }
from "./products.js";

import { updateCartCount }
from "./cart.js";

const menuBtn =
document.querySelector("#menuBtn");

const navMenu =
document.querySelector("#navMenu");

menuBtn.addEventListener(
"click",
()=>{

navMenu.classList.toggle("open");

}
);

updateCartCount();

const featuredContainer =
document.querySelector(
"#featuredContainer"
);

async function loadFeatured(){

const products =
await getProducts();

const featured =
products.slice(0,4);

featured.forEach(product=>{

featuredContainer.innerHTML += `

<div class="product-card">

<img
src="${product.image}"
alt="${product.name}"
loading="lazy">

<div class="product-info">

<h3>${product.name}</h3>

<p>${product.category}</p>

<p class="price">

$${product.price}

</p>

</div>

</div>

`;

});

}

loadFeatured();