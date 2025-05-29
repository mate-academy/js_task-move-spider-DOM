'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const wallX = wall.offsetLeft;
  const wallY = wall.offsetTop;
  const wallBorderWidth = parseInt(getComputedStyle(wall).borderWidth, 10);
  const clickX = e.pageX;
  const clickY = e.pageY;
  const destinationX = clickX - wallX - wallBorderWidth - spider.width / 2;
  const destinationY = clickY - wallY - wallBorderWidth - spider.height / 2;
  const wallWidth = wall.offsetWidth - wallBorderWidth * 2;
  const wallHeight = wall.offsetHeight - wallBorderWidth * 2;
  const spiderWidth = spider.width;
  const spiderHeight = spider.height;
  const isWithinWall =
    destinationX >= 0 &&
    destinationX <= wallWidth - spiderWidth &&
    destinationY >= 0 &&
    destinationY <= wallHeight - spiderHeight;

  if (
    clickX < wallX ||
    clickX > wallX + wall.offsetWidth ||
    clickY < wallY ||
    clickY > wallY + wall.offsetHeight
  ) {
    return;
  }

  if (isWithinWall) {
    spider.style.left = `${clickX - wallX - wallBorderWidth - spider.width / 2}px`;
    spider.style.top = `${clickY - wallY - wallBorderWidth - spider.height / 2}px`;
  } else {
    const clampedX = Math.max(
      0,
      Math.min(destinationX, wallWidth - spiderWidth),
    );
    const clampedY = Math.max(
      0,
      Math.min(destinationY, wallHeight - spiderHeight),
    );

    spider.style.left = `${clampedX}px`;
    spider.style.top = `${clampedY}px`;
  }

  spider.style.position = 'absolute';
});
