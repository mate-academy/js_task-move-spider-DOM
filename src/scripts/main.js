'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', function (e) {
  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  let newX = e.clientX - wallRect.left - spiderRect.width / 2;
  let newY = e.clientY - wallRect.top - spiderRect.height / 2;

  newX = Math.max(0, Math.min(newX, wallRect.width - spiderRect.width));
  newY = Math.max(0, Math.min(newY, wallRect.height - spiderRect.height));

  spider.style.transform = `translate(${newX}px, ${newY}px)`;
});
