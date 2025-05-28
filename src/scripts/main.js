'use strict';

const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const rectWall = wall.getBoundingClientRect();
  const rectSpider = spider.getBoundingClientRect();

  let x = e.clientX - rectWall.x - rectSpider.width / 2 - 10;
  let y = e.clientY - rectWall.y - rectSpider.height / 2 - 10;

  x = Math.min(Math.max(x, 0), rectWall.width - rectSpider.width - 20);
  y = Math.min(Math.max(y, 0), rectWall.height - rectSpider.height - 20);

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
