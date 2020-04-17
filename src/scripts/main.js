'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallPosition = wall.getBoundingClientRect();
  const spyderPosition = {
    top: e.clientY - wallPosition.top
      - wall.clientTop - spider.clientHeight / 2,
    left: e.clientX
      - wallPosition.left - wall.clientLeft - spider.clientWidth / 2,
  };

  if (spyderPosition.top < 0) {
    spyderPosition.top = 0;
  }

  if (spyderPosition.left < 0) {
    spyderPosition.left = 0;
  }

  if (spyderPosition.left + spider.clientWidth > wall.clientWidth) {
    spyderPosition.left = wall.clientWidth - spider.clientWidth;
  }

  if (spyderPosition.top + spider.clientHeight > wall.clientHeight) {
    spyderPosition.top = wall.clientHeight - spider.clientHeight;
  }

  spider.style.left = spyderPosition.left + 'px';
  spider.style.top = spyderPosition.top + 'px';
});
