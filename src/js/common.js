import $ from "jquery";

const ready = () => {
  initHeaderScroll();
  initNavMenu();
  initEvents();
};

document.addEventListener("DOMContentLoaded", ready);

/* FUNCTIONS */

function initHeaderScroll() {
  const header = document.querySelector(".header");
  let prevScrollPos = window.pageYOffset;

  window.onscroll = () => {
    const currentScrollPos = window.pageYOffset;

    (prevScrollPos <= currentScrollPos && currentScrollPos > 50)
      ? header.classList.add("header-hidden") // scrolling down
      : header.classList.remove("header-hidden"); // scrolling up;

    prevScrollPos = currentScrollPos;
  };
}

function initEvents() {
  $(document).on("click", ".js-scroll-top", scrollToTop);
  $(document).on("click", ".js-nav-container", onNavClick);
  $(document).on("click", ".js-next-screen", () => scrollToElement(document.querySelector(".js-nav-container")));
  $(document).on("click", ".js-help-btn", onHelpBtnClick);
  $(document).on("click", ".js-toggle-trigger", toggleItem);
  $(document).on("click", ".js-bank-block-trigger", () => scrollToElement(document.querySelector(".js-bank-block")));
}

function scrollToTop() {
  window.scrollTo({top: 0, behavior: "smooth"});
}

function initNavMenu() {
  const items = document.querySelectorAll(".js-nav-target");
  const navContainer = document.querySelector(".js-nav-container");

  if (!items.length) return;

  let navStr = "";

  [...items].map((item, index) => {
    navStr += navItemMarkup(item.dataset.text, index);
  });

  navContainer.insertAdjacentHTML("afterbegin", navStr);

  function navItemMarkup(text, index) {
    return `<div class="page_nav-item ${index === 0 ? "active" : ""}">
      <div class="page_nav-item_text" data-target-block="${index}">${text}</div>
    </div>`;
  }
}

function onNavClick(ev) {
  const target = ev.target.closest(".page_nav-item_text");

  if (!target) return false;

  const targetInd = target.dataset.targetBlock;
  const targetBlock = [...document.querySelectorAll(".js-target-block")][targetInd];
  targetBlock.scrollIntoView({behavior: "smooth"});
}

function scrollToElement(element) {
  if (!element) return;

  element.scrollIntoView({behavior: "smooth"});
}


function onHelpBtnClick(e) {
  const btn = e.currentTarget;
  const formLink = btn.dataset.link;

  if (!formLink) return false;
  window.open(formLink, "_blank");
}

function toggleItem(e) {
  const btn = e.currentTarget;
  const item = btn.closest(".bank_block-list_item");
  const $text = $(item).find(".js-toggle-target");

  item.classList.toggle("active");
  $text.slideToggle();
}


