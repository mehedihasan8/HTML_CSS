// mobile nav
const mobileNav = document.querySelector(".mvav");
const closeBtn = document.querySelector(".mnav__close-btn");
const closeBtnIcn = document.querySelector(".mnav__close-btn-icon");

const navOpenClass = "left-0";
const navCloseClass = "-left-96";
const arrowRightClass = "ri-arrow-right-s-line";
const arrowLeftClass = "ri-arrow-left-s-line";

closeBtn.addEventListener("click", () => {
  if (mobileNav.classList.contains(navCloseClass)) {
    mobileNav.classList.remove(navCloseClass);
    mobileNav.classList.add(navOpenClass);
    closeBtnIcn.classList.remove(arrowRightClass);
    closeBtnIcn.classList.add(arrowLeftClass);
  } else {
    mobileNav.classList.remove(navOpenClass);
    mobileNav.classList.add(navCloseClass);
    closeBtnIcn.classList.remove(arrowLeftClass);
    closeBtnIcn.classList.add(arrowRightClass);
  }
});
