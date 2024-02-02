import '@/assets/scss/index.scss'
import {playButton} from "@/utils/play-button.js";
import {initSelectors} from "@/utils/selector.js";
import {initPages} from "@/utils/pages.js";

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
