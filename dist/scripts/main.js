'use strict';

document.addEventListener('click', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  wall.addEventListener('click', (e) => {
    const wallPosition = wall.getBoundingClientRect();
    const wallX = wallPosition.x + wall.clientLeft;
    const wallY = wallPosition.y + wall.clientTop;
    const spiderWidth = spider.offsetWidth / 2;
    const spiderHeight = spider.offsetHeight / 2;

    let x = e.clientX - wallX - spiderWidth;
    let y = e.clientY - wallY - spiderHeight;

    const maxX = wall.clientWidth - spider.offsetWidth;
    const maxY = wall.clientHeight - spider.offsetHeight;

    x = x < 0 ? 0 : x;
    x = x > maxX ? maxX : x;

    y = y < 0 ? 0 : y;
    y = y > maxY ? maxY : y;

    spider.style.top = y + 'px';
    spider.style.left = x + 'px';
  });
});
