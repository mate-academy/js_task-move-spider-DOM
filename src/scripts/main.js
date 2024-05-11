'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallParams = wall.getBoundingClientRect();
  const spiderParams = spider.getBoundingClientRect();

  if (e.target.closest('.wall')) {
    let coordY =
      e.clientY - wallParams.top - wall.clientTop - spiderParams.height / 2;
    let coordX =
      e.clientX - wallParams.left - wall.clientLeft - spiderParams.width / 2;

    if (coordY < 0) {
      coordY = 0;
    } else if (coordY > wall.clientHeight - spider.clientHeight) {
      coordY = wall.clientHeight - spider.clientHeight;
    }

    if (coordX < 0) {
      coordX = 0;
    } else if (coordX > wall.clientWidth - spider.clientWidth) {
      coordX = wall.clientWidth - spider.clientWidth;
    }

    spider.style.top = coordY + 'px';
    spider.style.left = coordX + 'px';
  }
});
