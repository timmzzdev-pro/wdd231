document.addEventListener("DOMContentLoaded", () => {

```
const timestamp = document.querySelector("#timestamp");

if (timestamp) {
    timestamp.value = new Date().toISOString();
}

const openButtons = document.querySelectorAll(".open-modal");

openButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        event.preventDefault();

        const modalId = button.dataset.modal;
        const modal = document.getElementById(modalId);

        if (modal) {
            modal.showModal();
        }
    });
});

const closeButtons = document.querySelectorAll(".close-modal");

closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        const dialog = button.closest("dialog");

        if (dialog) {
            dialog.close();
        }
    });
});
```

});
