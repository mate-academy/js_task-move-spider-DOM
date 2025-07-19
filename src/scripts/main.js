'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();
  const maxTop = wall.offsetHeight - spider.offsetHeight;
  const maxLeft = wall.offsetWidth - spider.offsetWidth;
  const clickX = e.clientX - wallRect.left;
  const clickY = e.clientY - wallRect.top;
  let finalTop = clickY - spider.offsetHeight / 2;
  let finalLeft = clickX - spider.offsetWidth / 2;

  finalTop = Math.max(0, Math.min(finalTop, maxTop));
  finalLeft = Math.max(0, Math.min(finalLeft, maxLeft));

  spider.style.top = `${finalTop}px`;
  spider.style.left = `${finalLeft}px`;
});
