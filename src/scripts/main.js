'use strict';

document.addEventListener('click', e => {
  const target = e.target.closest('.wall');

  if (!target) {
    return;
  }

  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const wallSize = wall.clientWidth;
  const spiderSize = spider.clientWidth;
  const mouseX = e.offsetX;
  const mouseY = e.offsetY;

  spider.style.transform = 'translate(-50%, -50%)';

  if (mouseX + (spiderSize / 2) > wallSize) {
    spider.style.left = `${wallSize - (spiderSize / 2)}px`;
  } else if (mouseX - (spiderSize / 2) < 0) {
    spider.style.left = `${spiderSize / 2}px`;
  } else {
    spider.style.left = `${mouseX}px`;
  }

  if (mouseY + (spiderSize / 2) > wallSize) {
    spider.style.top = `${wallSize - (spiderSize / 2)}px`;
  } else if (mouseY - (spiderSize / 2) < 0) {
    spider.style.top = `${spiderSize / 2}px`;
  } else {
    spider.style.top = `${mouseY}px`;
  }
});
