import '@/assets/scss/index.scss'
import {initSliders} from "@/utils/slider.js";
import {playButton} from "@/utils/play-button.js";
import {initSelectors} from "@/utils/selector.js";
import {Pages} from "@/utils/pages.js";

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------


  // Modules
  // ---------------------------------
  const sliders = initSliders();
  const pages = new Pages(sliders);

  playButton()
  initSelectors();
});
