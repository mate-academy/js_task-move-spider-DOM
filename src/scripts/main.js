'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();

  const clickXInsideWall = e.clientX - wallRect.left;
  const clickYInsideWall = e.clientY - wallRect.top;

  const finalX = clickXInsideWall - spider.offsetWidth / 2;
  const finalY = clickYInsideWall - spider.offsetHeight / 2;

  spider.style.transform = `translate(${finalX}px, ${finalY}px)`;
});
