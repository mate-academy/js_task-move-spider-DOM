'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('wall');
  const spider = document.querySelector('spider');

  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  const spiderHalfWidth = spiderRect.width / 2;
  const spiderHalfHeight = spiderRect.height / 2;

  let x = e.clientX - wallRect.left - spiderHalfWidth;
  let y = e.clientY - wallRect.top - spiderHalfHeight;

  const minX = 0;
  const minY = 0;
  const maxX = wallRect.width - spiderRect.width;
  const maxY = wallRect.height - spiderRect.height;

  // eslint-disable-next-line curly
  if (x < minX) x = minX;
  // eslint-disable-next-line curly
  if (y < minY) y = minY;
  // eslint-disable-next-line curly
  if (x > maxX) x = maxX;
  // eslint-disable-next-line curly
  if (y > maxY) y = maxY;

  spider.style.position = 'absolute';
  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
