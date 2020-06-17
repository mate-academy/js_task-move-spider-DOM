'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const sizes = {
  wall: wall.clientWidth,
  border: wall.clientLeft,
  spider: spider.clientWidth,
};

document.addEventListener('click', e => {
  if (e.target.closest('.wall')) {
    setCoordinates('left', e.clientX);
    setCoordinates('top', e.clientY);
  }
});

function setCoordinates(axis, eventValue) {
  let coordinate = eventValue - wall.getBoundingClientRect()[axis]
    - sizes.border - sizes.spider / 2;

  if (coordinate < 0) {
    coordinate = 0;
  } else if (coordinate > sizes.wall - sizes.spider) {
    coordinate = sizes.wall - sizes.spider;
  }

  spider.style[axis] = coordinate + 'px';
};
