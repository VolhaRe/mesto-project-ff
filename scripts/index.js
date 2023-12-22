// @todo: Темплейт карточки

const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');


// @todo: Функция создания карточки
function cardAdd(name, link, deleteCard) {
    const card = cardTemplate.querySelector('.card').cloneNode(true);
    const deleteButton = card.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', deleteCard);
    card.querySelector('.card__title').textContent = name;
    card.querySelector('card__image').src = link;
    card.querySelector('card__image').alt = name;
    return card;
}

// @todo: Функция удаления карточки
function deleteCard(evt) 
    {   const cardItem = evt.target.closest('.places__item');
    cardItem.remove(); 
    }
    


// @todo: Вывести карточки на страницу
  initialCards.forEach(item => 
    placesList.append(cardAdd(item.name, item.link, deleteCard)));
