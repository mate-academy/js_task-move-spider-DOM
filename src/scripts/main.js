'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;
  const wallRect = wall.getBoundingClientRect();

  const coordX = e.clientX - wallRect.left - spiderWidth / 2;
  const coordY = e.clientY - wallRect.top - spiderHeight / 2;

  if (
    coordX > 0 &&
    coordX < wall.clientHeight - spiderWidth &&
    coordY > 0 &&
    coordY < wall.clientHeight - spiderHeight
  ) {
    spider.style.transform = `translate(${coordX}px, ${coordY}px)`;
  }
});
