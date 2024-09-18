'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();
  const wallBorder = parseInt(
    window.getComputedStyle(wall).borderWidth.split('px').join(''),
  );

  const clickX = e.clientX - wallRect.left - wallBorder;
  const clickY = e.clientY - wallRect.top - wallBorder;

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  let spiderX = clickX - spiderWidth / 2;
  let spiderY = clickY - spiderHeight / 2;

  spiderX = Math.max(
    0,
    Math.min(spiderX, wallRect.width - spiderWidth - wallBorder * 2),
  );

  spiderY = Math.max(
    0,
    Math.min(spiderY, wallRect.height - spiderHeight - wallBorder * 2),
  );

  spider.style.left = spiderX + 'px';
  spider.style.top = spiderY + 'px';
});
