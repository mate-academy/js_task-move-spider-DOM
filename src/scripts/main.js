'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const boxRect = wall.getBoundingClientRect();

  const x = e.clientX - boxRect.left;
  const y = e.clientY - boxRect.top;

  const spiderWidth = x - spider.offsetWidth / 2;
  const boxWidth = boxRect.width - spider.offsetWidth;

  const spiderHeight = y - spider.offsetHeight / 2;
  const boxHeight = boxRect.height - spider.offsetHeight;

  const spiderX = Math.max(0, Math.min(spiderWidth, boxWidth));
  const spiderY = Math.max(0, Math.min(spiderHeight, boxHeight));

  spider.style.left = `${spiderX}px`;
  spider.style.top = `${spiderY}px`;
});
