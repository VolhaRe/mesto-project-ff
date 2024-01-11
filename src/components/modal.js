import {
    nameInput,
    profileTitle,
    jobInput,
    profileDiscription,
} from "../index";

export function openModal(evt) {
    evt.classList.add("popup_is-opened");
    evt.classList.add("popup_is-animated");
    evt.addEventListener("click", closeOverlay);
    document.addEventListener("keydown", closeEscape);
}

export function closeModal(evt) {
    evt.classList.remove("popup_is-opened");
    evt.removeEventListener("click", closeOverlay);
    document.removeEventListener("keydown", closeEscape);
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileDiscription.textContent;
}

export function closeOverlay(evt) {
    if (evt.target.classList.contains("popup_is-opened")) {
        closeModal(evt.target);
    }
}

export function closeEscape(evt) {
    if (evt.key === "Escape") {
        if (document.querySelector(".popup_is-opened")) {
            closeModal(document.querySelector(".popup_is-opened"));
        }
    }
}
