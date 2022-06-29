'use strict';

const wall = document.querySelector(`.wall`);
const spider = document.querySelector(`.spider`);

document.addEventListener('click', e => {
  // write code here
  if (e.target !== wall) {
    return;
  };

  const box = wall.getBoundingClientRect();
  const borderX = (box.width - wall.clientWidth) / 2;
  const borderY = (box.height - wall.clientHeight) / 2;

  let x = e.clientX - box.left - borderX;
  let y = e.clientY - box.top - borderY;
  const spiderRect = spider.getBoundingClientRect();

  const collisionCheck = () => {
    if (x < spiderRect.width / 2) {
      x = spiderRect.width / 2;
    }

    if (y < spiderRect.height / 2) {
      y = spiderRect.height / 2;
    }

    if (y > box.width - borderY * 2 - spiderRect.height / 2) {
      y = box.width - borderY * 2 - spiderRect.height / 2;
    }

    if (x > box.width - borderX * 2 - spiderRect.width / 2) {
      x = box.width - borderX * 2 - spiderRect.width / 2;
    }
  };

  const moveSpider = () => {
    spider.style.setProperty(`top`, `${y}px`);
    spider.style.setProperty(`left`, `${x}px`);
    spider.style.setProperty(`transform`, `translateX(-50%) translateY(-50%)`);
  };

  collisionCheck();
  moveSpider();
});
