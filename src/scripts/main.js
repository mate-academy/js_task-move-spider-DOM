'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const wallRect = wall.getBoundingClientRect();

  const mouseX = e.clientX - wallRect.left;
  const mouseY = e.clientY - wallRect.top;

  if (
    mouseX >= 0 &&
    mouseX <= wallRect.width &&
    mouseY >= 0 &&
    mouseY <= wallRect.height
  ) {
    spider.style.left = `${Math.min(mouseX - spider.offsetWidth / 2)}px`;
    spider.style.top = `${Math.min(mouseY - spider.offsetWidth / 2)}px`;
  }
});
