'use strict';

document.addEventListener('click', (e) => {
  const clickY = e.clientY;
  const clickX = e.clientX;
  const spider = document.querySelector('.spider');
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;
  const wall = document.querySelector('.wall');
  const wallEl = wall.getBoundingClientRect();
  const wallStyles = getComputedStyle(wall);
  const borderWidth = Number(wallStyles.borderWidth.replace('px', ''));

  let marginTop = clickY - wallEl.top - spiderHeight / 2;
  let marginLeft = clickX - wallEl.left - spiderWidth / 2;

  marginLeft = Math.max(
    0,
    Math.min(marginLeft, wallEl.width - spiderWidth - borderWidth * 2),
  );

  marginTop = Math.max(
    0,
    Math.min(marginTop, wallEl.height - spiderHeight - borderWidth * 2),
  );

  spider.style.top = marginTop + 'px';
  spider.style.left = marginLeft + 'px';
});
