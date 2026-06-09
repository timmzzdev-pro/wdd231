import { places } from "../data/places.mjs";

const container = document.querySelector("#cards");
const visitMessage = document.querySelector("#visitMessage");

// --------------------
// VISIT MESSAGE
// --------------------
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));

    if (days < 1) {
        visitMessage.textContent = "Back so soon! Awesome!";
    } else if (days === 1) {
        visitMessage.textContent = "You last visited 1 day ago.";
    } else {
        visitMessage.textContent = `You last visited ${days} days ago.`;
    }
}

localStorage.setItem("lastVisit", now);

// --------------------
// BUILD CARDS
// --------------------
places.forEach((place, index) => {

    const card = document.createElement("article");
    card.classList.add("card");

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

    container.appendChild(card);
});