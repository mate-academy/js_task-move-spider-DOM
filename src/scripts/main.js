'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const rect = wall.getBoundingClientRect();
  let left = e.clientX - rect.left - spider.offsetWidth / 2;
  let posTop = e.clientY - rect.top - spider.offsetHeight / 2;

  left = Math.max(0, left);
  left = Math.min(left, wall.clientWidth - spider.offsetWidth);
  posTop = Math.max(0, posTop);
  posTop = Math.min(posTop, wall.clientHeight - spider.offsetHeight);

  spider.style.left = `${left}px`;
  spider.style.top = `${posTop}px`;
});
