'use strict';

const spider = document.querySelector('.spider');
const spiderH = spider.clientHeight;
const wall = document.querySelector('.wall');

const border = (wall.offsetHeight - wall.clientHeight) / 2;
// console.log(spiderH)

document.addEventListener('click', e => {
  const clicin = e.target;

  if (!wall.contains(clicin)) {
    return;
  }

  spider.style.top = e.clientY - wall.offsetTop - spiderH / 2 - border + 'px';
  spider.style.left = e.clientX - wall.offsetLeft - spiderH / 2 - border + 'px';

  if (e.clientY > wall.offsetTop + wall.offsetHeight - spiderH / 2) {
    spider.style.top = wall.clientHeight - spiderH + 'px';
  }

  if (e.clientY < wall.offsetTop + spiderH / 2) {
    spider.style.top = 0 + 'px';
  }

  if (e.clientX < wall.offsetLeft + spiderH / 2) {
    spider.style.left = 0 + 'px';
  }

  if (e.clientX > wall.offsetLeft + wall.offsetWidth - spiderH / 2) {
    spider.style.left = wall.clientWidth - spiderH + 'px';
  }
});
