'use strict';

document.addEventListener('click', (e) => {
  const clientX = e.clientX;
  const clientY = e.clientY;

  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const wallPosition = wall.getBoundingClientRect();
  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;
  const wallHeight = wall.offsetHeight;
  const wallWidth = wall.offsetWidth;
  const wallInsideHeight = wall.clientHeight;
  const wallInsideWidth = wall.clientWidth;
  const wallPositionX = wallPosition.x;
  const wallPositionY = wallPosition.y;

  if (
    clientX < wallPositionX ||
    clientX > wallPositionX + wallWidth ||
    clientY < wallPositionY ||
    clientY > wallPositionY + wallHeight
  ) {
    return;
  }

  let spiderHeightShift =
    clientY - wallPosition.y - spiderHeight / 2 - wall.clientTop;
  let spiderWidthShift =
    clientX - wallPosition.x - spiderWidth / 2 - wall.clientLeft;

  if (spiderHeightShift < 0) {
    spiderHeightShift = 0;
  }

  if (spiderHeightShift + spiderHeight > wallInsideHeight) {
    spiderHeightShift = wallInsideHeight - spiderHeight;
  }

  if (spiderWidthShift < 0) {
    spiderWidthShift = 0;
  }

  if (spiderWidthShift + spiderWidth > wallInsideWidth) {
    spiderWidthShift = wallInsideWidth - spiderWidth;
  }

  spider.style.top = `${spiderHeightShift}px`;
  spider.style.left = `${spiderWidthShift}px`;
});
