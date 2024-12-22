'use strict';

const wall = document.querySelector('.wall');
const spider = wall.querySelector('.spider');

const topMax = wall.clientHeight - spider.clientHeight;
const leftMax = wall.clientWidth - spider.clientWidth;

const offsetTop = wall.offsetTop + wall.clientTop + spider.clientHeight / 2;
const offsetLeft = wall.offsetLeft + wall.clientLeft + spider.clientWidth / 2;

document.addEventListener('click', (e) => {
  if (e.target.closest('.wall')) {
    let y = e.clientY - offsetTop;
    let x = e.clientX - offsetLeft;

    y = Math.max(y, 0);
    y = Math.min(y, topMax);

    x = Math.max(x, 0);
    x = Math.min(x, leftMax);

    spider.style.top = y + `px`;
    spider.style.left = x + `px`;
  }
});
