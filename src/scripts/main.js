/* eslint-disable no-console */
'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  // write code here
  const wallRect = wall.getBoundingClientRect();
  const wallBorder = parseInt(
    window.getComputedStyle(wall).borderWidth.split('px').join(''),
  );
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;
  // отримую координиати натискання
  const clickX = e.clientX - wallRect.left - wallBorder;
  const clickY = e.clientY - wallRect.top - wallBorder;
  // ширина та висота павук
  const spiderX = Math.max(
    0,
    Math.min(
      clickX - spiderWidth / 2,
      wallRect.width - spiderWidth - wallBorder * 2,
    ),
  );
  const spiderY = Math.max(
    0,
    Math.min(
      clickY - spiderHeight / 2,
      wallRect.height - spiderHeight - wallBorder * 2,
    ),
  );

  spider.style.left = `${spiderX}px`;
  spider.style.top = `${spiderY}px`;
});
