const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

console.log(initialCards);

/* -------------------------------------------------------------------------- */
/*                                  Elements                                  */
/* -------------------------------------------------------------------------- */

// const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const addCardModal = document.querySelector("#add-card-modal");
// const addNewCardButton = document.querySelector(".profile__plus-button");
// const cardCloseButton = document.querySelector("#card-close-button");
// const modalCloseButton = document.querySelector("#modal-close-button");
const profileTitle = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const profileEditForm = profileEditModal.querySelector(".modal__form");
const cardListEl = document.querySelector(".cards__list");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

/* -------------------------------------------------------------------------- */
/*                               Buttons                               */
/* -------------------------------------------------------------------------- */
const profileEditButton = document.querySelector("#profile-edit-button");
const addNewCardButton = document.querySelector(".profile__plus-button");
const cardCloseButton = document.querySelector("#card-close-button");
const profileModalCloseButton = profileEditModal.querySelector(".modal__close");

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */

// function closePopup() {
//   profileEditModal.classList.remove("modal_opened");
// }
function closeModal(modal) {
  modal.classlist.remove("modal_opened");
}

function openModal(modal) {
  modal.classlist.add("modal_opened");
}
// function getCardElement(cardData);

/* -------------------------------------------------------------------------- */
/*                               Event Handlers                               */
/* -------------------------------------------------------------------------- */
function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup();
}

/* -------------------------------------------------------------------------- */
/*                               Event Listners                               */
/* -------------------------------------------------------------------------- */

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;

  profileEditModal.classList.add("modal_opened");
  //   profileEditModal.classList.remove("modal_opened");
});

profileEditButton.addEventListener("click", () => openModal(profileEditModal));

profileModalCloseButton.addEventListener(
  "click",
  () => closeModal(profileEditModal)
  // closePopup();
  // closeModal();
);

profileEditModal.addEventListener("submit", handleProfileEditSubmit);

addNewCardButton.addEventListener("click", () => {
  addCardModal.classList.add("modal_opened");
});

cardCloseButton.addEventListener("click", () => {
  closePopup();
});

initialCards.forEach((cardData) => {
  // clone the template element with all its content and store it in a cardElement variable
  const cardElement = cardTemplate.cloneNode(true);
  // access the card title and image and store them in variables
  const cardImageEL = cardElement.querySelector(".card__image");
  const cardTitleEL = cardElement.querySelector(".card__title");
  // const cardAltEL = cardElement.querySelector(".card__description");
  // set the path to the image to the link field of the object
  cardImageEL.src = cardData.link;
  // set the image alt text to the name field of the object
  cardImageEL.alt = cardData.name;

  // cardAltEL.textcontent = cardData.name;
  // set the card title to the name field of the object, too
  cardTitleEL.textContent = cardData.name;
  // return the ready HTML element with the filled-in data
  // const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
});
