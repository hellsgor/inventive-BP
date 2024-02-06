import '@/assets/scss/index.scss'
import {playButton} from "@/js/play-button.js";
import {initSelectors} from "@/js/selector.js";
import {initPages} from "@/js/pages.js";
import {initSliders} from "@/js/slider.js";

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------


  // Modules
  // ---------------------------------
  initPages();
  initSliders()
  playButton();
  initSelectors();
});
