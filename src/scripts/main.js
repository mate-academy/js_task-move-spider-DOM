'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.style.position = 'relative';
spider.style.position = 'absolute';

wall.addEventListener('click', (e) => {
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  let leftPosition = e.offsetX - spiderWidth / 2;
  let topPosition = e.offsetY - spiderHeight / 2;

  leftPosition = Math.max(
    0,
    Math.min(leftPosition, wall.clientWidth - spiderWidth),
  );

  topPosition = Math.max(
    0,
    Math.min(topPosition, wall.clientHeight - spiderHeight),
  );

  spider.style.left = leftPosition + 'px';
  spider.style.top = topPosition + 'px';
});
