import '@/assets/scss/index.scss'
import {initSliders} from "@/utils/slider.js";
import {playButton} from "@/utils/play-button.js";
import {initSelectors} from "@/utils/selector.js";

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------
  initSliders();
  playButton()
  initSelectors();


  // Modules
  // ---------------------------------
});
