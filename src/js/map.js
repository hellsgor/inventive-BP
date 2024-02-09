class Map {
  constructor(selector) {
    this.container = document.querySelector(selector);
    this.strokes = this.container.querySelectorAll('[data-stroke-region]');
    this.regions = this.container.querySelectorAll('[data-region]');
    this.reset = this.container.querySelector('[data-reset]');
    this.links = document.querySelectorAll('[data-menu-link');
    this.init();
  }

  init() {
    this.reset.addEventListener('click', () => {
      this.clearMap();
    });

    this.links.forEach((link) => {
      link.addEventListener('click', () => {
        this.clearMap();
      });
    });

    this.strokes.forEach((stroke) => {
      stroke.addEventListener('click', (e) => {
        this.setRegion(e.target.dataset.strokeRegion, 'stroke');
        e.target.setAttribute('data-clicked', 'true');
      });

      stroke.addEventListener('mouseenter', (e) => {
        this.addHover(e.target.dataset.strokeRegion);
      });

      stroke.addEventListener('mouseleave', (e) => {
        this.removeHover(e.target.dataset.strokeRegion);
      });
    });

    this.regions.forEach((region) => {
      region.addEventListener('click', (e) => {
        this.setRegion(
          e.target.closest('.tmpl-hh-map__map-region').dataset.region,
          'region'
        );
        e.target
          .closest('.tmpl-hh-map__map-region')
          .setAttribute('data-clicked', 'true');
      });

      region.addEventListener('mouseenter', (e) => {
        this.addHover(
          e.target.closest('.tmpl-hh-map__map-region').dataset.region,
          'region'
        );
      });

      region.addEventListener('mouseleave', (e) => {
        this.removeHover(
          e.target.closest('.tmpl-hh-map__map-region').dataset.region,
          'region'
        );
      });
    });
  }

  setRegion(regionName, type) {
    this.clearMap();

    if (type === 'stroke') {
      const currentStroke = this.container.querySelector(
        `[data-stroke-region=${regionName}]`
      );
      currentStroke.classList.add('tmpl-hh-map__region_active');
    }

    if (type === 'region') {
      const currentRegion = this.container.querySelector(
        `[data-region=${regionName}]`
      );
      currentRegion.classList.add('tmpl-hh-map__map-region_active');
    }
  }

  clearMap() {
    this.strokes.forEach((stroke) => {
      stroke.classList.remove('tmpl-hh-map__region_active');
      stroke.removeAttribute('data-clicked');
    });

    this.regions.forEach((region) => {
      region.classList.remove('tmpl-hh-map__map-region_active');
      region.removeAttribute('data-clicked');
    });
  }

  addHover(regionName) {
    this.container
      .querySelector(`[data-region=${regionName}]`)
      .classList.add('tmpl-hh-map__map-region_active');
    this.container
      .querySelector(`[data-stroke-region=${regionName}]`)
      .classList.add('tmpl-hh-map__region_active');
  }

  removeHover(regionName) {
    this.strokes.forEach((stroke) => {
      if (stroke.dataset.clicked === 'true') {
        return;
      }

      if (stroke.dataset.strokeRegion === regionName) {
        stroke.classList.remove('tmpl-hh-map__region_active');
      }
    });

    this.regions.forEach((region) => {
      if (
        region.closest('.tmpl-hh-map__map-region').dataset.clicked === 'true'
      ) {
        return;
      }

      if (region.dataset.region === regionName) {
        region.classList.remove('tmpl-hh-map__map-region_active');
      }
    });
  }
}

const listMaps = [
  '[data-id-page="#main"]',
  '[data-id-page="#start"]',
  '[data-id-page="#retail"]',
];

export const initMaps = () => {
  listMaps.map((i) => {
    new Map(i);
  });
};
