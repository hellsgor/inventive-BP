import { initSliders } from '@/js/slider.js';

export class Pages {
  constructor() {
    this.menuLinks = document.querySelectorAll('[data-menu-link]');
    this.pages = document.querySelectorAll('[data-id-page]');
    this.menu = document.querySelector('[data-menu]');
    this.top = document.querySelector('[data-hh-top]');

    this.init();
  }

  init() {
    const lsHref = localStorage.getItem('href');

    if (
      ![...this.menuLinks].some((link) => {
        return link.dataset.menuLink === lsHref;
      })
    ) {
      this.changeHref('#main');
    } else {
      this.changeHref(lsHref);
    }

    if (
      ![...this.menuLinks].some((link) => {
        return window.location.hash === link.dataset.menuLink;
      })
    ) {
      this.changeHref('#main');
    }

    this.menuLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        const target =
          e.target.closest('article') ||
          e.target.closest('.tmpl-hh-back-button');
        const href = target.getAttribute('data-menu-link');

        this.changeHref(href);
      });
    });
  }

  changeHref(href) {
    window.location.hash = href;
    this.pages.forEach((page) => {
      page.style.display = 'none';
    });

    const activePage = document.querySelector(`[data-id-page="${href}"]`);
    activePage.style.display = 'block';
    const activeLink = document.querySelector(`[data-menu-link="${href}"]`);
    activeLink.classList.add('tmpl-hh-header__list-link_active');

    this.top.scrollIntoView({ behavior: 'smooth' });

    localStorage.setItem('href', href);

    setTimeout(() => {
      initSliders();
    }, 100);
  }
}

export function initPages() {
  new Pages();
}
