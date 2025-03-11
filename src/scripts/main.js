'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const targetSpiderX = Math.min(
    Math.max(0, e.clientX - wall.offsetLeft - spider.clientWidth / 2),
    wall.clientWidth - spider.clientWidth,
  );
  const targetSpiderY = Math.min(
    Math.max(0, e.clientY - wall.offsetTop - spider.clientHeight / 2),
    wall.clientHeight - spider.clientHeight,
  );

  spider.style.left = `${targetSpiderX}px`;
  spider.style.top = `${targetSpiderY}px`;
});
