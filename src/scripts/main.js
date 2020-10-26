'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const halfSpiderHeight = spider.offsetHeight / 2;
const halfSpiderWidth = spider.offsetWidth / 2;

document.addEventListener('click', (e) => {
  if (e.target.className === 'wall') {
    const border = wall.clientTop;
    let y = e.clientY - wall.offsetTop - halfSpiderHeight - border;
    let x = e.clientX - wall.offsetLeft - halfSpiderWidth - border;

    x = Math.max(0, x);
    x = Math.min(wall.offsetWidth - border * 2 - spider.offsetWidth, x);

    y = Math.max(0, y);
    y = Math.min(wall.offsetHeight - border * 2 - spider.offsetWidth, y);

    spider.style.top = `${y}px`;
    spider.style.left = `${x}px`;
  }
});
