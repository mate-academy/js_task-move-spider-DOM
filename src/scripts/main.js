'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  const containerSize = wall.getBoundingClientRect();

  const localLeft = x - containerSize.left;
  const localTop = y - containerSize.top;

  const spiderWidth = spider.getBoundingClientRect().width;
  const spiderHeight = spider.getBoundingClientRect().height;

  const desiredLeft = localLeft - spiderWidth / 2;
  const desiredTop = localTop - spiderHeight / 2;


  const leftPos = Math.min(Math.max(desiredLeft, 0), containerSize.width - spiderWidth);
  const topPos  = Math.min(Math.max(desiredTop, 0), containerSize.height - spiderHeight);

  spider.style.left = leftPos + 'px';
  spider.style.top = topPos + 'px';
});
