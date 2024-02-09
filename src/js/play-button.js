export function playButton() {
  document.querySelectorAll('[data-tmpl-hh-video]')
    .forEach((videoBlock) => {
      const cover = videoBlock.querySelector('[data-tmpl-hh-video-cover]');
      const video = videoBlock.querySelector('[data-tmpl-hh-video-video]');
      const playButton = videoBlock.querySelector('[data-tmpl-hh-video-play-button]');

      const showPlayButton = () => {
        playButton.classList.remove('tmpl-hh-video__play-button_hidden');
      }

      const hidePlayButton = () => {
        playButton.classList.add('tmpl-hh-video__play-button_hidden');
      }

      const playVideo = () => {
        cover.classList.add('tmpl-hh-video__cover_hidden');
        video.classList.remove('tmpl-hh-video__video_hidden');
        video.volume = .3;
        video.play();
      }

      video.addEventListener('pause', showPlayButton);
      video.addEventListener('play', hidePlayButton);
      cover.addEventListener('click', playVideo);
      playButton.addEventListener('click', playVideo);
    })
}
