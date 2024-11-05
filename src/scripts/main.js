'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (!wall.contains(e.target)) {
    return;
  }

  const { clientWidth: wallWidth, clientHeight: wallHeight } = wall;
  const { offsetWidth: spiderWidth, offsetHeight: spiderHeight } = spider;

  let targetX = e.offsetX - spiderWidth / 2;
  let targetY = e.offsetY - spiderHeight / 2;

  targetX = Math.max(0, Math.min(targetX, wallWidth - spiderWidth));
  targetY = Math.max(0, Math.min(targetY, wallHeight - spiderHeight));

  spider.style.left = targetX + 'px';
  spider.style.top = targetY + 'px';
});
