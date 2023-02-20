'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const widthSpider = spider.clientWidth;
  const wall = e.target.closest('.wall');

  const widthWall = wall.clientWidth;
  const maxValue = widthWall - widthSpider;
  const border = parseInt(
    window.getComputedStyle(wall).getPropertyValue('border-width'
    ));

  if (wall) {
    const x = e.clientX - wall.offsetLeft - spider.offsetHeight / 2 - border;
    const y = e.clientY - wall.offsetTop - spider.offsetHeight / 2 - border;

    spider.style.left = x >= maxValue ? `${maxValue}px` : `${x < 0 ? 0 : x}px`;
    spider.style.top = y >= maxValue ? `${maxValue}px` : `${y < 0 ? 0 : y}px`;
  }
});
