import { setBrand } from '@/js/set-brand.js';

class Selector {
  button = undefined;
  arrow = undefined;
  list = undefined;
  listItems = undefined;
  selector = undefined;
  callback = null;
  line = null;

  constructor(props) {
    this.selector = props.selector;
    this.callback = props.callback ?? null;
    this.button = this.selector.querySelector('.tmpl-hh-selector__button');
    this.arrow = this.selector.querySelector('.tmpl-hh-selector__arrow');
    this.list = this.selector.querySelector('.tmpl-hh-selector__list');
    this.listItems = this.list.querySelectorAll('.tmpl-hh-selector__option');
    this.line = this.selector.querySelector('.tmpl-hh-selector__line');
    this.reset = document.querySelector(`[data-reset="${props.reset}"]`);

    this.prepareSelector();
  }

  prepareSelector() {
    this.reset.addEventListener('click', () => {
      this.selector.querySelector('.tmpl-hh-selector__button-text').innerText =
        'Выбрать бренд';
    });

    this.button.addEventListener('click', (event) => {
      this.toggleList();
    });

    document.addEventListener('click', (e) => {
      if (!this.list.contains(e.target) && !this.selector.contains(e.target)) {
        this.hideList();
      }
    });

    this.listItems.forEach((item) => {
      item.addEventListener('click', () => {
        this.hideList();

        if (this.callback) {
          this.callback(this.selector, item);
        }
      });
    });
  }

  toggleList() {
    this.list.classList.toggle('tmpl-hh-selector__list_hidden');
    this.arrow.classList.toggle('tmpl-hh-selector__arrow_rotate');
    this.line.classList.toggle('tmpl-hh-selector__line_hidden');
  }

  hideList() {
    this.list.classList.add('tmpl-hh-selector__list_hidden');
    this.arrow.classList.remove('tmpl-hh-selector__arrow_rotate');
    this.line.classList.add('tmpl-hh-selector__line_hidden');
  }
}

export function initSelectors() {
  document.querySelectorAll('.tmpl-hh-selector').forEach((selector, i) => {
    const props = {
      selector: selector,
      reset: `${i}`,
    };

    if (selector.classList.contains('tmpl-hh-map__brand')) {
      props.callback = setBrand;
    }

    new Selector(props);
  });
}
