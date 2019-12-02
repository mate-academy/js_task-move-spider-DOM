'use strict';

function init(wall) {
  const spider = wall.querySelector('.spider');

  wall.addEventListener('click', (ev) => {
    const wallPosition = wall.getBoundingClientRect();
    const wallX = wallPosition.left + wall.clientLeft;
    const wallY = wallPosition.top + wall.clientTop;
    let x = ev.clientX - wallX - spider.offsetWidth / 2;
    let y = ev.clientY - wallY - spider.offsetHeight / 2;

    const maxX = wall.clientWidth - spider.offsetWidth;
    const maxY = wall.clientHeight - spider.offsetHeight;

    x = x < 0 ? 0 : x;
    x = x > maxX ? maxX : x;
    y = y < 0 ? 0 : y;
    y = y > maxY ? maxY : y;

    spider.style.left = `${x}px`;
    spider.style.top = `${y}px`;
  });
}

init(
  document.querySelector('.wall')
);
