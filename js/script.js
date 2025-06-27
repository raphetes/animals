import NavAnimalsContent from "./modules/animalsContent.js";
import AccordionNav from "./modules/accordionFaq.js";
import SmoothScroll from "./modules/smoothNavScroll.js";
import ScrollAnim from "./modules/scrollAnimation.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import DropdownMenu from "./modules/dropdown-menu.js";
import Date from "./modules/date.js";
import fetchAnimals from "./modules/animals-fetch.js";
import fetchBitcoin from "./modules/bitcoin-fetch.js";
import MenuMobile from "./modules/menu-mobile.js";

const smoothScroll = new SmoothScroll('[data-menu="nav"], a[href^="#"]');
smoothScroll.init();
const accordionNav = new AccordionNav('[data-anime="accordion"] dt');
accordionNav.init();

const tabNavAnimals = new NavAnimalsContent(
  '[data-nav-tab="images"] li',
  '[data-nav-tab="content"] section'
);
tabNavAnimals.init();

const scrollAnim = new ScrollAnim('[data-anime="scroll"]');
scrollAnim.init();

const modal = new Modal(
  '[data-modal="open"]',
  '[data-modal="close"]',
  '[data-modal="container"]'
);
modal.init();

const toolTip = new Tooltip("[data-tooltip]");
toolTip.init();

const dropdownMenu = new DropdownMenu("[data-dropdown]");
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="nav"]');
menuMobile.init();

const date = new Date("[data-week]");
date.init();

fetchAnimals("../../animaisapi.json", ".numeros-grid");
fetchBitcoin("https://blockchain.info/ticker", ".btc-price");
//opa!
