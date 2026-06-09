import { places } from "../data/places.mjs";

const cardsContainer = document.querySelector("#cards");

// -----------------------------
// VISIT MESSAGE (localStorage)
// -----------------------------
const visitMessage = document.querySelector("#visitMessage");

const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const diffTime = now - Number(lastVisit);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 1) {
        visitMessage.textContent = "Back so soon! Awesome!";
    } else if (diffDays === 1) {
        visitMessage.textContent = "You last visited 1 day ago.";
    } else {
        visitMessage.textContent = `You last visited ${diffDays} days ago.`;
    }
}

localStorage.setItem("lastVisit", now);

// -----------------------------
// BUILD CARDS
// -----------------------------
places.forEach((place, index) => {

    const card = document.createElement("article");
    card.classList.add("card");

    card.style.gridArea = `card${index + 1}`;

    card.innerHTML = `
        <h2>${place.name}</h2>

        <figure>
            <img src="images/place${index + 1}.webp"
                 alt="${place.name}"
                 loading="lazy">
        </figure>

        <address>${place.address}</address>

        <p>${place.description}</p>

        <button>Learn More</button>
    `;

    cardsContainer.appendChild(card);
});