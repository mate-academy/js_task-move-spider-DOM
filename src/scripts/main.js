'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const walls = document.querySelector('.walls');

  const wallsRect = walls.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  let newLeft = e.clientX - wallsRect.left - spiderRect.width / 2;
  let newTop = e.clientY - wallsRect.top - spiderRect.height / 2;

  newLeft = Math.max(0, Math.min(newLeft, wallsRect.width - spiderRect.width));
  newTop = Math.max(0, Math.min(newTop, wallsRect.height - spiderRect.height));

  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
