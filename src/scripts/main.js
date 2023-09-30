'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const spiderWidth = spider.clientWidth / 2;
const spiderHeight = spider.clientHeight / 2;

wall.addEventListener('click', (e) => {
  const x = Math.max(0, e.clientX - wall
    .getBoundingClientRect().left - spiderWidth);
  const y = Math.max(0, e.clientY - wall
    .getBoundingClientRect().top - spiderHeight);

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});

window.addEventListener('resize', () => location.reload());
