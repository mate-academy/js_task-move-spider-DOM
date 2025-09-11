'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();
  const spiderSize = spider.getBoundingClientRect().height;
  const borderSize = (wallRect.width - wall.clientWidth) / 2;

  const x = e.clientX - wallRect.left - spiderSize / 2 - borderSize;
  const y = e.clientY - wallRect.top - spiderSize / 2 - borderSize;

  const limitedX = Math.min(
    Math.max(x, 0),
    wall.clientWidth - spider.clientWidth,
  );

  const limitedY = Math.min(
    Math.max(y, 0),
    wall.clientHeight - spider.clientHeight,
  );

  spider.style.left = limitedX + 'px';
  spider.style.top = limitedY + 'px';
});
