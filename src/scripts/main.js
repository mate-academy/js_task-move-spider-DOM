'use strict';

const spider = document.querySelector(".spider")
const wall = document.querySelector(".wall")

document.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  let x = e.clientX - wallRect.left - spiderRect.width / 2;
  let y = e.clientY - wallRect.top - spiderRect.height / 2;

  x = Math.max(0, Math.min(x, wallRect.width - spiderRect.width));
  y = Math.max(0, Math.min(y, wallRect.height - spiderRect.height));

  spider.style.left = x + "px";
  spider.style.top = y + "px";
});
