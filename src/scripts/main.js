'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  const coordX = e.clientX;
  const coordY = e.clientY;
  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  if (
    coordX < wallRect.x ||
    coordX > wallRect.x + wallRect.width ||
    coordY < wallRect.y ||
    coordY > wallRect.y + wallRect.height
  ) {
    return;
  }

  const wallClientTop = wall.clientTop;
  const wallClientLeft = wall.clientLeft;

  let spiderTop = coordY - (wallRect.y + wallClientTop) - spiderRect.height / 2;
  let spiderLeft =
    coordX - (wallRect.x + wallClientLeft) - spiderRect.width / 2;

  const spiderBorder = {
    top: 0,
    left: 0,
    bottom: wallRect.height - wallClientTop * 2 - spiderRect.height,
    right: wallRect.width - wallClientLeft * 2 - spiderRect.width,
  };

  if (spiderTop < spiderBorder.top) {
    spiderTop = spiderBorder.top;
  } else if (spiderTop > spiderBorder.bottom) {
    spiderTop = spiderBorder.bottom;
  }

  if (spiderLeft < spiderBorder.left) {
    spiderLeft = spiderBorder.left;
  } else if (spiderLeft > spiderBorder.right) {
    spiderLeft = spiderBorder.right;
  }

  spider.style.top = `${spiderTop}px`;
  spider.style.left = `${spiderLeft}px`;
});
