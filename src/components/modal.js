import {
    nameInput,
    profileTitle,
    jobInput,
    profileDiscription, popupImage, popupCaption, popupTypeImage
} from "../index";

export function openModal(popup) {
    popup.classList.add("popup_is-opened");
    popup.classList.add("popup_is-animated");
    popup.addEventListener("mousedown", closeOverlay);
    document.addEventListener("keydown", closeEscape);
}

export function closeModal(popup) {
    popup.classList.remove("popup_is-opened");
    popup.removeEventListener("mousedown", closeOverlay);
    document.removeEventListener("keydown", closeEscape);
    
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

