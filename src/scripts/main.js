'use strict';

document.addEventListener('click', (e) => {
  // write code here
  const wall = e.target;
  const spider = document.querySelector('.spider');

  if (!wall.classList.contains('wall')) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  let x = e.clientX - wallRect.left - spiderWidth / 2 - wall.clientLeft;
  let y = e.clientY - wallRect.top - spiderHeight / 2 - wall.clientTop;

  const minX = 0;
  const minY = 0;
  const maxX = wall.clientWidth - spiderWidth;
  const maxY = wall.clientHeight - spiderHeight;

  x = Math.max(minX, Math.min(x, maxX));
  y = Math.max(minY, Math.min(y, maxY));

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
