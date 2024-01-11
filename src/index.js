import "./pages/index.css";
import "./blocks/card/card.css";
import { initialCards } from "./components/cards";
import { openModal, closeModal } from "./components/modal";
import { createCards, deleteCard } from "./components/cards";

// @todo: DOM узлы
const placesList = document.querySelector(".places__list");
const buttonEditProfile = document.querySelector(".profile__edit-button"); //кнопка редактировать профиль
const popupEditProfile = document.querySelector(".popup_type_edit"); // попап редактировать профиль
const popupEditProfileCLose = popupEditProfile.querySelector(".popup__close"); // кнопка закрытия попапа ред.профиль
const popupAddCard = document.querySelector(".popup_type_new-card"); //попап добавить карточку
const buttonAddCard = document.querySelector(".profile__add-button"); //кнопка добавить карточку
const popupAddCardClose = popupAddCard.querySelector(".popup__close"); //кнопка закрытия попапа доб.карточку
const popupTypeImage = document.querySelector(".popup_type_image"); // попап картинка фулскрин
const popupImage = document.querySelector(".popup__image"); //картинка фулскрин
const popupCaption = document.querySelector(".popup__caption"); // название картинки попапа фцлскрин
const popupTypeImageClose = popupTypeImage.querySelector(".popup__close"); // кнопка закрытия модального окна картинка фулскрин

// @todo: Вывести карточки на страницу
initialCards.forEach((item) =>
    placesList.append(createCards(item.name, item.link, deleteCard))
);

//форма ред.профиль
const formEditProfile = document.querySelector(".popup_type_edit");
export const nameInput = document.querySelector(".popup__input_type_name");
export const jobInput = document.querySelector(".popup__input_type_description");
export const profileTitle = document.querySelector(".profile__title");
export const profileDiscription = document.querySelector(".profile__description");
nameInput.value = profileTitle.textContent;
jobInput.value = profileDiscription.textContent;

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileDiscription.textContent = jobInput.value;
    closeModal(popupEditProfile);
}
formEditProfile.addEventListener("submit", handleFormSubmit);

//Форма создания новой карточки
const formNewCard = document.querySelector(".popup_type_new-card"); //форма для доб. новой карточки
const newCardnameInput = formNewCard.querySelector(".popup__input_type_card-name"); // поле названия в форме
const newCardlinkInput = formNewCard.querySelector(".popup__input_type_url"); //поле для ссылки в форме
const formInsidePopupNewCard = formNewCard.querySelector(".popup__form");
function addNewCard(evt) {
    evt.preventDefault();
    const newCard = createCards(
        newCardnameInput.value,
        newCardlinkInput.value,
        deleteCard
    );
    placesList.prepend(newCard);
    closeModal(document.querySelector(".popup_is-opened"));
    formInsidePopupNewCard.reset();
}
formNewCard.addEventListener("submit", addNewCard);

//функция открытия попапа картинки
export function openImage(name, link) {
    popupImage.src = link; //присвоили ссылку на картинку в попап
    popupCaption.textContent = name; // присвоили текст
    openModal(popupTypeImage);
}

// Слушатели на кнопках
//слушатель открытия модального окна ред.проф
buttonEditProfile.addEventListener("click", function () {
    openModal(popupEditProfile);
});

//слушатель закрытия модальногь окна ред.проф
popupEditProfileCLose.addEventListener("click", function () {
    closeModal(popupEditProfile);
});

buttonAddCard.addEventListener("click", function () {
    openModal(popupAddCard);
});

popupAddCardClose.addEventListener("click", function () {
    closeModal(popupAddCard);
});

popupTypeImageClose.addEventListener("click", function () {
    closeModal(popupTypeImage);
});
