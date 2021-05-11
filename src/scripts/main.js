'use strict';

const spider = document.querySelector('.spider');

spider.style.pointerEvents = 'none';

document.addEventListener('click', e => {
  const wall = e.target.closest('.wall');

  if (wall) {
    let x = e.offsetX - spider.clientHeight / 2;
    let y = e.offsetY - spider.clientWidth / 2;
    const borderRight = wall.clientWidth - spider.clientWidth;
    const borderBottom = wall.clientHeight - spider.clientHeight;

    x = x < 0 ? 0 : x;
    x = x > borderRight ? borderRight : x;
    y = y < 0 ? 0 : y;
    y = y > borderBottom ? borderBottom : y;

    spider.style.left = `${x}px`;
    spider.style.top = `${y}px`;
  }
});
