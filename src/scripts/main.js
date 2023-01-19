'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!e.target.closest('.wall')) {
    return;
  };

  let topValue = e.offsetY - spider.height / 2;
  let leftValue = e.offsetX - spider.width / 2;

  const bottomLimit = wall.clientHeight - spider.height;
  const rightLimit = wall.clientWidth - spider.width;

  if (leftValue < 1) {
    leftValue = 0;
  } else if (leftValue > rightLimit) {
    leftValue = rightLimit;
  }

  if (topValue < 1) {
    topValue = 0;
  } else if (topValue > bottomLimit) {
    topValue = bottomLimit;
  }

  spider.style.left = leftValue + 'px';
  spider.style.top = topValue + 'px';
});
