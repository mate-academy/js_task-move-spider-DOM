'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  const eventClick = e.target;

  if (eventClick !== wall) {
    return;
  }

  const shift = spider.offsetWidth / 2;
  const wallStyles = getComputedStyle(wall);
  const wallBorder = parseFloat(wallStyles.border);

  const position = eventClick.getBoundingClientRect();

  let positionX = e.clientX - position.left - wallBorder;
  const maxPositionX = position.left + wall.offsetWidth - wallBorder - shift;

  if (e.clientX > maxPositionX) {
    positionX = maxPositionX - position.left - wallBorder;
  }

  spider.style.left = (positionX - shift) + 'px';

  if (positionX < shift) {
    spider.style.left = 0;
  }

  let positionY = e.clientY - position.top - wallBorder;
  const maxPositionY = position.top + wall.offsetHeight - wallBorder - shift;

  if (e.clientY > maxPositionY) {
    positionY = maxPositionY - position.top - wallBorder;
  }

  spider.style.top = (positionY - shift) + 'px';

  if (positionY < shift) {
    spider.style.top = 0;
  }
});
