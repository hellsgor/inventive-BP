import '@/assets/scss/index.scss'
import {playButton} from "@/js/play-button.js";
import {initSelectors} from "@/js/selector.js";
import {initPages} from "@/js/pages.js";

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------


  // Modules
  // ---------------------------------
  initPages();
  playButton();
  initSelectors();
});
