'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const rectWall = wall.getBoundingClientRect();
  const borderWidth = parseFloat(
    window.getComputedStyle(wall).getPropertyValue('border-width')
  );

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  let x = e.clientX - rectWall.left - borderWidth;
  let y = e.clientY - rectWall.top - borderWidth;

  const minX = spiderWidth / 2;
  const maxX = wall.clientWidth - spiderWidth / 2;

  const minY = spiderHeight / 2;
  const maxY = wall.clientHeight - spiderHeight / 2;

  x = Math.max(minX, Math.min(x, maxX));
  y = Math.max(minY, Math.min(y, maxY));
  spider.style.left = x + 'px';
  spider.style.top = y + 'px';
  spider.style.transform = 'translate(-50%, -50%)';
});
