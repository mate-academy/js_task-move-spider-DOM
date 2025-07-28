'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  if (!e.target.matches('.wall')) {
    return;
  }

  const x = e.pageX - wall.offsetLeft - wall.clientLeft;
  const y = e.pageY - wall.offsetTop - wall.clientTop;

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  let newX = x - spiderWidth / 2;
  let newY = y - spiderHeight / 2;

  const maxX = wall.clientWidth - spiderWidth;
  const maxY = wall.clientHeight - spiderHeight;

  newX = Math.max(0, Math.min(newX, maxX));
  newY = Math.max(0, Math.min(newY, maxY));

  spider.style.left = `${newX}px`;
  spider.style.top = `${newY}px`;
});
