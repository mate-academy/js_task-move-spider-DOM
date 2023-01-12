'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const heightLimit = wall.clientHeight - spider.clientHeight;
  const widthLimit = wall.clientWidth - spider.clientWidth;

  if (e.target.classList.contains('wall')) {
    let currentHeight = e.offsetY - spider.clientHeight / 2;
    let currentWidth = e.offsetX - spider.clientWidth / 2;

    currentHeight = currentHeight <= 0
      ? 0
      : currentHeight;

    currentWidth = currentWidth <= 0
      ? 0
      : currentWidth;

    spider.style.top = currentHeight > heightLimit
      ? heightLimit + 'px'
      : currentHeight + 'px';

    spider.style.left = currentWidth > widthLimit
      ? widthLimit + 'px'
      : currentWidth + 'px';
  }
});
