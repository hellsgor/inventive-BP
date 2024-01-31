import '@/assets/scss/index.scss'
import {initSliders} from "@/utils/slider.js";

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------
  const sliders = initSliders();
  const appreciateSlider = sliders.find((item) => item.classSlider === '.tmpl-hh-appreciate__carousel');
  console.log(appreciateSlider)
  appreciateSlider.prepareCustomPagination();


  // Modules
  // ---------------------------------
});
