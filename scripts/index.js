const burgerBtn = document.querySelector(".header-phone_burger");
const burgerLine = document.querySelector("#line");
const modal = document.querySelector(".header-phone_modal");
const modalNav = document.querySelector(".header-phone_nav");
const modalLinks = document.querySelectorAll("#header-modal_link");
const basketCounter = document.querySelector(".header-basket_btn");
const addToBasketList = document.querySelectorAll("#addToBasket");

const changeModalView = () => {
  if (burgerBtn.classList.length <= 1) {
    burgerBtn.classList.add("burger-active");
    modal.classList.add("header-phone_modal_active");
    setTimeout(() => {
      modalNav.classList.add("header-phone_nav_active");
    }, 400);
  } else {
    setTimeout(() => {
      burgerBtn.classList.remove("burger-active");
      modal.classList.remove("header-phone_modal_active");
    }, 50);
    modalNav.classList.remove("header-phone_nav_active");
  }
};

const addBasketProduct = (item) => {
  item.getAttribute("data-count");
  item.dataset.count = +item.getAttribute("data-count") + 1;
  console.log("added");
  if (item.getAttribute("data-count")) {
    item.classList.add("header-basket_btn_count");
  } else {
    item.classList.remove("header-basket_btn_count");
  }
};

burgerBtn.addEventListener("click", changeModalView);
modalLinks.forEach((element) => {
  element.addEventListener("click", changeModalView);
});
addToBasketList.forEach((element) => {
  element.addEventListener("click", () => addBasketProduct(basketCounter));
});
