'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {

  if (!e.target.closest('.wall')) {
    return;
  }

  const clickCoordinates = {
    top: e.clientY - wall.offsetTop - wall.clientTop,
    left: e.clientX - wall.offsetLeft - wall.clientLeft,
  };

  function position(edge) {
    let size = 'Height';

    if (edge === 'left') {
      size = 'Width';
    }

    return Math.max(0, Math.min(
      clickCoordinates[edge] - spider[`offset${size}`] / 2,
      wall[`client${size}`] - spider[`offset${size}`],
    )) + 'px';
  }

  spider.style.top = position('top');
  spider.style.left = position('left');
});
