'use strict';

document.addEventListener('click', e => {
  // write code here
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const checkOutOfBounds = (coord) => {
    const corectCoord = coord < 0
      ? 0
      : coord > wall.clientHeight - spider.clientHeight
        ? wall.clientHeight - spider.clientHeight
        : coord;

    return corectCoord;
  };

  const getCoordinates = () => {
    const coordX = e.clientX - wall.offsetLeft - spider.clientWidth / 2;
    const coordY = e.clientY - wall.offsetTop - spider.clientWidth / 2;

    return {
      coordX, coordY,
    };
  };

  if (e.target.closest('.wall')) {
    spider.style.left = checkOutOfBounds(getCoordinates().coordX) + 'px';
    spider.style.top = checkOutOfBounds(getCoordinates().coordY) + 'px';
  }
});
