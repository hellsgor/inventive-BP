export function setBrand(brandSelector, currentItem) {
  brandSelector.querySelector('.tmpl-hh-selector__button-text').innerText = currentItem.textContent.trim();
}
