export function playButton() {
  document.querySelectorAll('[data-tmpl-hh-video]')
    .forEach((videoBlock) => {
      const cover = videoBlock.querySelector('[data-tmpl-hh-video-cover]');
      const frame = videoBlock.querySelector('[data-tmpl-hh-video-frame]');

      cover.addEventListener('click', () => {
        cover.classList.add('tmpl-hh-video__cover_hidden');
        frame.classList.remove('tmpl-hh-video__frame_hidden');
        frame.src += "&autoplay=1";
      })
    })
}
