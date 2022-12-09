'use strict';

document.addEventListener('click', e => {
  // write code here
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const checkOutOfBounds = (coord) => {
    let corectCoord = coord;

    if(coord < 0) {
      corectCoord = 0;
    }

    if (coord > wall.clientHeight - spider.clientHeight) {
      corectCoord = wall.clientHeight - spider.clientHeight;
    }

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
