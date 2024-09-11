'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallInform = wall.getBoundingClientRect();

  const spiderCoords = {
    left:
      e.clientX - wallInform.left - spider.clientWidth / 2 - wall.clientLeft,
    top: e.clientY - wallInform.top - spider.clientHeight / 2 - wall.clientTop,
  };

  if (spiderCoords.top < 0) {
    spiderCoords.top = 0;
  }

  if (spiderCoords.left < 0) {
    spiderCoords.left = 0;
  }

  if (
    spiderCoords.left >
    wallInform.width - spider.clientWidth - wall.clientLeft * 2
  ) {
    spiderCoords.left =
      wallInform.width - spider.clientWidth - wall.clientLeft * 2;
  }

  if (
    spiderCoords.top >
    wallInform.height - spider.clientHeight - wall.clientTop * 2
  ) {
    spiderCoords.top =
      wallInform.height - spider.clientHeight - wall.clientTop * 2;
  }
  spider.style.left = `${spiderCoords.left}px`;
  spider.style.top = `${spiderCoords.top}px`;
});
