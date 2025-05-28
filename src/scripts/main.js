'use strict';

const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const rectWall = wall.getBoundingClientRect();
  const rectSpider = spider.getBoundingClientRect();

  const wallStyles = getComputedStyle(wall);
  const borderLeft = parseFloat(wallStyles.borderLeftWidth);
  const borderTop = parseFloat(wallStyles.borderTopWidth);

  let x = e.clientX - rectWall.x - rectSpider.width / 2 - borderLeft;
  let y = e.clientY - rectWall.y - rectSpider.height / 2 - borderTop;

  x = Math.min(
    Math.max(x, 0),
    rectWall.width - rectSpider.width - borderLeft * 2,
  );

  y = Math.min(
    Math.max(y, 0),
    rectWall.height - rectSpider.height - borderTop * 2,
  );

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
