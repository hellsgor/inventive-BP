import Swiper, {Autoplay, Pagination} from 'swiper';

class InitSlider {
  classSlider = '';
  settingsSlider = {};
  slider = null;

  constructor(props) {
    this.classSlider = props.classSlider;
    this.settingsSlider = props.settingsSlider;

    this.checkSlider();

    if (this.settingsSlider.destroySize) {
      this.checkResizeSlider();
    }
  }

  checkSlider() {
    if (
      window.matchMedia(this.settingsSlider.destroySize).matches &&
      this.settingsSlider.destroySize
    ) {
      if (this.slider) {
        try {
          this.destroySlider();
        } catch (e) {
          console.log(e);
        }
      }
      return 1;
    } else {
      if (!this.slider) {
        this.initSlider();
      }
    }
  }

  checkResizeSlider() {
    window.addEventListener('resize', () => {
      this.checkSlider();
    });
  }

  initSlider() {
    this.slider = new Swiper(this.classSlider, this.settingsSlider) || null;
  }

  destroySlider() {
    this.slider.destroy();
    this.slider = null;
    document.querySelectorAll(`${this.classSlider}__slider`)?.forEach((i) => {
      i.removeAttribute('style');
    });
    document
      .querySelector(`${this.classSlider}__wrapper`)
      ?.removeAttribute('style');
  }
}

const listSliders = [
  {
    classSlider: '.tmpl-hh-ticker',
    settingsSlider: {
      modules: [Autoplay],
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      loop: true,
      speed: 2000,
      allowTouchMove: false,
      spaceBetween: 51,
      centeredSlides: true,
      slidesPerView: 'auto',
    },
  },
  {
    classSlider: '.tmpl-hh-appreciate__carousel',
    settingsSlider: {
      modules: [Autoplay, Pagination],
      pagination: {
        el: '.tmpl-hh-appreciate__carousel-pagination',
        bulletClass: 'tmpl-hh-appreciate__carousel-bullet',
        bulletActiveClass: 'tmpl-hh-appreciate__carousel-bullet_active',
        clickable: true,
        type: 'bullets',
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      loop: true,
      speed: 300,
      allowTouchMove: false,
      spaceBetween: 32,
      centeredSlides: true,
      slidesPerView: 1,
    },
  },
];

export const initSliders = () => {
  listSliders.map((i) => {
    new InitSlider(i);
  });
};
