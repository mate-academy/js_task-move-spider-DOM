'use strict';

const wall = document.querySelector('.wall');
const spider = wall.querySelector('.spider');
const wallStyle = getComputedStyle(wall);
const borderSize = +wallStyle.borderWidth.replace(/[^0-9]/g, '');

const minXcord = spider.offsetWidth / 2;
const maxXcord = wall.offsetWidth - spider.offsetWidth + (borderSize / 2);
const minYcord = spider.offsetHeight / 2;
const maxYcord = wall.offsetHeight - spider.offsetHeight + (borderSize / 2);

spider.setAttribute('style', '');

wall.addEventListener('click', e => {
  const X = coordsCorrector(e.offsetX, minXcord, maxXcord);
  const Y = coordsCorrector(e.offsetY, minYcord, maxYcord);

  spider.style.left = `${X}px`;
  spider.style.top = `${Y}px`;
  spider.style.transform = 'translate(-50%, -50%)';
});

const coordsCorrector = (coord, min, max) => {
  switch (true) {
    case (coord < min):
      return min;
    case (coord > max):
      return max;
    default:
      return coord;
  }
};
