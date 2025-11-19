'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.style.position = 'relative';

wall.addEventListener('click', (e) => {
  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;
  const clickX = e.clientX - wall.getBoundingClientRect().left;
  const clickY = e.clientY - wall.getBoundingClientRect().top;

  let left = clickX - spiderWidth / 2;
  let Mytop = clickY - spiderHeight / 2;

  if (left < 0) {
    left = 0;
  }

  if (Mytop < 0) {
    Mytop = 0;
  }

  if (left > wallWidth - spiderWidth) {
    left = wallWidth - spiderWidth;
  }

  if (Mytop > wallHeight - spiderHeight) {
    Mytop = wallHeight - spiderHeight;
  }

  spider.style.position = 'absolute';
  spider.style.left = `${left}px`;
  spider.style.top = `${Mytop}px`;
});
