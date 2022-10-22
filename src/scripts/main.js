'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const wallCoords = wall.getBoundingClientRect();
  const spiderCoords = {
    top:
    e.clientY - wallCoords.top - wall.clientTop - spider.clientHeight / 2,
    left:
    e.clientX - wallCoords.left - wall.clientLeft - spider.clientWidth / 2,
  };

  if (!e.target.closest('.wall')) {
    return;
  }

  function place(coord, sizeWall, sizeSpider) {
    if (coord < 0) {
      return 0;
    }

    if (coord > (sizeWall - sizeSpider)) {
      return (sizeWall - sizeSpider);
    }

    return coord;
  }

  const coordClickX = place(
    spiderCoords.left, wall.clientWidth, spider.clientWidth
  );
  const coordClickY = place(
    spiderCoords.top, wall.clientHeight, spider.clientHeight
  );

  spider.style.left = `${coordClickX}px`;
  spider.style.top = `${coordClickY}px`;
});
