'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  const poss = wall.getBoundingClientRect();
  const y = e.clientY - poss.top - spider.clientHeight / 2;
  const x = e.clientX - poss.left - spider.clientWidth / 2;

  moveSpider(x, y);
});

function moveSpider(x, y) {
  const wallX = wall.clientWidth - spider.clientWidth;
  const wallY = wall.clientHeight - spider.clientHeight;

  const spiderX = Math.max(0, Math.min(wallX, x));
  const spiderY = Math.max(0, Math.min(wallY, y));

  spider.style.top = spiderY + 'px';
  spider.style.left = spiderX + 'px';
}
