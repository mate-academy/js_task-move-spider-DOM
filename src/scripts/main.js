'use strict';

document.addEventListener('click', e => {
  if (!e.target.closest('.wall')) {
    return;
  }

  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const wallTopLeftX = wall.getBoundingClientRect().x;
  const wallTopLeftY = wall.getBoundingClientRect().y;
  const widthSpider = spider.clientHeight;
  const heightSpider = spider.clientHeight;

  const coordInsideX = e.clientX - wallTopLeftX - wall.clientLeft;
  const coordInsideY = e.clientY - wallTopLeftY - wall.clientTop;

  const leftLim = widthSpider / 2;
  const rightLim = wall.clientWidth - widthSpider / 2;
  const topLim = heightSpider / 2;
  const bottomLim = wall.clientHeight - heightSpider / 2;

  const coordX = leftLim * +(coordInsideX < leftLim)
    + coordInsideX * +(coordInsideX >= leftLim && coordInsideX <= rightLim)
    + rightLim * +(coordInsideX > rightLim);

  const coordY = topLim * +(coordInsideY < topLim)
    + coordInsideY * +(coordInsideY >= topLim && coordInsideY <= bottomLim)
    + bottomLim * +(coordInsideY > bottomLim);

  spider.style.top = `${coordY}` - `${heightSpider / 2}` + 'px';
  spider.style.left = `${coordX}` - `${widthSpider / 2}` + 'px';
});
