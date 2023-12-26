'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const wallCoords = document.querySelector('.wall').getBoundingClientRect();
  const leftLimit = wallCoords.left + wall.clientLeft;
  const topLimit = wallCoords.top + wall.clientTop;
  const leftSpiderCoord = e.clientX - spider.clientWidth / 2 - leftLimit;
  const topSpiderCoord = e.clientY - spider.clientHeight / 2 - topLimit;

  const maxLeft = wall.clientWidth - spider.clientWidth;
  const maxDown = wall.clientHeight - spider.clientWidth;

  if (!e.target.closest('.wall')) {
    return;
  }

  spider.style.left = limited(leftSpiderCoord, maxLeft) + 'px';
  spider.style.top = limited(topSpiderCoord, maxDown) + 'px';

  function limited(current, max) {
    const limitedMin = Math.max(current, 0);

    return Math.min(limitedMin, max);
  }
});
