'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

let move = false;

function moveSpider(x, y) {
  const wallRect = wall.getBoundingClientRect();

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;
  const halfSpiderWidth = spiderWidth / 2;
  const halfSpiderHeight = spiderHeight / 2;

  const localX = x - wallRect.left;
  const localY = y - wallRect.top;

  let spiderX = localX - halfSpiderWidth;
  let spiderY = localY - halfSpiderHeight;

  const maxX = wallRect.width - spiderWidth;
  const maxY = wallRect.height - spiderHeight;

  spiderX = Math.max(0, Math.min(spiderX, maxX));
  spiderY = Math.max(0, Math.min(spiderY, maxY));

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
