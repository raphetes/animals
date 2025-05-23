import NavAnimalsContent from "./modules/animalsContent.js";
import AccordionNav from "./modules/accordionFaq.js";
import SmoothScroll from "./modules/smoothNavScroll.js";
import initScrollAnimation from "./modules/scrollAnimation.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initDate from "./modules/date.js";
import initFetchNumbers from "./modules/animals-fetch.js";
import initBitcoinFetch from "./modules/bitcoin-fetch.js";

const smoothScroll = new SmoothScroll('[data-menu="nav"], a[href^="#"]');
smoothScroll.init();
const accordionNav = new AccordionNav('[data-anime="accordion"] dt');
accordionNav.init();

const tabNavAnimals = new NavAnimalsContent(
  '[data-nav-tab="images"] li',
  '[data-nav-tab="content"] section'
);
tabNavAnimals.init();

initScrollAnimation();
const modal = new Modal(
  '[data-modal="open"]',
  '[data-modal="close"]',
  '[data-modal="container"]'
);
modal.init();

const toolTip = new Tooltip("[data-tooltip]");
toolTip.init();

initDropdownMenu();
initMenuMobile();
initDate();
initFetchNumbers();
initBitcoinFetch();
//opa!
