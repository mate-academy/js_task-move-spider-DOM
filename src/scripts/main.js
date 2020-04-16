'use strict';

function moveSpider(wall) {
  const spider = wall.querySelector('.spider');

  wall.addEventListener('click', (mouse) => {
    const wallPosition = wall.getBoundingClientRect();
    // console.log(wallPosition);
    const wallY = wallPosition.top + wall.clientTop;
    const wallX = wallPosition.left + wall.clientLeft;
    const y = mouse.clientY - wallY - spider.offsetWidth / 2;
    const x = mouse.clientX - wallX - spider.offsetHeight / 2;
    const maxY = wall.clientWidth - spider.offsetWidth;
    const maxX = wall.clientHeight - spider.offsetHeight;

    spider.style.top = y < 0 ? 0 : y > maxY ? `${maxY}px` : `${y}px`;
    spider.style.left = x < 0 ? 0 : x > maxX ? `${maxX}px` : `${x}px`;
  });
};

moveSpider(
  document.querySelector('.wall')
);
