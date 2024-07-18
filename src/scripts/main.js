'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (evt) => {
  if (evt.target !== wall) {
    return;
  }

  const spiderWidth = spider.offsetWidth;
  const spiderHeigth = spider.offsetHeight;
  const wallWidth = wall.clientWidth;
  const wallHeigth = wall.clientHeight;

  const clickX = evt.offsetX;
  const clickY = evt.offsetY;

  const maxX = wallWidth - spiderWidth;
  const maxY = wallHeigth - spiderHeigth;

  spider.style.top =
    Math.max(0, Math.min(clickY - spiderHeigth / 2, maxY)) + 'px';

  spider.style.left =
    Math.max(0, Math.min(clickX - spiderWidth / 2, maxX)) + 'px';
});
