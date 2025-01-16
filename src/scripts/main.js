'use strict';

document.addEventListener('click', (e) => {
  // write code here
  const spider = document.querySelector(".spider");

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const wall = document.querySelector(".wall");
  const wallPosition = wall.getBoundingClientRect();

  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;

  if (e.clientX < wallPosition.right &&
    e.clientX > wallPosition.left &&
    e.clientY > wallPosition.top &&
    e.clientY < wallPosition.bottom) {
    const clickCoordX = e.clientX - wallPosition.x;
    const clickCoordY = e.clientY - wallPosition.y;

    const centerX = clickCoordX - spiderWidth / 2;
    const centerY = clickCoordY - spiderHeight / 2;

    const maxLeft = wallWidth - spiderWidth;
    const maxTop = wallHeight - spiderHeight;

    spider.style.left = `${Math.max(0, Math.min(centerX, maxLeft))}px`;
    spider.style.top = `${Math.max(0, Math.min(centerY, maxTop))}px`;
  }
});
