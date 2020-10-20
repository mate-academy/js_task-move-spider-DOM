'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', event => {
  if (!event.target.closest('.wall') || event.target === spider) {
    return;
  }

  moveSomeObject(event, spider, wall);
});

function moveSomeObject(event, someObject, area) {
  const maxRight = area.clientWidth - someObject.offsetWidth;
  const halfObjectWidth = someObject.offsetWidth / 2;
  const maxDown = area.clientHeight - someObject.offsetHeight;
  const halfObjectHeight = someObject.offsetHeight / 2;

  if (event.offsetX <= halfObjectWidth) {
    someObject.style.left = '0px';
  } else if (event.offsetX >= maxRight + halfObjectWidth) {
    someObject.style.left = `${maxRight}px`;
  } else {
    someObject.style.left = `${event.offsetX - halfObjectWidth}px`;
  }

  if (event.offsetY <= halfObjectHeight) {
    someObject.style.top = '0px';
  } else if (event.offsetY >= maxDown + halfObjectHeight) {
    someObject.style.top = `${maxDown}px`;
  } else {
    someObject.style.top = `${event.offsetY - halfObjectHeight}px`;
  }
}
