'use strict';

// document.addEventListener('click', e => {
//   // write code here
// });
function init(wall) {
  const spider = wall.querySelector('.spider');

  wall.addEventListener('click', (ev) => {
    const wallPosition = wall.getBoundingClientRect();
    const wallX = wallPosition.left + wall.clientLeft;
    const wallY = wallPosition.top + wall.clientTop;
    let y = ev.clientY - wallY - spider.offsetWidth / 2;
    let x = ev.clientX - wallX - spider.offsetHeight / 2;
    const maxY = wall.clientWidth - spider.offsetWidth;
    const maxX = wall.clientHeight - spider.offsetHeight;

    if (x < 0) {
      x = 0;
    }

    if (x > maxX) {
      x = maxX;
    }

    if (y < 0) {
      y = 0;
    }

    if (y > maxY) {
      x = maxY;
    }

    spider.style.top = `${y}px`;
    spider.style.left = `${x}px`;
  });
}
init(document.querySelector('.wall'));
