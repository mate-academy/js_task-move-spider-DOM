'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const heightLimit = wall.clientHeight - spider.clientHeight;
  const widthLimit = wall.clientWidth - spider.clientWidth;

  if (e.target.classList.contains('wall')) {
    const currentHeight = e.offsetY - spider.clientHeight / 2;
    const currentWidth = e.offsetX - spider.clientWidth / 2;

    spider.style.top = currentHeight > heightLimit
      ? heightLimit + 'px'
      : currentHeight <= 0
        ? 0 + 'px'
        : currentHeight + 'px';

    spider.style.left = currentWidth > widthLimit
      ? widthLimit + 'px'
      : currentWidth <= 0
        ? 0 + 'px'
        : currentWidth + 'px';
  }
});
