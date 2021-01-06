'use strict';

const wall = document.querySelector('.wall');

wall.addEventListener('click', e => {
  const { clientHeight: wallHeight, clientWidth: wallWidth } = wall;

  const spider = document.querySelector('.spider');
  const spiderHeigth = spider.clientHeight;
  const spiderWidth = spider.clientWidth;

  let coordsX = `${e.offsetX - spiderWidth / 2}px`;
  let coordsY = `${e.offsetY - spiderHeigth / 2}px`;

  if (e.offsetY < spiderHeigth / 2) {
    coordsY = 0;
  }

  if (e.offsetY > (wallHeight - spiderHeigth)) {
    coordsY = `${wallHeight - spiderHeigth}px`;
  }

  if (e.offsetX < spiderWidth / 2) {
    coordsX = 0;
  }

  if (e.offsetX > (wallWidth - spiderWidth)) {
    coordsX = `${wallWidth - spiderWidth}px`;
  }

  spider.style.left = coordsX;
  spider.style.top = coordsY;
});
