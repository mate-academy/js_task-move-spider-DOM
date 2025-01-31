'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallRect = wall.getBoundingClientRect();
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  if (
    e.clientX < wallRect.left ||
    e.clientX > wallRect.right ||
    e.clientY < wallRect.top ||
    e.clientY > wallRect.bottom
  ) {
    return;
  }

  let spiderLeft =
    e.clientX - wallRect.left - wall.clientLeft - spiderWidth / 2;
  let spiderTop = e.clientY - wallRect.top - wall.clientTop - spiderHeight / 2;

  if (spiderLeft < 0) {
    spiderLeft = 0;
  }

  if (spiderLeft > wall.clientWidth - spiderWidth) {
    spiderLeft = wall.clientWidth - spiderWidth;
  }

  if (spiderTop < 0) {
    spiderTop = 0;
  }

  if (spiderTop > wall.clientHeight - spiderHeight) {
    spiderTop = wall.clientHeight - spiderHeight;
  }

  spider.style.left = `${spiderLeft}px`;
  spider.style.top = `${spiderTop}px`;
});
