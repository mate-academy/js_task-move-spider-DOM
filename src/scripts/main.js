'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const spiderWidth = spider.clientWidth;

const wallInnerHeight = parseFloat(
  window.getComputedStyle(wall, null).getPropertyValue('height'), 10,
);

const wallLeft = wall.getBoundingClientRect().left;
const wallTop = wall.getBoundingClientRect().top;

const wallFullHeight = wall.getBoundingClientRect().height;
const wallBorder = (wallFullHeight - wallInnerHeight) / 2;

document.addEventListener('click', e => {
  if (e.target !== wall) {
    return;
  }

  const x = e.clientX;
  const y = e.clientY;

  const minSpiderX = 0;
  const maxSpiderX = wallInnerHeight - spiderWidth;

  const minSpiderY = 0;
  const maxSpiderY = wallInnerHeight - spiderWidth;

  let newSpiderTop = y - wallTop - wallBorder - spiderWidth / 2;
  let newSpiderLeft = x - wallLeft - wallBorder - spiderWidth / 2;

  if (newSpiderTop < minSpiderY) {
    newSpiderTop = minSpiderY;
  }

  if (newSpiderTop > maxSpiderY) {
    newSpiderTop = maxSpiderY;
  }

  if (newSpiderLeft < minSpiderX) {
    newSpiderLeft = minSpiderX;
  }

  if (newSpiderLeft > maxSpiderX) {
    newSpiderLeft = maxSpiderX;
  }

  spider.style.top = `${newSpiderTop}px`;
  spider.style.left = `${newSpiderLeft}px`;
});
