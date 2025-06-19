'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  const wallCoordinates = wall.getBoundingClientRect();
  const computedProperty = getComputedStyle(wall);
  const borderWidth = parseFloat(computedProperty.borderWidth);

  if (
    e.clientX >= wallCoordinates.left &&
    e.clientX <= wallCoordinates.right &&
    e.clientY >= wallCoordinates.top &&
    e.clientY <= wallCoordinates.bottom
  ) {
    let x =
      e.clientX - wallCoordinates.left - borderWidth - spider.offsetWidth / 2;
    let y =
      e.clientY - wallCoordinates.top - borderWidth - spider.offsetHeight / 2;

    x = Math.max(0, Math.min(x, wall.clientWidth - spider.offsetWidth));
    y = Math.max(0, Math.min(y, wall.clientHeight - spider.offsetHeight));

    spider.style.top = y + 'px';
    spider.style.left = x + 'px';
  }
});
