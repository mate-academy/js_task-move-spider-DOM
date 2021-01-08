'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const calculation = (a, b) => a < 0 ? 0 : (a > b ? b : a);

  if (e.target.closest('.wall')) {
    const wallPosition = wall.getBoundingClientRect();

    const wallX = wallPosition.x + wall.clientLeft;
    const wallY = wallPosition.y + wall.clientTop;

    const spiderWidth = spider.offsetWidth;
    const spiderHeight = spider.offsetHeight;

    const maxWallX = wall.clientWidth - spiderWidth;
    const maxWallY = wall.clientHeight - spiderHeight;

    const spiderX = e.clientX - wallX - spiderWidth / 2;
    const spiderY = e.clientY - wallY - spiderHeight / 2;

    const topY = calculation(spiderY, maxWallY);
    const leftX = calculation(spiderX, maxWallX);

    spider.style.cssText = `top: ${topY}px; left: ${leftX}px;`;
  };
});
