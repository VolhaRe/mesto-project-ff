import {openImage} from './modal'


// @todo: Темплейт карточки

const cardTemplate = document.querySelector("#card-template").content;

// @todo: Функция создания карточки
export function createCard(name, link, deleteCard, openImage, like) {
    const card = cardTemplate.querySelector(".card").cloneNode(true);
    const deleteButton = card.querySelector(".card__delete-button");
    const cardImg = card.querySelector(".card__image"); //область картинки в карточке
    const likeButton = card.querySelector(".card__like-button");
    
    deleteButton.addEventListener("click", deleteCard);
    card.querySelector(".card__title").textContent = name;
    cardImg.src = link;
    cardImg.alt = name;
    cardImg.addEventListener('click', function(){
      openImage(name, link);
    });
    likeButton.addEventListener("click", like);
    return card;
}

// @todo: Функция удаления карточки
export function deleteCard(evt) {
    evt.target.closest(".card").remove();
}

//Функция Лайк
export function like(evt) {
    evt.target.classList.toggle("card__like-button_is-active");
}
