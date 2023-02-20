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

    if (x >= maxValue) {
      spider.style.left = maxValue + 'px';
    } else {
      spider.style.left = `${x < 0 ? 0 : x}` + 'px';
    }

    if (y >= maxValue) {
      spider.style.top = maxValue + 'px';
    } else {
      spider.style.top = `${y < 0 ? 0 : y}` + 'px';
    }
  }
});
