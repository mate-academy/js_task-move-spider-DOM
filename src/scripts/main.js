'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const borderWall = parseInt(getComputedStyle(wall).borderWidth, 10);

document.addEventListener('click', (e) => {
  const rect = wall.getBoundingClientRect();

  if (
    e.clientX < rect.left ||
    e.clientX > rect.right ||
    e.clientY < rect.top ||
    e.clientY > rect.bottom
  ) {
    return;
  }

  // console.log(rect);

  let x = e.clientX - rect.left + borderWall - spider.offsetWidth / 2;
  let y = e.clientY - rect.top + borderWall - spider.offsetHeight / 2;

  // const borderLeft = parseInt(getComputedStyle(wall).borderLeftWidth, 10);
  // const borderTop = parseInt(getComputedStyle(wall).borderTopWidth, 10);

  // x -= spider.offsetWidth / 2 + borderLeft;
  // y -= spider.offsetHeight / 2 + borderTop;

  x = Math.max(0, Math.min(x, wall.clientWidth - spider.offsetWidth));

  y = Math.max(0, Math.min(y, wall.clientHeight - spider.offsetHeight));

  if (e.target.classList.contains('wall')) {
    // console.log('Wall clicked');
    spider.style.left = `${x}px`;
    spider.style.top = `${y}px`;
  }
});
