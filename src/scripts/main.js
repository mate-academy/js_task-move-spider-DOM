'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (eventL) => {
  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;

  // координати кліку всередині стіни
  let newLeft = eventL.offsetX - spiderWidth / 2;
  let newTop = eventL.offsetY - spiderHeight / 2;

  // обмеження, щоб павук не виходив за стіну
  newLeft = Math.max(0, Math.min(newLeft, wall.clientWidth - spiderWidth));
  newTop = Math.max(0, Math.min(newTop, wall.clientHeight - spiderHeight));

  spider.style.position = 'absolute';
  spider.style.left = newLeft + 'px';
  spider.style.top = newTop + 'px';
});
