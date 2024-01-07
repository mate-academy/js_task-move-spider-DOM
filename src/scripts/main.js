/* eslint-disable no-console */
'use strict';

const field = document.querySelector('.wall');

field.style.position = 'relative';

const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  const fieldRect = field.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  const xMouse = e.clientX;
  const yMouse = e.clientY;

  const newX
    = xMouse - spiderRect.width / 2 - fieldRect.left;
  const newY
    = yMouse - spiderRect.height / 2 - fieldRect.top;

  const maxX = fieldRect.width - spiderRect.width;
  const maxY = fieldRect.height - spiderRect.height;

  spider.style.position = 'absolute';
  spider.style.top = Math.min(Math.max(newY, 0), maxY) + 'px';
  spider.style.left = Math.min(Math.max(newX, 0), maxX) + 'px';

  console.log(xMouse, yMouse);
});
