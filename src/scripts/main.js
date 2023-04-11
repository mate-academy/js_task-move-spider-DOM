'use strict';

const spider = document.querySelector('.spider');
const spiderH = spider.clientHeight;
const wall = document.querySelector('.wall');

const border = (wall.offsetHeight - wall.clientHeight) / 2;

document.addEventListener('click', e => {

  if (e.clientY
    > (wall.offsetTop + wall.offsetHeight - border - (spiderH / 2))) {
    return;
  };

  if (e.clientY < wall.offsetTop + border + (spiderH / 2)) {

    return;
  };

  if (e.clientX
    > (wall.offsetLeft + wall.offsetWidth - border - (spiderH / 2))) {
    return;
  }

  if (e.clientX < wall.offsetLeft + border + (spiderH / 2)) {
    return;
  }
  spider.style.top = e.clientY - wall.offsetTop - spiderH / 2 - border + 'px';
  spider.style.left = e.clientX - wall.offsetLeft - spiderH / 2 - border + 'px';

});
