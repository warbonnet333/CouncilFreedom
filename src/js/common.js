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
  const scrollTopBtn = document.querySelector(".js-scroll-top");
  scrollTopBtn.addEventListener("click", scrollToTop);

  const navTriggers = document.querySelector(".js-nav-container");
  navTriggers.addEventListener("click", onNavClick);
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
    navStr += navItemMarkup(item.innerText, index);
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