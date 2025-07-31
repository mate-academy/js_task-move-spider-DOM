'use strict';

const spider = document.querySelector('img');
const wall = document.querySelector('.wall');

let move = false;

function moveSpider(x, y) {
  const wallRect = wall.getBoundingClientRect();
  const spiderW = spider.offsetWidth + 20;
  const spiderH = spider.offsetHeight + 20;

  let spiderX = x - wallRect.left - 35;
  let spiderY = y - wallRect.top - 35;

  spiderX = Math.max(0, Math.min(spiderX, wallRect.width - spiderW));
  spiderY = Math.max(0, Math.min(spiderY, wallRect.height - spiderH));

  spider.style.left = `${spiderX}px`;
  spider.style.top = `${spiderY}px`;
}

wall.addEventListener('mousemove', (el) => {
  if (move) {
    moveSpider(el.clientX, el.clientY);
  }
});

wall.addEventListener('click', (e) => {
  moveSpider(e.clientX, e.clientY);
  move = true;
});
