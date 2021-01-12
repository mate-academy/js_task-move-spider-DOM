'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', e => {
  const rectangle = e.target.getBoundingClientRect();
  const x = e.clientX - rectangle.left
    - parseInt(getComputedStyle(wall).borderLeftWidth);
  const y = e.clientY - rectangle.top
    - parseInt(getComputedStyle(wall).borderTopWidth);

  moveSpider(x, y);
});

/**
 * Moves the spider to the specified coordinates.
 * @param {number} x x coordinate.
 * @param {number} y y coordinate.
 */
function moveSpider(x, y) {
  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;
  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;

  let leftOffset = x - spiderWidth / 2;
  let topOffset = y - spiderHeight / 2;

  if (x < spiderWidth / 2) {
    leftOffset = 0;
  }

  if (x > wallWidth - spiderWidth / 2) {
    leftOffset = wallWidth - spiderWidth;
  }

  if (y < spiderHeight / 2) {
    topOffset = 0;
  }

  if (y > wallHeight - spiderHeight / 2) {
    topOffset = wallHeight - spiderHeight;
  }

  spider.style.top = `${topOffset}px`;
  spider.style.left = `${leftOffset}px`;
}
