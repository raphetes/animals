import initNavAnimalsContent from "./modules/animalsContent.js";
import initAccordionNav from "./modules/accordionFaq.js";
import initSmoothNavScroll from "./modules/smoothNavScroll.js";
import initScrollAnimation from "./modules/scrollAnimation.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initDate from "./modules/date.js";
import initFetchNumbers from "./modules/animals-fetch.js";
import initBitcoinFetch from "./modules/bitcoin-fetch.js";
import slideNav from "./modules/slide.js";

initNavAnimalsContent();
initAccordionNav();
initSmoothNavScroll();
initScrollAnimation();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initDate();
initFetchNumbers();
initBitcoinFetch();

const slide = new slideNav(".wrapper", ".slide");
slide.init();
slide.addControl(".custom-control");
