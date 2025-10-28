import { initNavbar } from "../../js/pages/nav.js";
import { initSmoothScroll } from "../../js/global/smoothScroll.js";
import { initConsoleMessage } from "../../js/global/consoleMessage.js";

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initSmoothScroll();
  initConsoleMessage();
});
