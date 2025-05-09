import initNavAnimalsContent from "./modules/animalsContent.js";
import AccordionNav from "./modules/accordionFaq.js";
import SmoothScroll from "./modules/smoothNavScroll.js";
import initScrollAnimation from "./modules/scrollAnimation.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initDate from "./modules/date.js";
import initFetchNumbers from "./modules/animals-fetch.js";
import initBitcoinFetch from "./modules/bitcoin-fetch.js";

const smoothScroll = new SmoothScroll('[data-menu="nav"], a[href^="#"]');
smoothScroll.init();

const accordionNav = new AccordionNav('[data-anime="accordion"] dt');
accordionNav.init();

initNavAnimalsContent();
initScrollAnimation();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initDate();
initFetchNumbers();
initBitcoinFetch();
//opa!
