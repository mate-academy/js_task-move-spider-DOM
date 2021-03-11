'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  if (e.target === spider) {
    return;
  }

  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  const wallHeight = wall.clientHeight;
  const wallWidth = wall.clientWidth;
  const spiderHeight = spider.clientHeight;
  const spiderWidth = spider.clientWidth;

  if (mouseX <= spiderWidth / 2) {
    mouseX = spiderWidth / 2;
  }

  if (mouseX >= wallWidth - spiderWidth / 2) {
    mouseX = wallWidth - (spiderWidth / 2);
  }

  if (mouseY <= spiderHeight / 2) {
    mouseY = spiderHeight / 2;
  }

  if (mouseY >= wallHeight - spiderHeight / 2) {
    mouseY = wallHeight - (spiderHeight / 2);
  }
  spider.style.top = `${mouseY - spider.offsetHeight / 2}px`;
  spider.style.left = `${mouseX - spider.offsetWidth / 2}px`;
});
