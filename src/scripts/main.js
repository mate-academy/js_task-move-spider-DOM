'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', e => {
  const x = e.clientX - wall.offsetLeft;
  const y = e.clientY - wall.offsetTop;

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;
  const spiderX = x - (spiderWidth / 2);
  const spiderY = y - (spiderHeight / 2);

  const wallWidth = wall.offsetWidth - 20;
  const wallHeight = wall.offsetHeight - 20;
  const insideX = (spiderX >= 0) && ((spiderX + spiderWidth) <= wallWidth);
  const insideY = (spiderY >= 0) && ((spiderY + spiderHeight) <= wallHeight);

  if (insideX && insideY) {
    spider.style.left = spiderX + 'px';
    spider.style.top = spiderY + 'px';
  }
});
