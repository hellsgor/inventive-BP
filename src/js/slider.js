import Swiper, { Autoplay, EffectFade, Pagination } from 'swiper';

class InitSlider {
  classSlider = '';
  settingsSlider = {};
  slider = null;
  customPagination = null;

  constructor(props) {
    this.classSlider = props.classSlider;
    this.settingsSlider = props.settingsSlider;
    this.customPagination = props.customPagination;

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

  prepareCustomPagination() {
    if (!this.customPagination) {
      return;
    }

    this.customPagination.items = document
      .getElementById(this.customPagination.containerID)
      .querySelectorAll(`.${this.customPagination.itemsClass}`);

    this.customPagination.items.forEach((item) => {
      const target = item.querySelector('span')
        ? item.querySelector('span')
        : item;

      target.addEventListener(`${this.customPagination.eventName}`, () =>
        this.slider.slideTo(Number(item.getAttribute('data-slide-index')))
      );
    });

    this.slider.on('slideChangeTransitionEnd', () => {
      const activeSlideIndex = Number(
        this.slider.wrapperEl
          .querySelector('.swiper-slide-active')
          .getAttribute('data-swiper-slide-index')
      );

      this.customPagination.items.forEach((item) => {
        const currentCustomItemIndex =
          Number(item.getAttribute('data-slide-index')) - 1;
        if (currentCustomItemIndex === activeSlideIndex) {
          item.classList.add(`${this.customPagination.itemsClass}_active`);
        } else {
          item.classList.remove(`${this.customPagination.itemsClass}_active`);
        }
      });
    });
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
      speed: 5000,
      allowTouchMove: false,
      spaceBetween: 0,
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
        bulletClass: 'tmpl-hh-carousel-bullet',
        bulletActiveClass: 'tmpl-hh-carousel-bullet_active',
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
    customPagination: {
      containerID: 'tmpl-hh-appreciate-items',
      itemsClass: 'tmpl-hh-appreciate__item',
      eventName: 'click',
    },
  },
  {
    classSlider: '.tmpl-hh-social__carousel',
    settingsSlider: {
      modules: [Autoplay, Pagination],
      pagination: {
        el: '.tmpl-hh-social__carousel-pagination',
        bulletClass: 'tmpl-hh-carousel-bullet',
        bulletActiveClass: 'tmpl-hh-carousel-bullet_active',
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
    customPagination: {
      containerID: 'tmpl-hh-social-carousel-custom-pagination',
      itemsClass: 'tmpl-hh-social__carousel-custom-bullet',
      eventName: 'click',
    },
  },
  {
    classSlider: '.tmpl-hh-office-slider',
    settingsSlider: {
      modules: [Autoplay, Pagination, EffectFade],
      pagination: {
        el: '.tmpl-hh-office-slider__pagination',
        bulletClass: 'tmpl-hh-carousel-bullet',
        bulletActiveClass: 'tmpl-hh-carousel-bullet_active',
        clickable: true,
        type: 'bullets',
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      effect: 'fade',
      fadeEffect: { crossFade: true },
      loop: true,
      allowTouchMove: true,
      slidesPerView: 1,
    },
  },
  {
    classSlider: '.tmpl-hh-digital-slider',
    settingsSlider: {
      modules: [Autoplay, Pagination, EffectFade],
      pagination: {
        el: '.tmpl-hh-digital-slider__pagination',
        bulletClass: 'tmpl-hh-carousel-bullet',
        bulletActiveClass: 'tmpl-hh-carousel-bullet_active',
        clickable: true,
        type: 'bullets',
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      effect: 'fade',
      fadeEffect: { crossFade: true },
      loop: true,
      allowTouchMove: true,
      slidesPerView: 1,
    },
  },
];

export const initSliders = () => {
  window.slidersTmpl = listSliders.map((i) => {
    const slider = new InitSlider(i);
    slider.customPagination && slider.prepareCustomPagination();
    return slider;
  });
};
