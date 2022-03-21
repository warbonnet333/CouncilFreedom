import $ from "jquery";
import bankDetailTemplate from "../assets/handlebars/ua/bank-item.hbs";
import bankDetailTemplateEn from "../assets/handlebars/en/bank-item.hbs";
import details from "../data/details";

const html = document.querySelector("html");
const lang = html.getAttribute("lang") || "ua";

const ready = () => {
  initBankList();
  initHeaderScroll();
  // initNavMenu();
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

function onNavClick(ev) {
  const target = ev.target.closest(".page_nav-item_text");

  if (!target) return false;

  const targetId = target.dataset.targetBlock;
  const targetBlock = document.getElementById(targetId);
  targetBlock && targetBlock.scrollIntoView({behavior: "smooth"});
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

function initBankList() {
  const bankList = document.querySelector(".js-bank-list");
  const dataType = bankList.dataset.type;
  const markup = details[dataType].map(article =>
    lang === "ua"
      ? bankDetailTemplate(article)
      : bankDetailTemplateEn(article)
  );
  bankList.insertAdjacentHTML("beforeend", markup.join(""));
}


