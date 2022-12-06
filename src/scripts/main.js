'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  if (!e.target.closest('.wall')) {
    return;
  };

  let leftPosition
    = e.clientX - wall.offsetLeft - wall.clientLeft - spider.offsetWidth / 2;

  let topPosition
  = e.clientY - wall.offsetTop - wall.clientTop - spider.offsetHeight / 2;

  const leftMaxPosition = wall.clientWidth - spider.offsetWidth;
  const topMaxPosition = wall.clientHeight - spider.offsetHeight;

  if (leftPosition < 0) {
    leftPosition = 0;
  }

  if (topPosition < 0) {
    topPosition = 0;
  }

  if (leftPosition > leftMaxPosition) {
    leftPosition = leftMaxPosition;
  }

  if (topPosition > topMaxPosition) {
    topPosition = topMaxPosition;
  }

  spider.style.left = leftPosition + 'px';
  spider.style.top = topPosition + 'px';
});
