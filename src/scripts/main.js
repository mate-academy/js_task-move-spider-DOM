'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (e.target.closest('.wall')) {
    const sizeWall = wall.getBoundingClientRect();
    const spiderWidth = spider.offsetWidth;
    const spiderHeight = spider.offsetHeight;

    let x = e.clientX - sizeWall.left - spiderWidth / 2;
    let y = e.clientY - sizeWall.top - spiderHeight / 2;

    x = Math.max(0, Math.min(x, sizeWall.width - spiderWidth));
    y = Math.max(0, Math.min(y, sizeWall.height - spiderHeight));

    spider.style.left = `${x}px`;
    spider.style.top = `${y}px`;
  }
});
