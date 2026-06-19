'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!e.target.closest('.wall')) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();
  const wallStyle = getComputedStyle(wall);
  const borderLeft = parseInt(wallStyle.borderLeftWidth);
  const borderTop = parseInt(wallStyle.borderTopWidth);

  const clickCenterX = e.clientX - wallRect.left - borderLeft;
  const clickCenterY = e.clientY - wallRect.top - borderTop;

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;

  const centerX = Math.max(
    spiderWidth / 2,
    Math.min(clickCenterX, wallWidth - spiderWidth / 2),
  );
  const centerY = Math.max(
    spiderHeight / 2,
    Math.min(clickCenterY, wallHeight - spiderHeight / 2),
  );

  spider.style.left = centerX - spiderWidth / 2 + 'px';
  spider.style.top = centerY - spiderHeight / 2 + 'px';
});
